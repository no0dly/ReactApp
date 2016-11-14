var expect = require('expect');
var actions = require('actions');

describe('Actions',() => {
    it('Should generate add users text action', () => {

        var user = {
            id: "48",
            firstName: "Дмитро",
            lastName: "Бас",
            email: "dima_bas1990@mail.ru",
            phone: "",
            tesisName: "ІДЕНТИФІКАЦІЯ РИЗИКІВ АРТ-ПРОЕКТІВ",
            university: "Черкаський національний університет ім. Б. Хмельницького",
            hostel: ""
        };

        var action = {
            type: 'ADD_USERS',
            users: [
                user
            ]
        };

        var res = actions.addUsers(action.users);

        expect(res).toEqual(action);
    });

    it('Should generate openModal text action', () => {
        var action = {
            type: 'TOGGLE_MODAL'
        }

        var res = actions.toggleModal();

        expect(res).toEqual(action);
    });

    it('Should generate add news text action', () => {
        var action = {
            type: 'ADD_NEWS',
            title: 'Putin',
            description: 'President'
        }

        var res = actions.addNews(action.title, action.description);

        expect(res).toEqual(action);
    });

    it('Should generate add initial news text action', () => {
        var initNews = [{
            id: 1,
            title: 'Putin',
            description: 'President',
            createdAt: 1231231
        }]
        var action = {
            type: 'ADD_INITIAL_NEWS',
            initNews
        }

        var res = actions.addInitNews(initNews);
        expect(res).toEqual(action);
    });

    it('Should generate removeNews text action', () => {
        var action = {
            type: 'REMOVE_NEWS',
            id: 1
        }

        var res = actions.removeNews(action.id);

        expect(res).toEqual(action);
    });

    it('Should generate editNews text action', () => {
        var action = {
            type: 'EDIT_NEWS',
            id: 1
        }

        var res = actions.editNews(action.id);

        expect(res).toEqual(action);
    });

    it('Should generate saveNews text action', () => {
        var action = {
            type: 'SAVE_NEWS',
            id: 1,
            title: 'Putin',
            description: 'President'
        }

        var res = actions.saveNews(action.id, action.title, action.description);

        expect(res).toEqual(action);
    });
});
