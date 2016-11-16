var React = require('react');
var {connect} = require('react-redux');
var VkAPI = require('VkAPI');

import NewsItem from 'NewsItem';

export var NewsList = React.createClass({
    render() {
        var {news, searchText} = this.props;
        var renderNews = () => {
            return VkAPI.filterAndSortNews(news, searchText).map( (oneNews) => {
                return <NewsItem key={oneNews.id} {...oneNews}/>
            });
        };
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
            news: state.news,
            searchText: state.searchText
        }
    }
)(NewsList);
