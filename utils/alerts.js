function addDangerAlert(text){
	document.querySelector(message_div).innerHTML = '<div class="alert alert-danger"><strong>Error: </strong>' + text + '</div>'
}

function addWarningAlert(text){
	document.querySelector(message_div).innerHTML = '<div class="alert alert-warning"><strong>Warning: </strong>' + text + '</div>'
}

function clearAlertBlock(){
	document.querySelector(message_div).innerHTML = ""
}