var passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
    consumerKey: process.env.npm_package_config_CONSUMER_KEY,
    consumerSecret: process.env.npm_package_config_CONSUMER_SECRET,
    callbackURL: process.env.npm_package_config_CALLBACK || "http://localhost:3000/auth/twitter/callback"
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
