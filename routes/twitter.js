var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
require('dotenv').config()


router.get('/feed', function(req, res) {

  var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });


  var params = {screen_name: 'bcivic1'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      res.json(tweets)

    }else {
      console.log(error);
    }
  });
})

router.get('/hashtag', function(req, res) {

  var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });

  var params = {q: '#vuejs'}
  client.get('search/tweets', params, function(error, tweets, response) {
    if (!error) {
      res.json(tweets)

    }else {
      console.log(error);
    }
  });
})

module.exports = router;
