(function(){
  window.utils ={
    isEsc: (function () {
      var ESC_KEYCODE = 27;

      return {
        isEscKeyCode: function (evt, action) {
          if (evt.keyCode == ESC_KEYCODE) {
            action();
          }
        }

      }
    })(),
    mapFunction: function (it, index, arr) {
      console.log(it);
      console.log(index);
      return it.likes;
    }
  }
})();


/*
window.utils = (function () {
  var ESC_KEYCODE = 27;

   return {
    isEscKeyCode: function (evt, action) {
      if (evt.keyCode == ESC_KEYCODE) {
        action();
      }
    }

  }
})();*/
