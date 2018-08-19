import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.m.css';

import avatar from '../../theme/assets/homer.png';
import { Consumer } from "../../hoc/withProfile";

class Composer extends Component {
    static propTypes = {
        onPost: PropTypes.func.isRequired,
        onRemoveAllPosts: PropTypes.func.isRequired
    };

    state = {
        comment:              '',
        avatar:               avatar,
        currentUserFirstName: '',
        currentUserLastName:  ''
    };

    addPost () {
        const { comment, avatar, currentUserFirstName, currentUserLastName } = this.state;
        const { onPost } = this.props;

        if (!comment.trim()){
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

    onRemoveAllPostsHandler= ()=> {
        const { onRemoveAllPosts } = this.props;
        onRemoveAllPosts();
    }
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
        const { comment, avatar, currentUserFirstName, currentUserLastName } = this.state;
        if (!comment.trim()) {
            return null;
        }

        this.addPost({
            avatar:        avatar,
            userFirstName: currentUserFirstName,
            userLastName:  currentUserLastName,
            comment:       comment
        });
    };

    render () {
        const { comment } = this.state;

        return (
            <Consumer>
                {
                    (context) => {
                        return (
                            <section className={Styles.composer}>
                                <div>
                                    <img src={avatar} alt="" className="src"/>
                                    <div
                                        className={Styles.userName}>{context.currentUserFirstName} {context.currentUserLastName}</div>
                                </div>
                                <form id="form" onSubmit={this.onSubmitForm} onKeyDown={this.onKeyPressHandler}>
                                    <textarea id="text"
                                              placeholder={`Input your post ${context.currentUserFirstName}`}
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
            </Consumer>
        );
    }
}

export default Composer;
