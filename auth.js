var passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
    consumerKey: "ZWmDfryaKHzJWG2DbtBxhQ",
    consumerSecret: "1bLB86KsV94cfHvEg9fc6HPWSCI65buxhMvtv83TOY",
    callbackURL: "http://localhost:3000/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    process.nextTick(function() {
      console.dir(profile);
      return done(null, profile.username);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  done(null, id);
});

exports.passport = passport;