(function () {
  window.getDataFromServer = function (url, onError, onSucces) {
    var xhr = new XMLHttpRequest();
    /*xhr.responseType = 'json';*/

    xhr.addEventListener('load', function () {
      /*console.log (JSON.parse(xhr.response+'hello'));*/
      //1_block in this block we are parsing errors in response body
      try {JSON.parse(xhr.response);}
      catch (err) {
        console.log(err.message);
      }
      //1_block is finished
      //2_block in this block we are parsing errors in HTTP protocol GET method to URL
      var error;
      switch (xhr.status){
        case 200:
          onSucces(JSON.parse(xhr.response));
          break;
        case 404:
          console.log('Not found url');
          break;
        case 400:
          console.log('bad request');
          break;
        default:
          console.log('Answer is' + xhr.status + " " + xhr.statusText);
      }
      if (error){
        onError(error);
      }
      //2_block is finished
      console.log(xhr.status + "hello" + xhr.statusText);
    });
    //3_block parse errors that connect with internet connection and timeouts
    xhr.addEventListener('error', function () {
      onError('Error happens')
    });
    xhr.addEventListener('timeout', function () {
      onError('Timeout is reached')
    });
    xhr.timeout = 1000; //timeout in milli seconds
    //3_block is finished

    xhr.open('GET', url);
    xhr.send();
  }
})();