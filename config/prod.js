// prod.js - for production env
//======commit this========
module.exports = {
    googleClientID:process.env.GOOGLE_CLIENT_ID,
    googleClientSecret:process.env.GOOGLE_CLIENT_SECRET,
    mongoURI:process.env.MONGO_URI,//of database instance
    cookieKey:process.env.COOKIE_KEY,// any random string
    stripePublishableKey:process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey:process.env.STRIPE_SECRET_KEY
}
console.log(process.env.COOKIE_KEY);