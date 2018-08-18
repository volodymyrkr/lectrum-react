import React, { Component } from 'react';
import Styles from './styles.m.css';
import Composer from "../Composer";
import Post from "../Post";

class Feed extends Component {
    render () {
        const {avatar, currentUserFirstName, currentUserLastName} = this.props;
        return (
            <section className={Styles.feed}>
                <Composer/>
                <div className={Styles.postsContainer}>
                    {
                        [...Array(10).keys()].map((item) => {
                            return (
                                <Post key={item} index={item} userName={currentUserFirstName}>
                                    {["All rights reserved", "Demo version"]}
                                </Post>
                            );
                        })
                    }
                </div>
            </section>
        );
    }
}

export default Feed;
