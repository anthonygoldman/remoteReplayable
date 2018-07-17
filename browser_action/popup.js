/*TODO
Add some logic that only makes this show if we are successful
if the rules error out and nothing is masking then don't show this
#comeback*/



//When you click the apply button, this adds a * on the Replayable Icon in the taskbar
PIIApply.onclick = function(element) {
    chrome.browserAction.setBadgeText({text: '*'});
}

//When you click the clear button, this removes the * on the Replayable Icon in the taskbar
PIIClear.onclick = function(element) {
    chrome.browserAction.setBadgeText({text: ''});
}