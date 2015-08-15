var styles = {'background': '#fff', 'height': '100'};
console.log(styles.background);

// standard function
function offsetHeaderHeight() {};

//how to write an object
var windowHeight = {
  //remember to apply ':' between when using object
  offsetHeaderHeight: function() {
    return windowHeight.getHeight() - $(".header").height();
  },

  //remember to apply ':' between when using object
  getHeight: function() {
    return $(window).height();
  }

};
//
var winHeight = windowHeight.getHeight();
var offsetHeight = windowHeight.offsetHeaderHeight();

$('.window-slab-offset').css('height', offsetHeight);
$('.window-slab').css('height', winHeight);
