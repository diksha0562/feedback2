var express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport'); // tell passport to make use of cookie
const bodyParser = require('body-parser');
require('./models/users');//should come before passportbecoz passport is using this
require('./services/passport'); // it is not exporting anything hence it will not return
var routesConfig = require('./routes/authRoutes');

var keys = require('./config/keys');
var app = express();
//anytime a post req, put,patch that has a req a body this middleware will parse the body and assign it to
//req.body prop of incoming req
app.use(bodyParser.json());
//tell express that we r going to use cookie
app.use(cookieSession({
    maxAge: 30*24*60*60*1000, // exist for 30 days before it gets automatically expires
    keys:[keys.cookieKey]//key use to encrypt cookie... always send in cookie
    //if we have multiple cookiekey then it select any one of them, for additinal level of security
}));
app.use(passport.initialize());
app.use(passport.session());
//cookiesession and passport are middlewares 

//We dont commit this, bcoz then anyone can go through database and can make changes
mongoose.connect(keys.mongoURI);// inside this we pass address of mongoose instance
app.get('/',(req,res)=>{
res.send({"bye":'buddy'});
});
routesConfig(app);
require('./routes/billingRoutes')(app);
if(process.env.NODE_ENV === 'production'){
    //Express will serve production assets.. link main.js or main.css file
    app.use(express.static())
    //Express will serve up the index.html file if doesn't decognize the route
    const path = require('path');
    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


const PORT = process.env.PORT||5000;
app.listen(PORT);
console.log(PORT);
// heroku uses git based deployment procedut
//