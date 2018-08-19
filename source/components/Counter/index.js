import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.m.css';

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number
    }
    static defaultProps = {
        count: 0
    }
    render () {
        return (
            <section className={Styles.counter}>
                Posts Count: {this.props.count}
            </section>
        );
    }
}

export default Counter;
