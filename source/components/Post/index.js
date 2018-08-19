import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from "../../hoc/withProfile";
import moment from 'moment';
import 'moment/locale/ru';

import Styles from './styles.m.css';

class Post extends Component {
    static propTypes = {
        userName: PropTypes.string.isRequired,
        id: PropTypes.number,
        avatar: PropTypes.string,
        comment: PropTypes.string
    };

    static defaultProps = {
        userName: "Unknown"
    };

    render () {
        const { id, userName = "noname", avatar, comment  } = this.props;
        return (
            <Consumer>
                {
                    (context) => {
                        return (
                            <section className={Styles.post}>
                                <span className={Styles.cross}></span>
                                <img src={avatar} alt="" className="src"/>
                                <a className={`${Styles.userName}`}>{userName}</a>
                                <time>{moment().locale('ru').format("MMMM D hh:mm a")}</time>
                                <p>{context.currentUserFirstName}, {id} {comment}</p>
                                <ul className={Styles.listItems}>
                                    {
                                        this.props.children.map(
                                            (item) => {
                                                return <li key={item}>{item}</li>;
                                            }
                                        )
                                    }
                                </ul>
                            </section>
                        );
                    }
                }

            </Consumer>
        );
    }
}

export default Post;
