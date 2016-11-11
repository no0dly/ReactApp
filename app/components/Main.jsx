var React = require('react');
var Nav = require('Nav');

var App = (props) => {
    return (
        <div className="container is-fluid">
            <Nav/>
            <div className="container">
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = App;
