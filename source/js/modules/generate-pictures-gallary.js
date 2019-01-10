(function insertElements() {
  var myContaner = document.querySelector('.pictures');
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
  };

  var myFragment = addDatatoElements();
  myContaner.appendChild(myFragment);
})();
