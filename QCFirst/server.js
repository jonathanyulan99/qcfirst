const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

io.on('connection', (socket) => {
    console.log("connected");
});

app.get('/index.html', function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

//This is how I grabbed the info from the browser.  Check loginpage.html 
//to see what changes need to be made in that file as well.
app.post('/loginpage', function(req, res, next) {
    const email = req.body.email;
    const pass = req.body.password
    console.log(email);
    console.log(pass);
})

var server = http.listen(3000, () => {
    console.log('Server is listening on port', server.address().port);
});