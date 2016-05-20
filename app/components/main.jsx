var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (
        <div>
            <Nav/>
            <p>main.js rendered</p>
            {props.children}
        </div>
    );    
};

module.exports = Main;