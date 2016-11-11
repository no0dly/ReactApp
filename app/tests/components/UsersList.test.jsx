var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

import usersList from 'configureStore';
import {configure} from 'configureStore';

describe('UsersList component',() => {
    it('Should exist', () => {
        expect(UsersList).toExist();
    });

    it('Should render UserItem for each user', () => {
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


    });
});
