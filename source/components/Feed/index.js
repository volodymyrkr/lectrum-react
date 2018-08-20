import React, { Component } from 'react';
import Styles from './styles.m.css';
import Composer from "../Composer";
import Post from "../Post";
import StatusBar from "../StatusBar";

import lisaAvatar from "../../theme/assets/lisa.png";
import homerAvatar from "../../theme/assets/homer.png";

import { getUniqueID } from '../../instruments';
import Counter from "../Counter";
import Catcher from "../Catcher";
import Spinner from "../Spinner";

import { api, GROUP_ID} from "../../REST";
import {socket} from '../../socket';
import { withProfile } from "../../hoc/withProfile";

class Feed extends Component {
    state = {
        isSpinning: false,
        posts:      [
            {
                id:                   getUniqueID(),
                avatar:               lisaAvatar,
                comment:              "asdasdasd",
                currentUserFirstName: "asd",
                currentUserLastName:  "zxc",
            }
        ],
    };

    addPostAsync = async (post) => {
        // this.setState(
        //     (prevState) => ({
        //         posts: [{
        //             id:                   getUniqueID(),
        //             comment:              post.comment,
        //             avatar:               post.avatar,
        //             currentUserFirstName: post.userFirstName,
        //             currentUserLastName:  post.userLastName,
        //         }, ...prevState.posts],
        //     })
        // );
        try {
            this.setPostsFetchingState(true);
            const gettedPost = await api.createPost(post.comment);
            this.setState((prevState) => ({
                posts: [gettedPost, ...prevState.posts]
            }));
        } catch (e) {
            console.error(e.text);
        } finally {
            this.setPostsFetchingState(false);
        }
    };

    removePost = async (post) => {
        console.log("DELETE");
        // const posts = this.state.posts;
        //
        // this.setState({
        //     posts: posts.filter(
        //         (item) => item.id !== post.id
        //     ),
        // });
        try {
            this.setPostsFetchingState(true);
            await api.removePost(post);
            this.setState((prevState) => ({
                posts: prevState.posts.filter(
                    (item) => item.id !== post.id
                )
            }));
        } catch (e) {
            console.error(e.text);
        } finally {
            this.setPostsFetchingState(false);
        }
    };
    likePost = async (post) => {
        try {
            this.setPostsFetchingState(true);
            const likedPost = await api.likePost(post.id);
            this.setState({
                    posts: this.state.posts.map(
                        (item) => {
                            return (item.id === post.id) ? likedPost : item
                        }
                    )
                }
            );
        } catch (e) {
            console.error(e.text);
        } finally {
            this.setPostsFetchingState(false);
        }
    };
    removeAllPosts = () => {
        // this.setState({
        //     posts: [],
        // });
        this.filterPostsByCurrentUser();
    };

    filterPostsByCurrentUser = () => {
        const { currentUserFirstName: firstName, currentUserLastName: lastName } = this.props;
        this.setState((prevState) => ({
            posts: prevState.posts.filter(
                (item) => `${item.firstName} ${lastName}` === `${firstName} ${lastName}`
            )
        }));
    };

    setPostsFetchingState = (isSpinning) => {
        this.setState({
            isSpinning,
        });
    };

    fetchPostsAsync = async () => {
        try {
            this.setPostsFetchingState(true);
            const posts = await api.fetchPosts();

            this.setState(() => ({
                posts,
            }));

        } catch (error) {

        } finally {
            this.setPostsFetchingState(false);
        }
    };

    componentDidMount () {
        this.fetchPostsAsync();
        socket.emit('join', GROUP_ID);
        socket.on('create', (postJSON)=>{
            const {data:createdPost} = JSON.parse(postJSON);
            const {currentUserFirstName, currentUserLastName} = this.props;
            console.log("POST CREATED",createdPost);
            if (`${currentUserFirstName} ${currentUserLastName}`!==`${createdPost.firstName} ${createdPost.lastName}`) {
                this.setState(
                    {
                        posts:[createdPost, ...this.state.posts]
                    }
                )
            }
        });
        socket.on('remove', (postJSON)=>{
            const {data:removedPost} = JSON.parse(postJSON);
            console.log("POST REMOVED",removedPost);
            this.setState(
                {
                    posts:this.state.posts.filter((item)=>(item.id!==removedPost))
                }
            )
        });
    }

    render () {
        const { posts, isSpinning } = this.state;
        const postsJSX = (
            <div className={Styles.postsContainer}>
                {
                    posts.map((item) => {
                        return (
                            <Catcher key={item.id}>
                                <Post
                                    {...item}
                                    // avatar={item.avatar}
                                    // comment={item.comment}
                                    // id={item.id}
                                    onRemove={this.removePost}
                                    onLike={this.likePost}
                                    userName={`${item.currentUserFirstName} ${item.currentUserLastName}`}>
                                    {["All rights reserved", "Demo version"]}
                                </Post>
                            </Catcher>
                        );
                    })
                }
            </div>
        );

        return (
            <section className={Styles.feed}>
                <StatusBar/>
                <Composer onPost={this.addPostAsync} onRemoveAllPosts={this.removeAllPosts}/>
                <Counter count={posts.length}/>
                {postsJSX}
                <Spinner isSpinning={isSpinning}/>
            </section>
        );
    }
}

export default withProfile(Feed);
