import React, {Component} from 'react';

import moment from 'moment';
import 'moment/locale/ru';

import avatar from "../../theme/assets/lisa.png";

class Post extends Component {
    render() {
        moment.locale('ru');
        console.log(moment.locale());
        return (
            <>
                <img src={avatar} alt="" className="src"/>
                <p><a>Your name</a></p>
                <time>{moment().format("MMMM D hh:mm a")}</time>
                <p>Comment</p>
            </>
        );
    }
}

export default Post;
