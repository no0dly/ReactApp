var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');

export var NewsItem = React.createClass({
    removeNews() {
        var {id, dispatch} = this.props;

        dispatch(actions.removeNews(id));
    },

    editNews() {
        var {id, dispatch} = this.props;

        dispatch(actions.editNews(id));
    },

    saveNews() {
        var {id, dispatch} = this.props;

        var newTitle = this.refs.editedTitle.value;
        var newDescription = this.refs.editedDescription.value;

        this.refs.editedTitle.value = '';
        this.refs.editedDescription.value = '';

        dispatch(actions.saveNews(id, newTitle, newDescription));
        

    },

    render() {
        var {title, description, createdAt, editMode, editedAt} = this.props;
        var timestamp = createdAt;
        var dateFormated;
        if(editedAt) {
            timestamp = editedAt;
        }

        dateFormated = moment.unix(timestamp).format('HH:mm DD.MM.YYYY');

        var renderSaveEditBtns = () => {
            if (editMode) {
                return (
                    <a onClick={this.saveNews} className="card-footer-item">Save</a>
                )
            } else {
                return (
                    <a onClick={this.editNews} className="card-footer-item">Edit</a>

                )
            }
        }

        return (
            <li className="card is-fullwidth">
                <header className="card-header">
                    <p className="card-header-title">
                        {
                            (editMode) ? <input ref="editedTitle" type="text" className="input" defaultValue={title}/> : title
                        }
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        {
                            (editMode) ? <input ref="editedDescription" type="text" className="input" defaultValue={description}/> : description
                        }
                        <div>
                            <small>{dateFormated}</small>
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    {renderSaveEditBtns()}
                    <a onClick={this.removeNews} className="card-footer-item">Delete</a>
                </footer>
          </li>
        );
    }
});

export default connect()(NewsItem);
