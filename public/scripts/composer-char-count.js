$(document).ready(function() {
  
  function updateCount() {
    const charLeft = 140 - $(this).val().length;
    $(this).siblings('.counter').text(charLeft);
    
    if (charLeft < 0) {
      $(this).siblings('.counter').addClass('red');
    }
  }
  $('form').on('keyup', 'textarea', updateCount);

});