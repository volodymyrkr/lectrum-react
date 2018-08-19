import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from "../../hoc/withProfile";
import moment from 'moment';
import 'moment/locale/ru';

import Styles from './styles.m.css';
import { errorStyle, successStyle } from "../../utils/errors";

class Post extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        comment: PropTypes.string
    };

    static defaultProps = {
        userName: "Unknown"
    };

    componentWillMount () {
        console.log("%c WILLMOUNT", successStyle);
    }

    componentDidMount () {
        console.log("%c DIDMOUNT", errorStyle);
    }


    onClickHandler = (e)=> {
        const {id, onRemove} = this.props;

        onRemove({id:id});
    }

    render () {
        console.log("%c RENDER", successStyle);
        const { id, userName = "noname", avatar, comment  } = this.props;
        if (comment=="error") undefined();
        return (
            <Consumer>
                {
                    (context) => {
                        return (
                            <section className={Styles.post}>
                                <span className={Styles.cross} onClick={this.onClickHandler}></span>
                                <img src={avatar} alt="" className="src"/>
                                <a className={`${Styles.userName}`}>{userName}</a>
                                <time>{moment().locale('ru').format("MMMM D hh:mm a")}</time>
                                <p>{context.currentUserFirstName}, {comment}</p>
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
