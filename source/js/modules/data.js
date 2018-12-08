/*This module generates array with data for pictures gallery
 it also exports data to global scope  */
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