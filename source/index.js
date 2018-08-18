// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Theme
import './theme/init';

const start = (
    <h1
        style = { {
            display:         'flex',
            justifyContent:  'center',
            alignItems:      'center',
            minHeight:       '100vh',
            backgroundColor: '#070A13',
            color:           'white',
            fontSize:        24,
            fontWeight:      '600',
            textAlign:       'center',
        } }>
        Добро пожаловать на интенсив по React
    </h1>
);

let variable = "asd";

const H1 = <h1 title="asd">Head 1</h1>;
const H2 = () => <h1 title="asd">Head 2</h1>;

const list = [... Array(10).keys()].map((item)=><li key={item}>{item}</li>);

console.log(Array(10).keys());

ReactDOM.render(<ul>{list}</ul>, document.getElementById('app'));
