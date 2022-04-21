import React from "react";
import ReactDOM from "react-dom";

export const Header = () => {
    return (
        <div>
            <h1> Reactjs</h1>
        </div>
    );
};

if (document.querySelector("#hero")) {
    ReactDOM.render(<Header />, document.querySelector("#hero"));
}
