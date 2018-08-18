import React, { Component } from 'react';
import Styles from './styles.m.css';
import Composer from "../Composer";
import Post from "../Post";

class Feed extends Component {
    render () {
        return (
            <section className={Styles.feed}>
                <Composer/>
                <Post/>
            </section>
        );
    }
}

export default Feed;
