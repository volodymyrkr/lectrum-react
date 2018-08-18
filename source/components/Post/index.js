import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';

import defaultAvatar from "../../theme/assets/lisa.png";

import Styles from './styles.m.css';

class Post extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        userName: PropTypes.string.isRequired,
    }

    static defaultProps = {
        userName: "Unknown"
    }
    render () {
        const {index:commentIndex, userName="noname"} = this.props;
        return (
            <section className={Styles.post}>
                <span className={Styles.cross}></span>
                <img src={defaultAvatar} alt="" className="src"/>
                <a className={`${Styles.userName}`}>{userName}</a>
                <time>{moment().locale('ru').format("MMMM D hh:mm a")}</time>
                <p>Comment {commentIndex}</p>
                <ul className={Styles.listItems}>
                    {
                        this.props.children.map(
                            (item)=>{return <li key={item}>{item}</li>}
                        )
                    }
                </ul>
            </section>
        );
    }
}

export default Post;
