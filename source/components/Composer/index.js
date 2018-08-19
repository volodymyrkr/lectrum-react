import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.m.css';

import { withProfile } from "../../hoc/withProfile";

export class Composer extends Component {
    static propTypes = {
        onPost:           PropTypes.func.isRequired,
        onRemoveAllPosts: PropTypes.func.isRequired
    };

    constructor (props) {
        super(props);
        this.state = {...props};

    }
    state = {
        comment:              ''
    };

    addPost () {
        const { comment } = this.state;
        const { onPost, avatar, currentUserFirstName, currentUserLastName } = this.props;

        if (!comment.trim()) {
            return;
        }

        onPost({
            avatar:        avatar,
            userFirstName: currentUserFirstName,
            userLastName:  currentUserLastName,
            comment:       comment
        });

        this.setState({
            comment: ""
        });
    }

    onRemoveAllPostsHandler = () => {
        const { onRemoveAllPosts } = this.props;
        onRemoveAllPosts();
    };

    onChangeTextArea = (e) => {
        const { value } = e.target;
        this.setState({
            comment: value
        });
    };

    onCopyCutHandler = (e) => {
        debugger;
        e.preventDefault();
    };

    onKeyPressHandler = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            this.addPost();
        }
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        this.addPost();
    };

    render () {
        const { comment } = this.state;
        const { avatar, currentUserFirstName, currentUserLastName } = this.props;

        return (
            <section className={Styles.composer}>
                <div>
                    <img src={avatar} alt="" className="src"/>
                    <div
                        className={Styles.userName}>{currentUserFirstName} {currentUserLastName}</div>
                </div>
                <form id="form" onSubmit={this.onSubmitForm} onKeyDown={this.onKeyPressHandler}>
                    <textarea id="text"
                              placeholder={`Input your post ${currentUserFirstName}`}
                              value={comment}
                              onChange={this.onChangeTextArea}
                              onCut={this.onCopyCutHandler}
                              onCopy={this.onCopyCutHandler}

                    ></textarea>
                    <input type="submit" value="post"/>
                </form>
                <input type="button" value="Remove All" onClick={this.onRemoveAllPostsHandler}/>
            </section>
        );
    }
}

export default withProfile(Composer);
