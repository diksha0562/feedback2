const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
console.log(keys.stripeSecretKey);
module.exports = app => {
    // requireLogin middleware apply only to this route
    app.post('/api/stripe', requireLogin, async (req,res) => {
// On backend use a completely separate stripe library that help in taking the token from front end exchanging it for an actual charge for users credit card
        console.log('body is',req.body);
        // if(!req.user){
        //     return res.status(401).send({error:'You must logged in'});
        // }
      const charge = await stripe.charges.create({
            amount:500,// 500 cents
            currency:'usd', 
            description:'5$ for 5 credits',
            source:req.body.id
        });
        console.log('charge is',charge);
        req.user.credits=+5;
        const user = await req.user.save();
        res.send(user);

    })
}