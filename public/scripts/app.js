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
    const img = $('<img>', {
      'src': tweetData.user.avatars.small 
    });
    const h2 = $('<h2>', {
      text: tweetData.user.name
    });
    const handle = $('<p>', {
      'class': 'handle',
      text: tweetData.user.handle
    });
    const p = $('<p>', {
      text: tweetData.content.text
    });
    const footer = $("<footer>", {
      text: Math.round(((Date.now() - tweetData.created_at) / 86400000))  + ' days ago'
    });
    
    header.append(img, h2, handle);
    tweet.append(header, p, footer);
    
    return tweet;
  }

});


