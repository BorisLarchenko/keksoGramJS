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
    document.removeEventListener('keydown', onEscPressed);
  });


})();