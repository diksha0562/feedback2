const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users') //model class.. one argument means fetching data from collectopn

passport.serializeUser((user, done) => {
    done(null, user.id); //user.id is shortcut for mongodb id. We used it here bcoz user can login 
    //through any service provider(google, fb etc) to generate some identifyng piece of info
});

// take that id and turn it back into actual model instance
passport.deserializeUser((id, done) => {
User.findById(id).then(user => {
    done(null, user);
});
});
//1 arg is exactly the user id that we have stuffed in cookie
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    //by default strategy assumes if req from browser ever went to ant type of proxy then no longer be https
    //bcoz doent want to trust req that come through proxy
    proxy: true //trusting heroku proxy
// },(accessToken, refreshToken, profile, done)=>{
//     User.findOne({googleId:profile.id}).then(existingUser => {
//         if(existingUser){
//             //already have
//             done(null,existingUser);// we have finished now can resume auth flow
//         }else{
//             //create new
//             new User({googleId:profile.id})
//             .save()
//             .then(user => done(null, user));
//         }
//     })
// }
}, async (accessToken, refreshToken, profile, done)=>{
   const existingUser =  await User.findOne({googleId:profile.id});
        if(existingUser){
            //already have
           return done(null,existingUser);// we have finished now can resume auth flow
        }
            //create new
            const user = await new User({googleId:profile.id}).save();
            done(null, user);
    }
));

//we are going to instruct passport that it needs to make use of cookies to handle authentication
// npm install --save cookie-session