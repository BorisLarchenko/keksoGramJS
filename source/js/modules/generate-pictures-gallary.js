(function insertElements() {
  //find div that should contain little pictures
  var myContaner = document.querySelector('.pictures');

  //start callbacks function for data processing in XHR
  var onSucces = function(data) {
      // create empty docfragment for adding pictures to div
      var fragment = document.createDocumentFragment();
      //start function that returns template content from ready  #picture-template
      function creareElement() {
        var templateSource = document.querySelector('#picture-template');
        var elementForCreation = templateSource.content.querySelector('.picture');
        var newElement = elementForCreation.cloneNode(true);

        return newElement;
      }
    //end function that returns template content from ready  #picture-template
    //  add data from server to tempate.content and add it to docfragment
      for (var i = 0; i < data.length; i++) {
        var newElem = creareElement();
        newElem.querySelector('img').src = data[i].url;
        newElem.querySelector('.picture-comments').textContent = data[i].comments.length;
        newElem.querySelector('.picture-likes').textContent = data[i].likes;
        fragment.appendChild(newElem);
      }
      //add all photos from docfragment to div and render them
      myContaner.appendChild(fragment);

    //  just to test map utils window.utils.mapFunction
    //  uncoment this code if you want to test this utils method
      /*var nObj = data.map(window.utils.mapFunction);
      console.log(nObj);*/
  };
  var onError = function(errorMessage){
      console.log(errorMessage);
    };
  //end callbacks function for data processing in XHR

  //send request to get data from server
  window.getDataFromServer.getData('https://js.dump.academy/kekstagram/data', onError, onSucces);
})();
