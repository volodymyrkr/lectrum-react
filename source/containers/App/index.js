import React, { Component, StrictMode } from "react";
import { hot } from "react-hot-loader";

import Feed from "../../components/Feed";
import avatar from "../../theme/assets/lisa.png";

import { Provider } from "../../hoc/withProfile";

import "./common.css";

import Catcher from "../../components/Catcher";

const userConfig = {
    avatar,
    currentUserFirstName: "Владимир",
    currentUserLastName:  "Кравченко",
};

@hot(module)
class App extends Component {
    shouldComponentUpdate () {
        return false;
    }

    render () {
        return (
            <Catcher>
                <Provider value = { userConfig }>
                    <Feed />
                </Provider>
            </Catcher>
        );
    }
}

export default App;
