var React      = require('react');
var ReactDOM   = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var Main       = require('Main');
var News       = require('News');
var Users      = require('Users');
var VkAPI      = require('VkAPI');

var actions    = require('actions');
var store      = require('configureStore').configure();

var initialState = [
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
    },
    {
        id: "47",
        firstName: "Andrew",
        lastName: "Bobnyuk",
        email: "bobnyuka.a@gmail.com",
        phone: " 380937091727",
        tesisName: "Specification",
        university: "ONPU",
        hostel: "1"
    },
    {
        id: "48",
        firstName: "Дмитро",
        lastName: "Бас",
        email: "dima_bas1990@mail.ru",
        phone: "",
        tesisName: "ІДЕНТИФІКАЦІЯ РИЗИКІВ АРТ-ПРОЕКТІВ",
        university: "Черкаський національний університет ім. Б. Хмельницького",
        hostel: ""
    }
];

store.subscribe(()=> {
    var state = store.getState();
    console.log('NewState ', state);
});

store.dispatch(actions.addUsers(initialState));

// VkAPI.getUsers().then(function(users) {
//     store.dispatch(actions.addUsers(users));
// },function() {
//     throw new Error('Error');
// });

require('style!css!sass!AppCss');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Main}>
                <Route path='/news' component={News}/>
                <Route path='/users' component={Users}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
