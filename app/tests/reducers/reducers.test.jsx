var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('reducers',() => {
    it('addUsers', () => {
        var users = [{
            id: "45",
            firstName: "Андрей",
            lastName: "Бобнюк",
            email: "bobnyuka.a@gmail.com",
            phone: "0937091727",
            tesisName: "Исследование эффективности использования спецификаций к ИТ проектам",
            university: "ОНПУ, ИКС",
            hostel: "0"
        }];
        var action = {
            type: 'ADD_USERS',
            users
        }

        var res = reducers.usersReducer(df([]), df(action));

        expect(res[0].id).toEqual(users[0].id);
    });
    it('toggleModal', () => {
        var action = {
            type: 'TOGGLE_MODAL'
        }

        var res = reducers.modalsReducer(df(true), df(action));

        expect(res).toEqual(false);
    });

    it('addNews', () => {
        var action = {
            type: 'ADD_NEWS',
            title: 'Putin',
            description: 'President',
        };

        var res = reducers.newsReducer(df([]), df(action));

        expect(res[0].title).toEqual(action.title);
    });

    it('removeNews', () => {
        var news = [{
            id: 1,
            title: 'Putin',
            description: 'President',
            createdAt: 1231231
        },{
            id: 2,
            title: 'Vadim',
            description: 'Not a President',
            createdAt: 12321231
        }];

        var action = {
            type: 'REMOVE_NEWS',
            id: 1
        }

        var res = reducers.newsReducer(df(news), df(action));

        expect(res.length).toBe(1);
        expect(res[0].id).toBe(2);
    });

    it('addInitNews', () => {
        var initNews = [{
            id: 1,
            title: 'Putin',
            description: 'President',
            createdAt: 1231231
        }];
        var action = {
            type: 'ADD_INITIAL_NEWS',
            initNews
        };

        var res = reducers.newsReducer(df([]), df(action));
        expect(res[0].title).toEqual(action.initNews[0].title);
    });
});
