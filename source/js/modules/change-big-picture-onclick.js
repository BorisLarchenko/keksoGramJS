(function addListenersToBigPicture() {

  var onSucces = function(data) {

    function genBigPicture(picNum) {
      var globalBigPictureContainer = document.querySelector('.big-picture');
      var bigPicImg = globalBigPictureContainer.querySelector('.big-picture__img img');
      var likesCount = globalBigPictureContainer.querySelector('.social__likes .likes-count');
      var commentsCount = globalBigPictureContainer.querySelector('.comments-count');
      var commentsAria = globalBigPictureContainer.querySelectorAll('.social__comment');
      var commentsList = globalBigPictureContainer.querySelector('.social__comments');
      var bigPicUserIcon = globalBigPictureContainer.querySelector('.social__picture');
      var bigPicDescription = globalBigPictureContainer.querySelector('.social__caption');

      bigPicImg.src = data[picNum].url;
      likesCount.textContent = data[picNum].likes;
      commentsCount.textContent = data[picNum].comments;
      bigPicDescription.textContent = data[picNum].description;
      bigPicUserIcon.src = "img/avatar-"+ 1+".svg";

      //delete all 5 default comments from html
      var newElement = commentsAria[0].cloneNode(true);
      for (var i = 0; i < commentsAria.length; i++) {
        commentsAria[i].remove();
      }

      //add the current number of comments


      for (var n = 0; (n < data[picNum].comments.length && n < 5); n++){

        newElement.querySelector('.social__picture').src = data[picNum].comments[n].avatar;
        newElement.querySelector('.social__text').textContent = data[picNum].comments[n].message;
        commentsList.appendChild(newElement);
        newElement = commentsAria[0].cloneNode(true);
      }
    }

//    html block that contains big picture has class .big-picture
//   cross on the big picture has the class .big-picture__cancel  .cancel and id #picture-cancel
//  we should add  class .hidden to .big-picture while clickin on #picture-cancel element
    var BigPic = document.querySelector('.big-picture');
    var crossOnBigPic = document.getElementById('picture-cancel');
    crossOnBigPic.addEventListener("click", function () {
      hideBigPic();
      document.removeEventListener("keydown", onEscKeydown);
    });
    //all pictures have the same class .picture
    //genBigPicture(n) function makes the n-th picture big
//  we should start genBigPicture(n) and delete .hidden class from .big-picture while clicking on the .picture;
    var picContainer = document.querySelector('.pictures');
    var littlePicGalary = picContainer.querySelectorAll('.picture');
    //we need function that will remember variables and
    /*var onEscKeydown = function(evt) {
      if (evt.keyCode == 27) {
        BigPic.classList.add('hidden');
      }
    };*/
    var hideBigPic = function () {
      BigPic.classList.add('hidden');
    };
    var onEscKeydown = function (evt) {
      window.utils.isEscKeyCode(evt, hideBigPic);
    };

    function openBigPic (picture, number){
      picture.addEventListener('click', function (evt) {
        evt.preventDefault();
        BigPic.classList.remove('hidden');
        genBigPicture(number);
        document.addEventListener("keydown", onEscKeydown);
      });
    };
    //add event listeners to all pictures in gallery
    for (var i=0; i < littlePicGalary.length; i++){
      openBigPic(littlePicGalary[i],i);
    }


  };

  var onError = function(errorMessage){
    console.log(errorMessage);
  };
  window.getDataFromServer('https://js.dump.academy/kekstagram/data', onError, onSucces);






  // add event listener that colse fist picture while ESC is pressed
})();
