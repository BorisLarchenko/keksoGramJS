(function () {
  //0_block declaring functions that parses AJAX response or errors in request
  var onSucces = function(data) {
    window.serverData = data;
    console.log (window.serverData.length);
  };
  var onError = function(errorMessage){
    console.log(errorMessage);
  };
  window.getDataFromServer('https://js.dump.academy/kekstagram/data', onError, onSucces);
//0_block is finished
})();
