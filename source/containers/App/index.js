import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Feed from "../../components/Feed";
import avatar from "../../theme/assets/homer.png";

import {Provider} from "../../hoc/withProfile";

import './common.css';

const userConfig = {
    avatar,
    currentUserFirstName: "Homer",
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
