var redux = require('redux');
var {usersReducer} = require('reducers');

export var configure = () => {
    var reducer = redux.combineReducers({
        users: usersReducer
    });

    var store = redux.createStore(reducer, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
}
