{
  "name": "chromeMediaGrabber",
  "description": "An extension that takes audio and video files",
  "version": "1.0",
  "manifest_version": 3,
  "background": {
    "service_worker": "background.js"
  }
  let color = '#3aa757';

  chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
}