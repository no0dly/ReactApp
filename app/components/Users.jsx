var React = require('react');
import UsersList from 'UsersList';

var Users = React.createClass({
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="heading main-heading">
                      <h1 className="title">Users list</h1>
                    </div>
                    <UsersList/>
                </div>
            </div>
        );
    }
});

module.exports = Users;
