var users = require('./users');

var tweets = [];

var configTwitter = require('../config/twitter');
var Twit = require('twit');
var T = new Twit({
    consumer_key:         configTwitter.consumerKey
  , consumer_secret:      configTwitter.consumerSecret
  , access_token:         configTwitter.accessToken 
  , access_token_secret:  configTwitter.accessTokenSecret 
});
var stream;


	exports.streamRefresh = function(tags) {
		if (stream) {
			stream.stop()
			stream = null; 
		}; 
		stream = T.stream('statuses/filter', { track: tags });
		stream.on('tweet', function (tweet) {
		});
	}





