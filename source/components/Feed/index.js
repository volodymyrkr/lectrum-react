import React, { Component } from 'react';
import Styles from './styles.m.css';
import Composer from "../Composer";
import Post from "../Post";
import StatusBar from "../StatusBar";

import lisaAvatar from "../../theme/assets/lisa.png";
import homerAvatar from "../../theme/assets/homer.png";

import {getUniqueID} from '../../instruments';

class Feed extends Component {
    state = {
        posts:[
            {id:getUniqueID(), avatar:lisaAvatar, comment:"asdasdasd", currentUserFirstName: "asd", currentUserLastName: "zxc"}
        ]
    }

    addPost = (post) => {
        this.setState(
            (prevState)=>({
                posts:[{
                    id:getUniqueID(),
                    comment: post.comment,
                    avatar: post.avatar,
                    currentUserFirstName: post.userFirstName,
                    currentUserLastName: post.userLastName
                }, ...prevState.posts]
            })
        )
    }

    render () {
        const postsJSX = (
            <div className={Styles.postsContainer}>
                {
                    this.state.posts.map((item) => {
                        return (
                            <Post
                                key={item.id}
                                id = {item.id}
                                avatar={item.avatar}
                                comment = {item.comment}
                                userName={`${item.currentUserFirstName} ${item.currentUserLastName}`}>
                                {["All rights reserved", "Demo version"]}
                            </Post>
                        );
                    })
                }
            </div>
        );

        return (
            <section className={Styles.feed}>
                <StatusBar/>
                <Composer onPost={this.addPost}/>
                {postsJSX}
            </section>
        );
    }
}

export default Feed;
