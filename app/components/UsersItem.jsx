var React = require('react');
var {connect} = require('react-redux');

export var UsersItem = React.createClass({
    render() {
        var {email, firstName, lastName, id, phone, tesisName, university, hostel} = this.props;

        return (
            <li className="column is-4">
                <div className="card is-fullwidth">
                    <div className="card-header">
                        <p className="card-header-title">
                          {firstName + " " + lastName}
                        </p>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <dl>
                                <li><b>id: </b> {id}</li>
                                <li><b>email: </b> {email}</li>
                                <li><b>phone: </b> {phone}</li>
                                <li><b>tesisName: </b> {tesisName}</li>
                                <li><b>university: </b> {university}</li>
                                <li><b>hostel: </b> {hostel}</li>
                            </dl>
                        </div>
                    </div>
                </div>
          </li>
        );
    }
});

export default connect()(UsersItem);
