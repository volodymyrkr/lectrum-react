import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Styles from './styles.m.css';
import { withProfile } from "../../hoc/withProfile";

class Like extends Component {
    static propTypes = {
        onLikePost: PropTypes.func.isRequired,
        id:         PropTypes.string.isRequired,
        likes:      PropTypes.arrayOf(
            PropTypes.shape({
                id:        PropTypes.string.isRequired,
                firstName: PropTypes.string.isRequired,
                lastName:  PropTypes.string.isRequired,
            })
        ),
    };

    static defaultProps = {
        likes: [],
    };

    state = {
        showLikers: false,
    };

    showLikers = () => {
        this.setState(() => ({ showLikers: true }));
    };
    hideLikers = () => {
        this.setState(() => ({ showLikers: false }));
    };

    likePost = () => {
        const { onLikePost, id } = this.props;

        onLikePost(id);
    };

    getLikedByMe = () => {
        const { currentUserFirstName, currentUserLastName, likes } = this.props;

        return likes.some(
            ({ firstName, lastName }) => {
                return `${firstName} ${lastName}` === `${currentUserFirstName} ${currentUserLastName}`;
            }
        );
    };
    getLikeStyles = () => {
        const likeByMe = this.getLikedByMe();

        return cx(Styles.icon, {
            [Styles.liked]: likeByMe,
        });
    };
    getLikersList = () => {
        const { showLikers } = this.state;
        const { likes } = this.props;
        const likesJSX = likes.map(
            ({ firstName, lastName, id }) => (
                <li key = { id }>{firstName} {lastName}</li>
            )
        );

        return likes.length && showLikers ? <ul>{likesJSX}</ul> : null;
    };
    getLikesDescription = () => {
        const { likes, currentUserFirstName, currentUserLastName } = this.props;
        const likedByMe = this.getLikedByMe();

        if (likes.length === 1 && likedByMe) {
            return `${currentUserFirstName} ${currentUserLastName}`;
        } else if (likes.length === 2 && likedByMe) {
            return `You and 1 other`;
        } else if (likedByMe) {
            return `You and ${likes.length - 1} others`;
        }

        return `${likes.length}`;
    };

    render () {
        const likers = this.getLikersList();
        const likeStyles = this.getLikeStyles();
        const likesDescription = this.getLikesDescription();

        return (
            <section className = { Styles.like }>
                <span className = { likeStyles } onClick = { this.likePost }>
                    Like
                </span>
                <div>
                    {likers}
                    <span onMouseEnter = { this.showLikers } onMouseLeave = { this.hideLikers }>
                        {likesDescription}
                    </span>
                </div>
            </section>
        );
    }
}

export default withProfile(Like);
