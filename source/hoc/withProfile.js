import React, { createContext, Component } from "react";

const { Provider, Consumer } = createContext();

const withProfile = (Enhanceable) =>
    class withProfile extends Component {
        render () {
            return (
                <Consumer>
                    {(context) => <Enhanceable { ...context } { ...this.props } />}
                </Consumer>
            );
        }
    };

export { Provider, Consumer, withProfile };
