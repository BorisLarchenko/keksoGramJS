(function filters() {
  //+  function to delete all little pictures
  function deleteLittlepic() {
    var myContaner = document.querySelector(".pictures");
    while (myContaner.firstChild) {
      myContaner.removeChild(myContaner.firstChild);
    }
  }

  var mostLiked = document.querySelector("label[for=filter-popular]");



  var showMostLikedPic = function () {
    function onSucces(data) {
      var startObj = data;
      var mostLikedObj = startObj.sort(function (obj1, obj2) {
        return obj2.likes - obj1.likes;
      });
      console.log(mostLikedObj);
      console.log(startObj);

      //+  delete all little pictures
      deleteLittlepic();
      /*- delete all little pictures*/
      window.utils.render(mostLikedObj);

    }
    var onError = function(errorMessage){
      console.log(errorMessage);
    };

    window.getDataFromServer.getData('https://js.dump.academy/kekstagram/data', onError, onSucces);
  };

  mostLiked.addEventListener('click', showMostLikedPic);


})();