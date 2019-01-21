(function insertElements() {
  var myContaner = document.querySelector('.pictures');
    var onSucces = function(data) {
      var fragment = document.createDocumentFragment();
      function creareElement() {
        var templateSource = document.querySelector('#picture-template');
        var elementForCreation = templateSource.content.querySelector('.picture');
        var newElement = elementForCreation.cloneNode(true);

        return newElement;
      }
      for (var i = 0; i < data.length; i++) {
        var newElem = creareElement();
        newElem.querySelector('img').src = data[i].url;
        newElem.querySelector('.picture-comments').textContent = data[i].comments.length;
        newElem.querySelector('.picture-likes').textContent = data[i].likes;
        fragment.appendChild(newElem);
      }
      myContaner.appendChild(fragment);

    //  just to test map utils window.utils.mapFunction
    //  uncoment this code if you want to test this utils method
      /*var nObj = data.map(window.utils.mapFunction);
      console.log(nObj);*/
    };
    var onError = function(errorMessage){
      console.log(errorMessage);
    };
    window.getDataFromServer.getData('https://js.dump.academy/kekstagram/data', onError, onSucces);
})();
