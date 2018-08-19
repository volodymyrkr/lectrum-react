import React, { Component } from 'react';
import Styles from './styles.m.css';
import Composer from "../Composer";
import Post from "../Post";
import StatusBar from "../StatusBar";

import lisaAvatar from "../../theme/assets/lisa.png";
import homerAvatar from "../../theme/assets/homer.png";

class Feed extends Component {
    state = {
        posts: [
            {id:0, avatar:lisaAvatar, comment:"asdasdasd", currentUserFirstName: "asd", currentUserLastName: "zxc"},
            {id:1, avatar:lisaAvatar, comment:"bla bla bla", currentUserFirstName: "asd", currentUserLastName: "zxc"},
            {id:2, avatar:lisaAvatar, comment:"asdasdasd", currentUserFirstName: "asd", currentUserLastName: "zxc"},
            {id:3, avatar:homerAvatar, comment:"asdasdasd", currentUserFirstName: "asd", currentUserLastName: "zxc"},
            {id:4, avatar:lisaAvatar, comment:"asdasdasd", currentUserFirstName: "asd", currentUserLastName: "zxc"}
        ]
    }
    render () {
        const postsJSX = this.state.posts.map((item) => {
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
        });
        return (
            <section className={Styles.feed}>
                <StatusBar/>
                <Composer/>
                <div className={Styles.postsContainer}>
                    {postsJSX}
                </div>
            </section>
        );
    }
}

export default Feed;
