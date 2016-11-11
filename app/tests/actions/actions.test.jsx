var expect = require('expect');
var actions = require('actions');

describe('Actions',() => {
    it('should generate add users text action', () => {

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
});
