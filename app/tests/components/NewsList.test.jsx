var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');
var {Provider} = require('react-redux');

import {configure} from 'configureStore';
import ConnectedNewsList, {NewsList} from 'NewsList';
import ConnectedNewsItem, {NewsItem} from 'NewsItem';


describe('NewsList component',() => {
    it('Should exist', () => {
        expect(NewsList).toExist();
    });

    it('Should render NewsItem for each news', () => {
        var news = [
            {
                id: 213,
                title: "Fire",
                description: 'I am in fire',
                createdAt: 11111
            },
            {
                id: 214,
                title: "Hello",
                description: 'I am in hello',
                createdAt: 11211
            }
        ];

        var store = configure({
            news
        });

        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedNewsList/>
            </Provider>
        );
        var usersList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedNewsList)[0];
        var usersComponents = TestUtils.scryRenderedComponentsWithType(usersList, ConnectedNewsItem);

        expect(usersComponents.length).toBe(news.length);

    });
});
