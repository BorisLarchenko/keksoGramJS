window.utils = (function () {
  var ESC_KEYCODE = 27;

   return {
    isEscKeyCode: function (evt, action) {
      if (evt.keyCode == ESC_KEYCODE) {
        action();
      }
    }

  }
})();