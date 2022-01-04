chrome.downloads.onCreated.addListener(function(item){chrome.downloads.pause(item.id)});
