(function insertElements() {
  //start callbacks function for data processing in XHR
  var onSucces = function(data) {
    window.utils.render(data);
  };
  var onError = function(errorMessage){
      console.log(errorMessage);
    };
  //end callbacks function for data processing in XHR

  //send request to get data from server
  window.getDataFromServer.getData('https://js.dump.academy/kekstagram/data', onError, onSucces);
})();
