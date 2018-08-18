import React, { Component } from 'react';

import moment from 'moment';
import 'moment/locale/ru';

import Styles from './styles.m.css';

import avatar from "../../theme/assets/lisa.png";

class Post extends Component {
    render () {
        return (
            <section className={Styles.post}>
                <span className={Styles.cross}></span>
                <img src={avatar} alt="" className="src"/>
                <a>Your name</a>
                <time>{moment().locale('ru').format("MMMM D hh:mm a")}</time>
                <p>Comment</p>
            </section>
        );
    }
}

export default Post;
