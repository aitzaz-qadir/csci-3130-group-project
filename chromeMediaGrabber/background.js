// James - JS
let color = '#3aa757';
	chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ color });
	console.log('Default background color set to %cgreen', `color: ${color}`);
});

// Wangwenzan Zhou - JS
chrome.tabs.onActivated.addListener(tab =>{
    chrome.tabs.get(tab.tabId, current_tab_info =>{
        if(/^http:\/\/www\.youyube/.test(current_tab_info.url)){
            chrome.tabsinsertCSS(null,{file:'./main.css'});
            chrome.tabs.executeScript(null, {File: './foreground.js'},() => console.log('i injected'))
        }
    });
});

