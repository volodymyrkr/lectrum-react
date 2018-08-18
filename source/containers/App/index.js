import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Feed from "../../components/Feed";
import avatar from "../../theme/assets/homer.png";

const userConfig = {
    avatar,
    currentUserFirstName: "Homer",
    currentUserLastName: "Unknown"
}

@hot(module)
class App extends Component {
    render () {
        return (
            <>
                <Feed {... userConfig}/>
            </>
        );
    }
}

export default App;
