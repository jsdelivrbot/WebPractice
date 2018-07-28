import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import IPAddressContainer from "./IPAddressContainer";
import "./IPAddress.css";
 
var destination = document.querySelector("#container");
 
ReactDOM.render(
    <div>
        <IPAddressContainer/>
    </div>,
    destination
);