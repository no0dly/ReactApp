var redux = require('redux');
var { newsReducer, usersReducer, modalsReducer, searchTextReducer } = require('reducers');

export var configure = (initialState = {}) => {
    var reducer = redux.combineReducers({
        news: newsReducer,
        users: usersReducer,
        modalExpanded: modalsReducer,
        searchText: searchTextReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
}
