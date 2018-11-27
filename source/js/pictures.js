function generateData() {
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

  function genRandNumber(minNum, maxNum) {
    var rendomNum = Math.random()*(maxNum - minNum)+ minNum;
    rendomNum = (Math.round(rendomNum));
    return rendomNum;
  }

  for (var i = 0; i<=25; i++) {
    arrayData[i] = {
      url: "photos/" +i+".jpg",
      likes: genRandNumber(15, 200),
      comments: commentsData[genRandNumber(0, commentsData.length-1)],
      description: descriptionData[genRandNumber(0, descriptionData.length-1)]
    };


  }
  return arrayData;
}