import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import Composer from "../components/Composer";
import Post from "../components/Post";

@hot(module)
class App extends Component {
    render() {
        return (
            <>
                <Composer/>
                <Post/>
            </>
        );
    }
}

export default App;