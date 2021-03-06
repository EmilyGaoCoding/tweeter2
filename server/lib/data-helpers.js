"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {
    
    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      const tweets = db.collection('tweets');
      tweets.find().toArray((err, results) => {
        if (err) throw err;
        tweets.insertOne(newTweet);
        callback(null, true);
      });
      
    },
    
    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      const tweets = db.collection('tweets');
      tweets.find().toArray((err, results) => {
        if (err) throw err;
        const sortNewestFirst = (b, a) => a.created_at - b.created_at;
        callback(null, results.sort(sortNewestFirst));
      });
      
    }
    
  };
}
