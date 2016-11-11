var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

var Nav = require('Nav');

describe('Nav component',() => {
    it('Should exist', () => {
        expect(Nav).toExist();
    });
});
