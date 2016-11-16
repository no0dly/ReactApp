var React = require('react');
var {connect} = require('react-redux');
var actions  = require('actions');

import NewsModal from 'NewsModal';
import NewsList from 'NewsList';
import NewsForm from 'NewsForm';

export var News = React.createClass({
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
                        <NewsForm/>
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
