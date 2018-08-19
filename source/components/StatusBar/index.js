import React, { Component } from 'react';
import { Consumer, withProfile } from "../../hoc/withProfile";

import Styles from './styles.m.css';

@withProfile
export default class StatusBar extends Component {
    render () {
        const { avatar, currentUserFirstName, currentUserLastName } = this.props;

        return (
            <section className={Styles.statusBar}>
                <div className={`${Styles.status} ${Styles.offline}`}>
                    <div>Offline</div>
                    <span></span>
                </div>
                <button>
                    <img src={avatar} alt=""/>
                    <span>{currentUserFirstName}</span>&nbsp;
                    <span>{currentUserLastName}</span>
                </button>
            </section>
        );
    }
}
