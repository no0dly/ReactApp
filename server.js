var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req,  res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url );
    } else {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('You app will listen on port ' + PORT);
});
