/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function() {
  
  $('#tweets-container').append($tweet); 
  function createTweetElement(tweetData) {
    const article = $('<article>');
    article.addClass('tweet').appendTo('.tweets');
    
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
    
    div1.append(img);
    header.append(divImg, divUsername, divHandle);
    article.append(header, p, footer);
  }
  
});


