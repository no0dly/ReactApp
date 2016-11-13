var moment = require('moment');
var uuid = require('node-uuid');

export var usersReducer = (state = [], action ) => {
    switch(action.type) {
        case 'ADD_USERS':
            return [
                ...state,
                ...action.users
            ];
        default:
            return state;
    }
}

export var newsReducer = ( state = [], action) => {
    switch (action.type) {
        case 'ADD_NEWS':
            return [
                ...state,
                {
                    id: uuid(),
                    createdAt: moment().unix(),
                    title: action.title,
                    description: action.description
                }
            ];

        case 'REMOVE_NEWS':
            return state.filter( (news) => news.id !== action.id );

        case 'ADD_INITIAL_NEWS':
            return [
                ...state,
                ...action.initNews
            ];
        default:
            return state;
    }
}

export var modalsReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return !state;
        default:
            return state;
    }
}
