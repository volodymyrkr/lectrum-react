import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Feed from "../../components/Feed";

@hot(module)
class App extends Component {
    render () {
        return (
            <>
                <Feed/>
            </>
        );
    }
}

export default App;
