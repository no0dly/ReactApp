var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');
var {Provider} = require('react-redux');
var store = require('configureStore').configure();

import ConnectedNewsModal, {NewsModal} from 'NewsModal';

describe('NewsModal page',() => {
    it('Should exist', () => {
        expect(NewsModal).toExist();
    });
});
