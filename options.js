function loadOptions() {
	var quickTabUrl = localStorage['quickTabUrl'] || '';
	document.getElementById('quick-tab-url').value = url;
}

function saveOptions() {
	var quickTabUrl = document.getElementById('quick-tab-url').value;
	if (quickTabUrl === '') {
		quickTabUrl = null;
	}
	if (!quickTabUrl) {
		delete localStorage['quickTabUrl'];
	} else {
		localStorage['quickTabUrl'] = quickTabUrl;
	}
	
	var statusTextElem = document.getElementById('status-text');
	statusTextElem.innerHTML = 'Saved!';
	setTimeout(function() {
		statusTextElem.innerHTML = '';
	}, 2000);
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('save-button').addEventListener('click', saveOptions);
