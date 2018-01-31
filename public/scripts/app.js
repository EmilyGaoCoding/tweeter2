/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function() {

  function renderTweets(tweetData) {
    tweetData.forEach((item) => {
      return createTweetElement(item).appendTo('.tweets');
    })
  }
  
  function createTweetElement(tweetData) {
    let tweet = $('<article>').addClass('tweet');
    
    const header = $('<header>');
    const divImg = $('<div>');
    const img = $('<img>', {
      'src': tweetData.user.avatars.small 
    });
    const divUsername = $('<div>', {
      'class': 'username',
      text: tweetData.user.name
    });
    const divHandle = $('<div>', {
      'class': 'handle',
      text: tweetData.user.handle
    });
    const p = $('<p>', {
      text: tweetData.content.text
    });
    const footer = $("<footer>", {
      text: Math.round(((Date.now() - tweetData.created_at) / 86400000))  + ' days ago'
    });
    
    divImg.append(img);
    header.append(divImg, divUsername, divHandle);
    tweet.append(header, p, footer);
    
    return tweet;
  }
  
});


