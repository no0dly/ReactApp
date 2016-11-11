var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

var Main = require('Main');

describe('Main page',() => {
    it('Should exist', () => {
        expect(Main).toExist();
    });
});
