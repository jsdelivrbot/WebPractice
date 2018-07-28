import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart';

import './cart.css';

const App = function() {
    var myStyle = {
        fontSize: 100,
        color:'#FF0000'
    }

    return <div>
            <h1 style={myStyle}>Header</h1>
        </div>;
}

ReactDOM.render(
    <div>
        <Cart/>
    </div>,
    document.querySelector(".container")
);