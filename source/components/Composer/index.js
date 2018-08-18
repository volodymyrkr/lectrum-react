import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.m.css';

import avatar from '../../theme/assets/homer.png';

class Composer extends Component {
    static propTypes = {
        avatar: PropTypes.string.isRequired,
        currentUserFirstName: PropTypes.string.isRequired,
        currentUserLastName: PropTypes.string.isRequired
    }

    render () {
        const {avatar, currentUserFirstName, currentUserLastName} = this.props;
        return (
            <section className={Styles.composer}>
                <div>
                    <img src={avatar} alt="" className="src"/>
                    <div className={Styles.userName}>{currentUserFirstName} {currentUserLastName}</div>
                </div>
                <form>
                    <textarea placeholder="Input your post"></textarea>
                    <input type="submit" value="post"/>
                </form>
            </section>
        );
    }
}

export default Composer;
