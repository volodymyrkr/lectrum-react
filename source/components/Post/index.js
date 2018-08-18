import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';

import Styles from './styles.m.css';

import avatar from "../../theme/assets/lisa.png";

class Post extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        userName: PropTypes.string.isRequired
    }

    static defaultProps = {
        userName: "Unknown Default"
    }
    render () {
        const {index:commentIndex, userName="Unknown"} = this.props;
        return (
            <section className={Styles.post}>
                <span className={Styles.cross}></span>
                <img src={avatar} alt="" className="src"/>
                <a>{userName}</a>
                <time>{moment().locale('ru').format("MMMM D hh:mm a")}</time>
                <p>Comment {commentIndex}</p>
                <ul className={Styles.listItems}>{this.props.children.map((item)=><li key={item}>{item}</li>)}</ul>
            </section>
        );
    }
}

export default Post;
