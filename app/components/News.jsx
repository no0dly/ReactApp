var React = require('react');
var {connect} = require('react-redux');
var actions  = require('actions');

import NewsModal from 'NewsModal';
import NewsList from 'NewsList';

export var News = React.createClass({
    toggleModal() {
        var {dispatch} = this.props;

        dispatch(actions.toggleModal());
    },

    render() {
        var {modalExpanded} = this.props;
        var renderModal = () => {
            if(modalExpanded) {
                return <NewsModal/>;
            }
        }
        return (
            <div className="section news">
                <div className="container">
                    <div className="level">
                        <div className="level-left title">
                            <h1>News</h1>
                        </div>
                        <div className="level-right">
                            <a onClick={this.toggleModal} className="button is-primary">Add news</a>
                        </div>
                    </div>
                </div>
                <NewsList/>
                {renderModal()}
            </div>
        );
    }
});

export default connect(
    (state) => {
        return {
            modalExpanded: state.modalExpanded
        }
    }
)(News);
