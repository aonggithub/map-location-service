var config = {};
config.dbURI = 'mongodb://localhost/test';
config.dbPort = 3000;
config.jwtSecret = "a secret phrase!!"
config.googleAuth = {
  'clientID'      : '223799517184-ol45hi3800k1a0psres5f1iklpa7vngu.apps.googleusercontent.com',
  'clientSecret'  : 'M4rVGO43BIA3CiuX0P9rWxAW',
  'callbackURL'   : 'http://localhost:8081/auth/google/callback'
}
module.exports = config
