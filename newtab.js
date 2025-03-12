window.onload = function() {
    chrome.storage.local.get(['quickTabUrl'], function(result) {
        var quickTabUrl = result.quickTabUrl;
        if (quickTabUrl) {
            chrome.tabs.getCurrent(function (tab) {
                chrome.tabs.update(tab.id, {
                    url: quickTabUrl,
                    highlighted: true
                });
            });
        } else {
            document.getElementById('options').style['display'] = 'block';
        }
    });
};

function loadOptions() {
    chrome.storage.local.get(['quickTabUrl'], function(result) {
        var quickTabUrl = result.quickTabUrl || '';
        document.getElementById('quick-tab-url').value = quickTabUrl;
    });
}

function saveOptions() {
    var quickTabUrl = document.getElementById('quick-tab-url').value;
    if (quickTabUrl === '') {
        quickTabUrl = null;
    }
    
    if (!quickTabUrl) {
        chrome.storage.local.remove(['quickTabUrl'], function() {
            showStatusMessage();
        });
    } else {
        chrome.storage.local.set({quickTabUrl: quickTabUrl}, function() {
            showStatusMessage();
        });
    }
}

function showStatusMessage() {
    var statusTextElem = document.getElementById('status-text');
    statusTextElem.innerHTML = 'Saved!';
    setTimeout(function() {
        statusTextElem.innerHTML = '';
    }, 2000);
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('save-button').addEventListener('click', saveOptions);
