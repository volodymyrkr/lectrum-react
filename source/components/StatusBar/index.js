import React, { Component } from 'react';
import { Consumer } from "../../hoc/withProfile";

import Styles from './styles.m.css';

class StatusBar extends Component {
    render () {
        return (
            <Consumer>
                {
                    (context) => {
                        return (
                            <section className={Styles.statusBar}>
                                <div className={`${Styles.status} ${Styles.offline}`}>
                                    <div>Offline</div>
                                    <span></span>
                                </div>
                                <button>
                                    <img src={context.avatar} alt=""/>
                                    <span>{context.currentUserFirstName}</span>&nbsp;
                                    <span>{context.currentUserLastName}</span>
                                </button>
                            </section>
                        );
                    }
                }
            </Consumer>

        );
    }
}

export default StatusBar;
