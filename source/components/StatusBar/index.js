import React, { Component } from 'react';
import { Consumer, withProfile } from "../../hoc/withProfile";
import {socket} from '../../socket';

import Styles from './styles.m.css';
import cx from 'classnames';

@withProfile
export default class StatusBar extends Component {
    state = {
        online: false,
    }
    componentDidMount() {
        socket.on('connect', () => {
            this.setState({
                online:true,
            })
        });
    }
    render () {
        const { avatar, currentUserFirstName, currentUserLastName } = this.props;
        const {online} = this.state;
        const statusStyles = cx(Styles.status, {
            [Styles.offline]: !online,
            [Styles.online]:  online,
        })
        const statusMessage = online?"Online":"Offline"

        return (
            <section className={Styles.statusBar}>
                <div className={statusStyles}>
                    <div>{statusMessage}</div>
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
