var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

var {UsersItem} = require('UsersItem');

describe('UsersItem component',() => {
    it('Should exist', () => {
        expect(UsersItem).toExist();
    });
});
