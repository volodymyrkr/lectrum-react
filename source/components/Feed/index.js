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

class Feed extends Component {
    state = {
        isSpinning: true,
        posts: [
            { id:                     getUniqueID(),
                avatar:               lisaAvatar,
                comment:              "asdasdasd",
                currentUserFirstName: "asd",
                currentUserLastName:  "zxc"
            }
        ]
    };

    addPost = (post) => {
        this.setState(
            (prevState) => ({
                posts: [{
                    id:                   getUniqueID(),
                    comment:              post.comment,
                    avatar:               post.avatar,
                    currentUserFirstName: post.userFirstName,
                    currentUserLastName:  post.userLastName
                }, ...prevState.posts]
            })
        );
    };

    removePost = (post) => {
        const posts = this.state.posts;
        this.setState({
            posts: posts.filter(
                (item) => item.id !== post.id
            )
        });

    };

    removeAllPosts = () => {
        this.setState({
            posts: []
        });

    };

    render () {
        const {posts, isSpinning} = this.state;
        const postsJSX = (
            <div className={Styles.postsContainer}>
                {
                    posts.map((item) => {
                        return (
                            <Catcher key={item.id}>
                            <Post
                                id={item.id}
                                avatar={item.avatar}
                                comment={item.comment}
                                userName={`${item.currentUserFirstName} ${item.currentUserLastName}`}
                                onRemove={this.removePost}
                            >
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
                <Composer onPost={this.addPost} onRemoveAllPosts={this.removeAllPosts}/>
                <Counter count={posts.length} />
                {postsJSX}
                <Spinner isSpinning={isSpinning}/>
            </section>
        );
    }
}

export default Feed;
