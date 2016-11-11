var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render() {
        return (
            <nav className="nav has-shadow">
              <div className="container">
                <div className="nav-left">
                  <IndexLink to="/" className="nav-item is-tab" activeClassName="is-active">Home</IndexLink>
                  <Link to="/news" className="nav-item is-tab" activeClassName="is-active">News</Link>
                  <Link to="/users" className="nav-item is-tab" activeClassName="is-active">Users</Link>
                </div>
              </div>
            </nav>
        );
    }
});

module.exports = Nav;
