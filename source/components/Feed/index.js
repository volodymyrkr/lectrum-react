import React, { Component } from 'react';
import Styles from './styles.m.css';
import Composer from "../Composer";
import Post from "../Post";

class Feed extends Component {
    render () {
        return (
            <section className={Styles.feed}>
                <Composer/>
                {
                    [...Array(10).keys()].map((item) => {
                        return (
                            <Post key={item} index={item} {...this.props}>
                                {["All rights reserved", "Demo version"]}
                            </Post>
                        );
                    })
                }
            </section>
        );
    }
}

export default Feed;
