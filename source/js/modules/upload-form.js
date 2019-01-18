(function () {
  /*In this function we add evt listener to #upload-image input
  * on change and should show one big picteure for upload
  * for now we are playing only with one big picture that is in
  * class .upload-overlay
  * 1. So we need to find #upload-image input
  * 2. We need to add change event listener on that input field
  * This event should show .upload-overlay (delete .hidden class)
  * 3. We need to find .upload-overlay class to delete its
  * .hidden class after event
  * 4. We need to back .hidden class to .upload-overlay after
  * pressing #upload-cancel button
  * 5. we need to find #upload-cancel element.
  * 6. add evet listener evt click on #upload-cancel to add
  * .hidden class to .upload-overlay
  * */
  var mainUploadForm = document.querySelector('.upload-form');
  var uploadImageInput = mainUploadForm.querySelector('#upload-file');
  var uploaImageEffects =  mainUploadForm.querySelector('.upload-overlay');
  var picture = mainUploadForm.querySelector('.effect-image-preview');

  var showUploadForm = function () {
    uploaImageEffects.classList.remove('hidden');
  };
  var hideUploadForm = function () {
    uploaImageEffects.classList.add('hidden');
    uploadImageInput.value = '';

  };
  var onEscPressed = function (evt) {
    window.utils.isEscKeyCode(evt, hideUploadForm)
  };


  var uploadFormCross = mainUploadForm.querySelector('#upload-cancel');
  uploadImageInput.addEventListener('change', function () {
    showUploadForm();
    document.addEventListener('keydown', onEscPressed);
  });

  uploadFormCross.addEventListener('click', function () {
    hideUploadForm('hidden');
    picture.style.transform = 'scale(1)';
    mainUploadForm.reset();
    document.removeEventListener('keydown', onEscPressed);
  });
//  Prevent to hide form on esc pressed if focus on the comment input
//  find comment input upload-form-description
//  add evet listener on focus remove event onEscPressed
//  add evet listener on blur add event onEscPressed
  var commentInput = mainUploadForm.querySelector('.upload-form-description');
  commentInput.addEventListener('focus', function (){
    document.removeEventListener('keydown', onEscPressed);
  });
  commentInput.addEventListener('blur', function (){
    document.addEventListener('keydown', onEscPressed);
  });


  //  Prevent to hide form on esc pressed if focus on the hashtag input
//  find comment input upload-form-hashtags
//  add evet listener on focus remove event onEscPressed
//  add evet listener on blur add event onEscPressed
  var hashtagInput = mainUploadForm.querySelector('.upload-form-hashtags');
  hashtagInput.addEventListener('focus', function (){
    document.removeEventListener('keydown', onEscPressed);
  });
  hashtagInput.addEventListener('blur', function (){
    document.addEventListener('keydown', onEscPressed);
  });
//  Add form validation for .upload-form-hashtags input
//  add event listner on invalid event
//  add setCustomValidity method to hashtags input
  hashtagInput.addEventListener('invalid', function (evt) {

    if (hashtagInput.validity.patternMismatch) {
      hashtagInput.setCustomValidity('PatternMismatch: 1.Start any tag from # symbol, 2. Use not more than 5 tags, 3. One space between tags 4.Each hashtag has not more than ');
    } else {
      hashtagInput.setCustomValidity('');
    }
  });
  hashtagInput.addEventListener('input', function (evt) {
    var target = evt.target;
    console.log(target.value);
    console.log(target.value.charAt(0));
    if (target.value.charAt(0) !== '#') {
      target.setCustomValidity("Start any tag from # symbol");
    } else {
      target.setCustomValidity('');
    }
  });


})();