import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.m.css';

import avatar from '../../theme/assets/homer.png';
import { Consumer } from "../../hoc/withProfile";

class Composer extends Component {
    static propTypes = {
    };

    state = {
        comment: '',
        avatar: avatar,
        currentUserFirstName:'',
        currentUserLastName:''
    }
    addPost(post) {
        this.props.onPost(post);
    }
    onChangeTextArea=(e)=>{
        const {value} = e.target;
        this.setState({
            comment: value
        })
    }

    onSubmitForm =(e)=>{
        e.preventDefault();
        const {comment,avatar,currentUserFirstName,currentUserLastName} = this.state;
        if (!comment) {
            return null;
        }

        this.addPost({
            avatar: avatar,
            userFirstName: currentUserFirstName,
            userLastName: currentUserLastName,
            comment: comment
        });

        this.setState({
            comment:""
        })
    }
    render () {
        const {comment} = this.state;

        return (
            <Consumer>
                {
                    (context) => {
                        return (
                            <section className={Styles.composer}>
                                <div>
                                    <img src={avatar} alt="" className="src"/>
                                    <div className={Styles.userName}>{context.currentUserFirstName} {context.currentUserLastName}</div>
                                </div>
                                <form onSubmit={this.onSubmitForm}>
                                    <textarea id="text"
                                        placeholder={`Input your post ${context.currentUserFirstName}`}
                                        value={comment}
                                        onChange={this.onChangeTextArea}
                                    ></textarea>
                                    <input type="submit" value="post"/>
                                </form>
                            </section>
                        );
                    }
                }
            </Consumer>
        );
    }
}

export default Composer;
