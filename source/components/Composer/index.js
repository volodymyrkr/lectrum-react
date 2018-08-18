import React, {Component} from 'react';

import avatar from '../../theme/assets/homer.png';

class Composer extends Component {
    render() {
        return (
            <div>
                <img src={avatar} alt="" className="src"/>
                <textarea placeholder="Input your name"></textarea>
                <input type="submit" value="post"/>
            </div>
        );
    }
}

export default Composer;