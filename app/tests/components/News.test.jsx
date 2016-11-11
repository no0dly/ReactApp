var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

var News = require('News');

describe('News page',() => {
    it('Should exist', () => {
        expect(News).toExist();
    });
});
