import React, { Component } from 'react';

import moment from 'moment';
import 'moment/locale/ru';

import * as styles from './css';

import avatar from "../../theme/assets/lisa.png";

class Post extends Component {
    render () {
        console.log(styles.default);
        return (
            <>
                <img src={avatar} alt="" className="src"/>
                <p><a
                    style={{
                        fontSize:    '3em',
                        paddingLeft: 50,
                        color:       'blue'
                    }}
                >Your name</a></p>
                <p style={styles.default}>Hello</p>
                <time style={styles.yellowTheme}>{moment().locale('ru').format("MMMM D hh:mm a")}</time>
                <p style={styles.blueTheme}>Comment</p>
            </>
        );
    }
}

export default Post;
