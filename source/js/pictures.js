/*This module generates array with data for pictures gallery*/
"use strict";
(function generateData() {
  var arrayData = [];
  var commentsData = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё',
    'Когда вы делаете фотографию, хорошо бы убирать палец\n' +
    'из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках\n' +
    'и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат\n' +
    'на кота и у меня получилась фотография лучше',
    'Лица у людей на фотке перекошены, как будто их избивают.\n' +
    'Как можно было поймать такой неудачный момент?!',
  ];
  var descriptionData = [
    'Тестим новую камеру!',
    'Затусили с друзьями на море',
    'Как же круто тут кормят',
    'Отдыхаем...',
    'Цените каждое мгновенье. Цените тех, кто рядом с вами\n' +
    'и отгоняйте все сомненья. Не обижайте всех словами......',
    'Вот это тачка!'
  ];

  window.data = {
    genRandNumber: function(minNum, maxNum) {
      var rendomNum = Math.random()*(maxNum - minNum)+ minNum;
      rendomNum = (Math.round(rendomNum));
      return rendomNum;
    },
    myArrayData: arrayData
  };

  for (var i = 0; i<=25; i++) {
    arrayData[i] = {
      url: "photos/" +(i+1)+".jpg",
      likes: window.data.genRandNumber(15, 200),
      comments: window.data.genRandNumber(1, commentsData.length-1),
      description: descriptionData[window.data.genRandNumber(0, (descriptionData.length-1))],
      commentsItems: commentsData
    };
  }

})();

function addDatatoElements() {
  var fragment = document.createDocumentFragment();
  function creareElement() {
    var templateSource = document.querySelector('#picture-template');
    var elementForCreation = templateSource.content.querySelector('.picture');
    var newElement = elementForCreation.cloneNode(true);

    return newElement;
  }
  for (var i = 0; i < window.data.myArrayData.length; i++) {
    var newElem = creareElement();
    newElem.querySelector('img').src = window.data.myArrayData[i].url;
    newElem.querySelector('.picture-comments').textContent = window.data.myArrayData[i].comments;
    newElem.querySelector('.picture-likes').textContent = window.data.myArrayData[i].likes;
    fragment.appendChild(newElem);
  }
  return fragment;
}

function insertElements() {
  var myContaner = document.querySelector('.pictures');
  var myFragment = addDatatoElements();
  myContaner.appendChild(myFragment);
}

//==================
//generate big-picture structure function
function genBigPicture(picNum) {
  var globalBigPictureContainer = document.querySelector('.big-picture');
  var bigPicImg = globalBigPictureContainer.querySelector('.big-picture__img img');
  var likesCount = globalBigPictureContainer.querySelector('.social__likes .likes-count');
  var commentsCount = globalBigPictureContainer.querySelector('.comments-count');
  var commentsAria = globalBigPictureContainer.querySelectorAll('.social__comment');
  var commentsList = globalBigPictureContainer.querySelector('.social__comments');
  var bigPicUserIcon = globalBigPictureContainer.querySelector('.social__picture');
  var bigPicDescription = globalBigPictureContainer.querySelector('.social__caption');

  bigPicImg.src = window.data.myArrayData[picNum].url;
  likesCount.textContent = window.data.myArrayData[picNum].likes;
  commentsCount.textContent = window.data.myArrayData[picNum].comments;
  bigPicDescription.textContent = window.data.myArrayData[picNum].description;
  bigPicUserIcon.src = "img/avatar-"+ window.data.genRandNumber(1, 6)+".svg";

  //delete all 5 default comments from html
  var newElement = commentsAria[0].cloneNode(true);
  for (var i = 0; i < commentsAria.length; i++) {
    commentsAria[i].remove();
  }

  //add the current number of comments


  for (var n = 0; n < window.data.myArrayData[picNum].comments; n++){

    newElement.querySelector('.social__picture').src = "img/avatar-"+ window.data.genRandNumber(1, 6)+".svg";
    newElement.querySelector('.social__text').textContent = window.data.myArrayData[picNum].commentsItems[n];
    commentsList.appendChild(newElement);
    newElement = commentsAria[0].cloneNode(true);
  }

  console.log(window.data.myArrayData[picNum].comments);


  //

}
//==================

//add open and close eventListeners to big picture element
function addListenersToBigPicture() {
//    html block that contains big picture has class .big-picture
//   cross on the big picture has the class .big-picture__cancel  .cancel and id #picture-cancel
//  we should add  class .hidden to .big-picture while clickin on #picture-cancel element
  var BigPic = document.querySelector('.big-picture');
  var crossOnBigPic = document.getElementById('picture-cancel');
  crossOnBigPic.addEventListener("click", function () {
    BigPic.classList.add('hidden');
  });
  //all pictures have the same class .picture
  //genBigPicture(n) function makes the n-th picture big
//  we should start genBigPicture(n) and delete .hidden class from .big-picture while clicking on the .picture;
  var picContainer = document.querySelector('.pictures');
  var littlePicGalary = picContainer.querySelectorAll('.picture');
  console.log( littlePicGalary.length);
  //we need function that will remember variables
  function closeBigPic (picture, number){
    picture.addEventListener('click', function (evt) {
      evt.preventDefault();
      BigPic.classList.remove('hidden');
      genBigPicture(number);
    });

  };
  for (var i=0; i < littlePicGalary.length; i++){
    closeBigPic(littlePicGalary[i],i);
  }






};
insertElements();
/*genBigPicture(1);*/
addListenersToBigPicture();