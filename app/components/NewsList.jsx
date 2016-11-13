var React = require('react');
var {connect} = require('react-redux');

import NewsItem from 'NewsItem';

export var NewsList = React.createClass({
    render() {
        var {news} = this.props;
        var renderNews = () => {
            return news.map( (oneNews) => {
                return <NewsItem key={oneNews.id} {...oneNews}/>
            })
        }
        return (
            <ul className="news-list">
                {renderNews()}
            </ul>
        );
    }
});

export default connect(
    (state) => {
        return {
            news: state.news
        }
    }
)(NewsList);
