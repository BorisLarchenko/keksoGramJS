(function () {
  /*In this function we will let slider move on the .upload-effect__container
  * 1. we need to find .upload-effect__container and than find the slider-pin .upload-effect-level-pin element
  * 2. we need to add on-mouse-down event to the slider-pin
  * 2.1. in this event we should add x and coordinate of the slider-pin(.getBoundingClientRect().x)
  * 2.2. We should check x-min(.getBoundingClientRect().left) and x-max(.getBoundingClientRect().right) coordinate of the slider-line .upload-effect-level-line
  *
  * 3. we should add on-mouse-move evt for the black line of slider .upload-effect-level.
  * 3.1. in this event we need to check x coordinate of cursor and eaquels them to the coordinate of slider-pin we should also translate the slider coordinate to the left property of the slider pin */

  var mainContainer = document.querySelector('.upload-effect__container');
  var sliderPin = mainContainer.querySelector('.upload-effect-level-pin');
  var thinsliderLine = mainContainer.querySelector('.upload-effect-level-line');
  var thickSliderLine = mainContainer.querySelector('.upload-effect-level');
  var progresLine = mainContainer.querySelector('.upload-effect-level-val');
  var picture = mainContainer.querySelector('.effect-image-preview');

  /*We will add apropriate style to picture when radio button is selected
  * we give an approtpriate the css filters for this style
  * add onclick event listeners for all input*/

  var inputsArray = document.querySelectorAll('input[name="effect"][type="radio"]');
  var listenEveryInput = function (elem) {
    elem.addEventListener('click', onInputClick);
  };
  var pictureEffect = function(param) {
    return "brightness(" + param*3/100 + ")";
  };

  var onInputClick = function () {
    console.log('I was clicked');
    switch (this.value) {
      case 'chrome':
        pictureEffect = function (param) {
          return "grayscale(" + param/100+ ")";
        };
        console.log('hi chrome!!!');
        break;
      case 'sepia':
        pictureEffect = function (param) {
          return "sepia(" + param/100+ ")";
        };
        console.log('hi sepia');
        break;
      case 'marvin':
        pictureEffect = function (param) {
          return "invert(" + param + "%)";
        };
        console.log('hi marvin');
        break;
      case 'phobos':

        pictureEffect = function (param) {
          return "blur(" + param*3/100 + "px)";
        };
        console.log('hi phobos');
        break;
      case 'heat':
        pictureEffect = function (param) {
          return "brightness(" + param*3/100 + ")";
        };
        console.log('hi hieat');
        break;
      default:
        pictureEffect = function (param) {
          return "grayscale(" + param/100+ ")";
        };
        console.log('hi none');
    }
  };
  for (var i=0; i<inputsArray.length; i++) {
    listenEveryInput(inputsArray[i]);
  }


  sliderPin.addEventListener('mousedown', function(evt) {
    evt.preventDefault();
    var x = sliderPin.getBoundingClientRect().x;
    var xMin = thinsliderLine.getBoundingClientRect().left;
    var xMax = thinsliderLine.getBoundingClientRect().right;
    var onMouseMove = function(moveEvt) {
      if (moveEvt.screenX < xMin) {
        var positionLeft = 0;
      } else if (moveEvt.screenX > xMax){
        positionLeft = 100
      } else {positionLeft = Math.round((moveEvt.screenX - xMin)/(xMax -xMin)*100)}

      sliderPin.style.left = positionLeft + '%';
      progresLine.style.width = positionLeft + '%';
      console.log(picture.style.filter);
      picture.style.filter = pictureEffect(positionLeft);
    };
    var onMouseUp = function() {
      thickSliderLine.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    thickSliderLine.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });




})();