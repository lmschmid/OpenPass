browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        sendResponse(xhr.responseText);
      }
    }
    xhr.open("GET", "http://localhost:51399/myendpoint", true);
    xhr.send();
    return true;
  });