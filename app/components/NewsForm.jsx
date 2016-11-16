var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var NewsForm = React.createClass({
    toggleModal() {
        var {dispatch} = this.props;

        dispatch(actions.toggleModal());
    },

    onSearch() {
        var searchText = this.refs.searchText.value;
        var {dispatch} = this.props;
        dispatch(actions.searchNews(searchText));
    },
    render() {
        return (
            <div className="level-right">
                <input ref="searchText" onChange={this.onSearch} className="input" type="text" placeholder="Search news"/>
                <a onClick={this.toggleModal} className="button is-primary">Add news</a>
            </div>
        );
    }
});

export default connect()(NewsForm);
