$(document).ready(function(){
  $('.content-corner.right').click(function(){
    $('.nav-icon').toggleClass('open');
    $('.nav-bar').toggleClass('open')
  });

  $('form button[type="submit"]').click( function() {
    var empty_field = false;
    $.each($('form input,textarea'), function() {
      if (!$(this).val()){
        empty_field = true;
      }
    })
    if (!empty_field){
      $('form button[type="submit"] span').toggleClass('active')
      $('form button[type="submit"] .form-loader').toggleClass('active')
    }
  })

});