import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';

import Styles from './styles.m.css';

class Post extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        userName: PropTypes.string.isRequired,
        currentUserFirstName: PropTypes.string,
        currentUserLastName: PropTypes.string,
        avatar: PropTypes.string.isRequired
    }

    static defaultProps = {
        userName: "Unknown Homer"
    }
    render () {
        const {index:commentIndex, userName="Unknown", currentUserFirstName, currentUserLastName, avatar} = this.props;
        return (
            <section className={Styles.post}>
                <span className={Styles.cross}></span>
                <img src={avatar} alt="" className="src"/>
                <a>{userName!="Unknown"?userName:(currentUserFirstName+" "+currentUserLastName)}</a>
                <time>{moment().locale('ru').format("MMMM D hh:mm a")}</time>
                <p>Comment {commentIndex}</p>
                <ul className={Styles.listItems}>{this.props.children.map((item)=><li key={item}>{item}</li>)}</ul>
            </section>
        );
    }
}

export default Post;
