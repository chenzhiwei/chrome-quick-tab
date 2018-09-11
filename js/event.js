chrome.commands.onCommand.addListener(function(command) {
  let index = parseInt(command.slice(-1)) - 1;
  chrome.tabs.query({index: index}, function(tabs){
    if (tabs.length > 0) {
      chrome.tabs.update(tabs[0].id, {active: true});
    }
  });
});
