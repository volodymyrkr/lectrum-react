import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Feed from "../../components/Feed";
import avatar from "../../theme/assets/lisa.png";

import {Provider} from "../../hoc/withProfile";

import './common.css';

const userConfig = {
    avatar,
    currentUserFirstName: "Lisa",
    currentUserLastName: "Simpson"
}

@hot(module)
class App extends Component {
    render () {
        return (
            <Provider value={userConfig}>
                <Feed />
            </Provider>
        );
    }
}

export default App;
