var axios = require('axios');
var $ = require('jQuery');

const URL = 'http://913979.pmclub.web.hosting-test.net/api/getAllOrders.php';

module.exports = {
    getUsers: function() {

        return new Promise(function(resolve, reject) {

            function getInfo(data) {
                console.log(data);
                resolve(data);
            }

            var jsonpScript = document.createElement('script');

            document.head.appendChild(jsonpScript);
            jsonpScript.onload = jsonpScript.onerror = function() {
                debugger;
                jsonpScript.parentNode.removeChild(jsonpScript);
            };
            jsonpScript.src = URL + '?jsonp=getInfo';
        });
    },

    getNews: function() {
        var localStorageNews = localStorage.getItem('news');
        var news = [];

        try {
            news = JSON.parse(localStorageNews);
        } catch (e) {

        }
        return $.isArray(news) ? news:[];
    },

    setNews: function(news) {
        if ($.isArray(news)) {
            localStorage.setItem('news', JSON.stringify(news));
        }
        return news;
    }
}
