import React, { Component } from "react";
import PropTypes from "prop-types";

import Styles from "./styles.m.css";

import { withProfile } from "../../hoc/withProfile";

export class Composer extends Component {
    static propTypes = {
        // onPost:           PropTypes.func.isRequired,
        // onRemoveAllPosts: PropTypes.func.isRequired,
    };

    constructor (props) {
        super(props);
    }

    state = {
        comment: "",
        ...this.props,
    };

    addPost () {
        const { comment } = this.state;
        const {
            onPost,
            avatar,
            currentUserFirstName,
            currentUserLastName,
        } = this.props;

        if (!comment.trim()) {
            return;
        }

        onPost({
            avatar,
            userFirstName: currentUserFirstName,
            userLastName:  currentUserLastName,
            comment,
        });

        this.setState({
            comment: "",
        });
    }

    onRemoveAllPostsHandler = () => {
        const { onRemoveAllPosts } = this.props;

        onRemoveAllPosts();
    };

    onChangeTextArea = (e) => {
        const { value } = e.target;

        this.setState({
            comment: value,
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
       // e.preventDefault();
        this.addPost();
    };

    render () {
        const { comment } = this.state;
        const {
            avatar,
            currentUserFirstName,
            currentUserLastName,
        } = this.props;

        return (
            <section className = { Styles.composer }>
                <div>
                    <img alt = '' className = 'src' src = { avatar } />
                    <div className = { Styles.userName }>
                        {currentUserFirstName} {currentUserLastName}
                    </div>
                </div>
                <form
                    id = 'form'
                    onKeyDown = { this.onKeyPressHandler }
                    onSubmit = { this.onSubmitForm }>
                    <textarea
                        id = 'text'
                        onChange = { this.onChangeTextArea }
                        onCopy = { this.onCopyCutHandler }
                        onCut = { this.onCopyCutHandler }
                        placeholder = { `Input your post ${currentUserFirstName}` }
                        value = { comment }
                    />
                    <input type = 'submit' value = 'post' />
                </form>
                <input
                    type = 'button'
                    value = 'Remove All'
                    onClick = { this.onRemoveAllPostsHandler }
                />
            </section>
        );
    }
}

export default withProfile(Composer);
