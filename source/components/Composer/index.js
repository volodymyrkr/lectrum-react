import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.m.css';

import avatar from '../../theme/assets/homer.png';
import { Consumer } from "../../hoc/withProfile";

class Composer extends Component {
    static propTypes = {
    };

    state = {
        comment: ''
    }

    onChangeTextArea=(e)=>{
        const {value} = e.target;
        this.setState({
            comment: value
        })
    }

    onSubmitForm =(e)=>{
        e.preventDefault();
        console.log(e.target.text.value);
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
