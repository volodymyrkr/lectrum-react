import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.m.css';

import avatar from '../../theme/assets/homer.png';
import { Consumer } from "../../hoc/withProfile";

class Composer extends Component {
    static propTypes = {
    };

    render () {
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
                                <form>
                                    <textarea placeholder={`Input your post ${context.currentUserFirstName}`}></textarea>
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
