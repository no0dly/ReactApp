var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');
var {Provider} = require('react-redux');

import {configure} from 'configureStore';
import ConnectedUsersList, {UsersList} from 'UsersList';
import ConnectedUsersItem, {UsersItem} from 'UsersItem';


describe('UsersList component',() => {
    it('Should exist', () => {
        expect(UsersList).toExist();
    });

    it('Should render UsersItem for each user', () => {
        var users = [
            {
                id: "45",
                firstName: "Андрей",
                lastName: "Бобнюк",
                email: "bobnyuka.a@gmail.com",
                phone: "0937091727",
                tesisName: "Исследование эффективности использования спецификаций к ИТ проектам",
                university: "ОНПУ, ИКС",
                hostel: "0"
            },
            {
                id: "46",
                firstName: "Someone",
                lastName: "SomeSurname",
                email: "someemail@gmail.com",
                phone: " 1(111)111-1111",
                tesisName: "ONIKA",
                university: "KSA",
                hostel: "1"
            }
        ];

        var store = configure({
            users
        });

        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedUsersList/>
            </Provider>
        );
        var usersList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedUsersList)[0];
        var usersComponents = TestUtils.scryRenderedComponentsWithType(usersList, ConnectedUsersItem);

        expect(usersComponents.length).toBe(users.length);

    });
});
