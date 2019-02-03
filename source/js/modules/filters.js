(function filters() {
  //+  function to delete all little pictures
  function deleteLittlepic() {
    var myContaner = document.querySelector(".pictures");
    while (myContaner.firstChild) {
      myContaner.removeChild(myContaner.firstChild);
    }
  }

  var mostLiked = document.querySelector("label[for=filter-popular]");
  var mostCommented = document.querySelector("label[for=filter-discussed]");
  var recommended = document.querySelector("label[for=filter-recommend]");
  var random = document.querySelector("label[for=filter-random");


  var lastTimeout;

  var showMostLikedPic = function () {
    console.log('CLickedMostLiked');

    function myTimer500() {
      function onSucces(data) {
        var startObj = data;
        var mostLikedObj = startObj.sort(function (obj1, obj2) {
          return obj2.likes - obj1.likes;
        });
        console.log('send&render after 500ms');
        //+  delete all little pictures
        deleteLittlepic();
        /*- delete all little pictures*/
        window.utils.render(mostLikedObj);

      }
      var onError = function(errorMessage){
        console.log(errorMessage);
      };

      window.getDataFromServer.getData('https://js.dump.academy/kekstagram/data', onError, onSucces);
    }

    if (lastTimeout) {window.clearTimeout(lastTimeout);}
    lastTimeout = window.setTimeout(function () {
      myTimer500();
    }, 500);

  };
  var showMostCommentedPic = function () {
    function onSucces(data) {
      var startObj = data;
      var mostCommentObj = startObj.sort(function (obj1, obj2) {
        return obj2.comments.length - obj1.comments.length;
      });
      console.log(mostCommentObj);
      console.log(startObj);

      //+  delete all little pictures
      deleteLittlepic();
      /*- delete all little pictures*/
      window.utils.render(mostCommentObj);

    }
    var onError = function(errorMessage){
      console.log(errorMessage);
    };

    window.getDataFromServer.getData('https://js.dump.academy/kekstagram/data', onError, onSucces);
  };
  var showRecommendedPic = function () {
    function onSucces(data) {

      //+  delete all little pictures
      deleteLittlepic();
      /*- delete all little pictures*/
      window.utils.render(data);

    }
    var onError = function(errorMessage){
      console.log(errorMessage);
    };

    window.getDataFromServer.getData('https://js.dump.academy/kekstagram/data', onError, onSucces);
  };
  var showRandomPic10 = function () {
    function onSucces(data) {
      var randomObj = [];
      for (var i=1; i<= 10; i++) {
        var newRandomElem = data[Math.floor(Math.random()*data.length)];
        randomObj.push(newRandomElem);
      }
      //+  delete all little pictures
      deleteLittlepic();
      /*- delete all little pictures*/
      window.utils.render(randomObj);

    }
    var onError = function(errorMessage){
      console.log(errorMessage);
    };

    window.getDataFromServer.getData('https://js.dump.academy/kekstagram/data', onError, onSucces);
  };



  mostLiked.addEventListener('click', showMostLikedPic);
  mostCommented.addEventListener('click', showMostCommentedPic);
  recommended.addEventListener('click', showRecommendedPic);
  random.addEventListener('click', showRandomPic10);


})();