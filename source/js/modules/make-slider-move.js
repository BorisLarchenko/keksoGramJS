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
    return "contrast(" + param*3/100 + ")";
  };
  var pictureStartEffect = function () {
    var x = sliderPin.getBoundingClientRect().x;
    var xMin = thinsliderLine.getBoundingClientRect().left;
    var xMax = thinsliderLine.getBoundingClientRect().right;
    var startX = Math.round((x -xMin)/(xMax - xMin)*100);
    if (startX < 0) {
      startX = 0
    }
    console.log(startX);
    return startX;
  };

  var onInputClick = function () {
    console.log('I was clicked');
    switch (this.value) {
      case 'chrome':
        pictureEffect = function (param) {
          return "grayscale(" + param/100+ ")";
        };

        console.log('hi chrome!!!');
        picture.style.filter = pictureEffect(pictureStartEffect());
        break;
      case 'sepia':
        pictureEffect = function (param) {
          return "sepia(" + param/100+ ")";
        };

        console.log('hi sepia');
        picture.style.filter = pictureEffect(pictureStartEffect());

        break;
      case 'marvin':
        pictureEffect = function (param) {
          return "invert(" + param + "%)";
        };
        console.log('hi marvin');
        picture.style.filter = pictureEffect(pictureStartEffect());
        break;
      case 'phobos':

        pictureEffect = function (param) {
          return "blur(" + param*3/100 + "px)";
        };
        console.log('hi phobos');
        picture.style.filter = pictureEffect(pictureStartEffect());
        break;
      case 'heat':
        pictureEffect = function (param) {
          return "brightness(" + param*3/100 + ")";
        };
        console.log('hi hieat');
        picture.style.filter = pictureEffect(pictureStartEffect());
        break;
      default:
        pictureEffect = function (param) {
          return "contrast(" + param/100+ ")";
        };
        console.log('hi none');
        picture.style.filter = pictureEffect(pictureStartEffect());

    }
  };
  for (var i=0; i<inputsArray.length; i++) {
    listenEveryInput(inputsArray[i]);
  }


  sliderPin.addEventListener('mousedown', function(evt) {
    evt.preventDefault();

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

//------------------------------------------------------
//  We want to add scale to big picture now.
//  Algorithm:
//  1) find button+, button- and dlock with value in % and picture
//  button+ has (.upload-resize-controls-button-dec)  class
//value in % has (.upload-resize-controls-value) class
//  button- has (.upload-resize-controls-button-inc) class
//  picture has (.effect-image-preview) class
// 2) add evtListeners to button+ and button-
//  we have 4 steps in scale 25%, 50%, 75%, and 100% and user can not edit it
//  we should add listeners as functions because we will remove them in some conditions
//if value 100% we should hide button+ and remove listener+ if value 25% we should hide button- and remove listener-
//  let's try to do it

  //Temporary enable this var. Delete afrter test
  var mainContainer = document.querySelector('.upload-effect__container');


var buttonIncScale = mainContainer.querySelector('.upload-resize-controls-button-inc');
var buttonDecScale = mainContainer.querySelector('.upload-resize-controls-button-dec');
var valueScale = mainContainer.querySelector('.upload-resize-controls-value');
//we have stored image in picture variable
  var onButtonIncClick = function (evt) {
    evt.preventDefault();
    var currentScale = parseInt(valueScale.value.slice(0, -1));
    currentScale += 25;
    if (currentScale >= 100) {buttonIncScale.classList.add('justhide')}
    if (currentScale > 0) {buttonDecScale.classList.remove('justhide')}
    valueScale.value = currentScale + '%';

  };

  var onButtonDecClick = function (evt) {
    evt.preventDefault();
    var currentScale = parseInt(valueScale.value.slice(0, -1));
    currentScale -= 25;
    if (currentScale <= 0) {buttonDecScale.classList.add('justhide')}
    if (currentScale <100) {buttonIncScale.classList.remove('justhide')}
    valueScale.value = currentScale + '%';
  };


buttonIncScale.addEventListener('click', onButtonIncClick);
buttonDecScale.addEventListener('click', onButtonDecClick);



})();