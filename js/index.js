/*
delare a variable arrays for each of the drop menu first
we need to declare a function that holds our loop

We need a loop that will
1 Hold the value of each click and view the dropdown
2 When other dropdown are clicked we need to
hide other dropdown Menu
This runs through all three menues */

(function( $ ) {
  $(document).ready(function() {
    $('#cssmenu').prepend('<div id="menu-button">Menu</div>');
    $('#cssmenu #menu-button').on('click', function(){
      var menu=$(this).next('ul');
      if (menu.hasClass('open')) {
        menu.removeClass('open');
      }
      else{
        menu.addClass('open');
      }

    });
  });
});
