browser.runtime.sendMessage({action: "get_data"}).then(function(response) {
    console.log(response);
  });