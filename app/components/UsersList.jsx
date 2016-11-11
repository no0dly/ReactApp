var React = require('react');
var {connect} = require('react-redux');

import UsersItem from 'UsersItem';

export var UsersList = React.createClass({

    render() {
        var renderItems = () => {
            var {users} = this.props;

            return users.map( (user) => {
                return <UsersItem key={user.id} {...user}/>;
            });
        };

        return (
            <ul className="columns is-multiline">
                {renderItems()}
            </ul>
        );
    }
});

export default connect(
    (state) => {
        return state;
    }
)(UsersList);
