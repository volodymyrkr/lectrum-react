import React, { Component } from 'react';

import Styles from './styles.m.css';

import avatar from '../../theme/assets/homer.png';

class Composer extends Component {
    render () {
        return (
            <section className={Styles.composer}>
                <img src={avatar} alt="" className="src"/>
                <form>
                    <textarea placeholder="Input your name"></textarea>
                    <input type="submit" value="post"/>
                </form>
            </section>
        );
    }
}

export default Composer;
