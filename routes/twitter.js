var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
const dotenv = require('dotenv').config()


router.post('/', function(req, res) {

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



module.exports = router;