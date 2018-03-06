const passport = require('passport');
module.exports = (app)=>{
//Route handler whenever come to this path kick to passport flow
app.get('/auth/google', passport.authenticate('google',{  // to authenticate first time
    scope : ['profile', 'email']
}));
app.get('/auth/google/callback',
passport.authenticate('google'),
(req,res) =>{
    res.redirect('/surveys');    
}
) //attempt to turn the code in actual profile

app.get('/api/logout', (req,res) => {
req.logout(); //passport attach logout method to req object
//res.send(req.user);
res.redirect('/');
});
app.get('/api/current_user', (req,res) => {
res.send(req.user);
// res.send(req.session); //{"passport":{"user":"5a86dff08cd3870694f3012f"}}//userId -mongoose
 //cookie-session extracts data and assigns it to req.session
 //req.session contains data that passport is attempting to store inside cookie
 //passport look to req.session (not in cookie) (passport.deseriaize)
})
}
//express-session -- store reference to a session inside cookie, cookie contains avery small individual id and to 
//access all data asscociated with particular cookie we store all relevant data in some session store
//can store any amt of data
//cookie-session-- contains actual userid-4kb