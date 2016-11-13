var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

var {NewsItem} = require('NewsItem');

describe('NewsItem component',() => {
    it('Should exist', () => {
        expect(NewsItem).toExist();
    });
});
