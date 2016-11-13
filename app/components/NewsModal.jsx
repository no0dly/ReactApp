var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var NewsModal = React.createClass({
    toggleModal() {
        var {dispatch} = this.props;

        dispatch(actions.toggleModal());
    },

    addNews(e) {
        e.preventDefault();

        var {dispatch} =this.props;
        var {title, description} = this.refs;
        dispatch(actions.addNews(title.value, description.value));
        dispatch(actions.toggleModal());
    },
    render() {
        return (
            <div className='modal is-active'>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <form className='box' onSubmit={this.addNews}>
                        <h2 className="title">Add news form</h2>
                        <p className="control">
                            <input ref="title" className="input" type="text" placeholder="News title" required/>
                        </p>
                        <p className="control">
                            <textarea ref="description" className="textarea" placeholder="Tell more about it.." required></textarea>
                        </p>
                        <div className='level-right'>
                            <input type="submit" className="button is-success" value="Submit"/>
                        </div>

                    </form>
                </div>
                <button onClick={this.toggleModal} className="modal-close"></button>
            </div>
        );
    }
});

export default connect()(NewsModal);
