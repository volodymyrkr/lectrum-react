import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer, withProfile } from "../../hoc/withProfile";
import moment from 'moment';
import 'moment/locale/ru';

import Styles from './styles.m.css';
import { errorStyle, successStyle } from "../../utils/errors";

@withProfile
export default class Post extends Component {
    static propTypes = {
        id:       PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
        avatar:   PropTypes.string,
        comment:  PropTypes.string
    };

    static defaultProps = {
        userName: "Unknown"
    };

    getCross() {
        const {
            firstName, lastName, currentUserFirstName, currentUserLastName
        } = this.props;
        return `${firstName} ${lastName}`===`${currentUserFirstName} ${currentUserLastName}`?<span className={Styles.cross} onClick={this.onClickHandler}></span>:null;
    }
    componentWillMount () {
        console.log(" WILLMOUNT ", this.props);
    }

    componentDidMount () {
        console.log("%c DIDMOUNT", errorStyle);
    }

    onClickHandler = (e) => {
        const { id, onRemove } = this.props;

        onRemove({ id: id });
    };

    render () {
        console.log("%c RENDER", successStyle);
        const { id, firstName: userName, lastName, avatar, comment, created: time } = this.props;
        if (comment == "error") {
            undefined();
        }
        const cross = this.getCross();
        return (
            <section className={Styles.post}>
                {cross}
                <img src={avatar} alt=""/>
                <a className={`${Styles.userName}`}>{userName + " " + lastName}</a>
                <time>{moment.unix(time).locale('ru').format("MMMM D hh:mm a")}</time>
                <p>{comment}</p>
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

