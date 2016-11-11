var axios = require('axios');
const URL = 'http://913979.pmclub.web.hosting-test.net/api/getAllOrders.php';

module.exports = {
    getUsers: function() {
        return axios.post(URL).then(function(res) {
            return JSON.parse(res);
        },function(res) {
            throw new Error(res.message);
        });
    }
}
