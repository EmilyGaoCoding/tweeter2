$(document).ready(function() {
  
  function loadTweets() {
    $.ajax({
      type: 'GET',
      url: '/tweets',
      success: function(data) {
        renderTweets(data);
      }
    });
  }
  
  loadTweets();
  
  $('form').submit((event) => {
    event.preventDefault();
    const charLeft = Number($('.counter').text());
    if (charLeft == 140) {
      $('.empty-tweet').slideDown(function() {
        setTimeout(function() {
          $('.empty-tweet').slideUp();
        }, 5000);
      });
    } else if (charLeft < 0) {
      $('.long-tweet').slideDown(function() {
        setTimeout(function() {
          $('long-tweet').slideUp();
        }, 5000);
      });
    } else {
      $.ajax({
        type: 'POST',
        url: $('form').attr('action'),
        data: $('form').serialize(),
        success: () => {
          $('form')[0].reset();
          renderNewTweet();
        }
      });
    }
  });
  
  function renderNewTweet() {
    $.ajax({
      type: 'GET',
      url: '/tweets',
      success: function(data) {
        const newTweet = createTweetElement(data[0]);
        newTweet.prependTo('.tweets');
      }
    });
  }
  
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

  // Compose button behavior
  $('nav a').click((event) => {
    event.preventDefault();
    $('.new-tweet').slideToggle();
    $('.new-tweet textarea').focus();
  })
  
});


