//region {variables and functions}
var greeting = "Browser Action Execution"
var PII = {}

//UI  IDs/Classes
var PII_form_id = "#PII_Form"
var PII_text_area_id = "#PIITextArea"
var PII_clear_button_id = "#PIIClear"
var PII_apply_button_id = "#PIIApply"
var message_div = "#message-block"

//Sandbox Frames
var eval_sandbox_frame = '#eval-sandbox'


function buildRulesObjectForUI(current_pii_object){
	PII = Object.assign(PII,current_pii_object)
	updatePIIUI(JSON.stringify(PII,null,2))
}

function updatePIIUI(pii_json_string){
	pii_json_string = convertToNonQuotedKeys(rules_whitelist,rules_blacklist,pii_json_string)
	
	if(pii_json_string != "{}"){
	document.querySelector(PII_text_area_id).value = pii_json_string 
	}
}

// Return current value of PII form UI
function getPIIUI(){
	return document.querySelector(PII_text_area_id).value
}

// Block form submits
function blockFormSubmits(form_id){
	document.querySelector(form_id).addEventListener("submit",function(event){
		console.log("Interupted form submit default")
		event.preventDefault();
	},true);
}

// Action Binding for Apply button
function bindApplyButton(button_id) {
	var button = document.querySelector(button_id);
	var eval_sandbox = document.querySelector(eval_sandbox_frame);
	
	// Submit PII string to sandbox for eval
	button.addEventListener("click",function(ce) {
		console.log("Applying ruleset...")
		document.querySelectorAll("#active_rules")[0].innerHTML = ""
		clearAlertBlock()
		
		var message = {
		  command: 'clean',
		  pii: getPIIUI()
		};		
		eval_sandbox.contentWindow.postMessage(message, '*');		
	});
}

// Action binding for clear button
function bindClearButton(button_id) {
	var button = document.querySelector(button_id);
	button.addEventListener("click",function(ce) {
		console.log("Clearing ruleset...")
		
		document.querySelectorAll("#active_rules")[0].innerHTML = ""
		clearAlertBlock()
		chrome.storage.local.clear();
		
		updatePIIUI("{\n}");
		chrome.tabs.query({"active":true},function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id,"clearPII");
		});
	});
}

//Event Hooks

	//DOM load events
	document.addEventListener("DOMContentLoaded", function(event) {
		console.log(greeting);
		fetchRules(rules_whitelist,buildRulesObjectForUI)
		
		// bind actions to PII form controlls
		blockFormSubmits(PII_form_id);
		bindClearButton(PII_clear_button_id);
		bindApplyButton(PII_apply_button_id);
		
		// Initial population of active rules on window load
		populateActiveRules();
	})
	
	// Message Reciever for eval-sandbox
	window.addEventListener('message', function(event) {
		console.log("Message recieved")
	    var data = event.data;
	    var pii = event.data.pii_marshalled
	
	   	// Return PII String
	    switch(pii != "") {
	      case true:
	    	console.log("Retrieved PII");
	    	if(data.warnings){addWarningAlert(data.warnings);}
	    	LoadStorage(pii,rules_whitelist);
	    	break;
	      default:
	    	console.log("Errors in pii submitted:");
	    	addDangerAlert(data.errors);
	    }
	  });

