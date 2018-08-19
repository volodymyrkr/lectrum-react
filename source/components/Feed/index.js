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

import { api } from "../../REST/api";

class Feed extends Component {
    state = {
        isSpinning: false,
        posts:      [
            { id:                   getUniqueID(),
                avatar:               lisaAvatar,
                comment:              "asdasdasd",
                currentUserFirstName: "asd",
                currentUserLastName:  "zxc",
            }
        ],
    };

    addPost = (post) => {
        this.setState(
            (prevState) => ({
                posts: [{
                    id:                   getUniqueID(),
                    comment:              post.comment,
                    avatar:               post.avatar,
                    currentUserFirstName: post.userFirstName,
                    currentUserLastName:  post.userLastName,
                }, ...prevState.posts],
            })
        );
    };

    removePost = (post) => {
        const posts = this.state.posts;

        this.setState({
            posts: posts.filter(
                (item) => item.id !== post.id
            ),
        });

    };

    removeAllPosts = () => {
        this.setState({
            posts: [],
        });

    };
    setPostsFetchingState=(isSpinning)=>{
        this.setState({
            isSpinning
        })
    }
    fetchPostsAsync = async () => {
        try {
            this.setPostsFetchingState(true)
            const posts = await api.fetchPosts();
            this.setState(()=>({
                posts
            }))

        } catch (error) {

        } finally {
            this.setPostsFetchingState(false);
        }
    }
    componentDidMount () {
        this.fetchPostsAsync();
    }

    render () {
        const { posts, isSpinning } = this.state;
        const postsJSX = (
            <div className = { Styles.postsContainer }>
                {
                    posts.map((item) => {
                        return (
                            <Catcher key = { item.id }>
                                <Post
                                    avatar = { item.avatar }
                                    comment = { item.comment }
                                    id = { item.id }
                                    onRemove = { this.removePost }
                                    userName = { `${item.currentUserFirstName} ${item.currentUserLastName}` }>
                                    {["All rights reserved", "Demo version"]}
                                </Post>
                            </Catcher>
                        );
                    })
                }
            </div>
        );

        return (
            <section className = { Styles.feed }>
                <StatusBar />
                <Composer onPost = { this.addPost } onRemoveAllPosts = { this.removeAllPosts } />
                <Counter count = { posts.length } />
                {postsJSX}
                <Spinner isSpinning = { isSpinning } />
            </section>
        );
    }
}

export default Feed;
