var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');

export var NewsItem = React.createClass({
    removeNews() {
        var {id, dispatch} = this.props;

        dispatch(actions.removeNews(id));
    },
    render() {
        var {title, description, createdAt} = this.props;
        var createAtFormated = moment.unix(createdAt).format('HH:mm DD.MM.YYYY');
        return (
            <li className="card is-fullwidth">
                <header className="card-header">
                    <p className="card-header-title">
                        {title}
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        {description}
                        <div>
                            <small>{createAtFormated}</small>
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <a onClick={this.editNews} className="card-footer-item">Edit</a>
                    <a onClick={this.removeNews} className="card-footer-item">Delete</a>
                </footer>
          </li>
        );
    }
});

export default connect()(NewsItem);
