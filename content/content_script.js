//region {variables and functions}
var greeting = "Cotent Script Execution";
var legacy=true;
var WHITELIST_KEYS = ["defaultBlockEls","staticBlockEls","dynamicBlockEls","staticVisibleEls","dynamicVisibleEls","assetBlockEls","removeVisibilityEls","obscureEls","staticWhiteListEls","dynamicWhiteListEls"]

// Apply rules to active page
function updateScreenMasking(rules){
	var whatsUpdated="";
	var modernSelectiveMaskPage=false;
	if(!legacy){
		modernSelectiveMaskPage=selectiveMaskUrlMatch(rules.pagesToSelectiveMask);
	}
	if(rules.staticBlockEls){
		if(legacy){
			applyBlockingClasses(rules.staticBlockEls,"staticBlockEls")
		}
		else{
			whatsUpdated+="!"
		}
		whatsUpdated+="staticBlockEls "
	}else if(rules.dynamicBlockEls){
		if(legacy){
			applyBlockingClasses(rules.dynamicBlockEls,"dynamicBlockEls")
		}
		else{
			whatsUpdated+="!"
		}
		whatsUpdated+="dynamicBlockEls "
	}else if(rules.staticVisibleEls){
		if(legacy){
			applyBlockingClasses(rules.staticVisibleEls,"staticVisibleEls")
		}
		else{
			whatsUpdated+="!"
		}
		whatsUpdated+="staticVisibleEls "
	}else if(rules.dynamicVisibleEls){
		if(legacy){
			applyBlockingClasses(rules.dynamicVisibleEls,"dynamicVisibleEls")
		}
		else{
			whatsUpdated+="!"
		}
		whatsUpdated+="dynamicVisibleEls "
	}else if(rules.assetBlockEls){
		if(legacy){
			applyBlockingClasses(rules.assetBlockEls,"assetBlockEls")
		}
		else{
			whatsUpdated+="!"
		}
		whatsUpdated+="assetBlockEls "
	}else if(rules.removeVisiblityEls){
		if(legacy){
			applyBlockingClasses(rules.removeVisiblityEls,"removeVisiblityEls")
		}
		else{
			whatsUpdated+="!"
		}
		whatsUpdated+="removeVisiblityEls "
	}else if(rules.obscureEls){
		if(legacy){
			applyBlockingClasses(rules.obscureEls,"obscureEls")
		}
		else{
			whatsUpdated+="!"
		}
		whatsUpdated+="obscureEls "
	}else if(rules.staticWhiteListEls){
		if(legacy){
			applyBlockingClasses(rules.staticWhiteListEls,"staticWhiteListEls")
		}
		else{
			whatsUpdated+="!"
		}
		whatsUpdated+="staticWhiteListEls "
	}else if(rules.dynamicWhiteListEls){
		if(legacy){
			applyBlockingClasses(rules.dynamicWhiteListEls,"dynamicWhiteListEls")
		}
		else{
			whatsUpdated+="!"
		}
		whatsUpdated+="dynamicWhiteListEls "
	}else if(rules.selectiveUnMaskZones){
		if(!legacy&&!modernSelectiveMaskPage){
			applyBlockingClasses(rules.selectiveUnMaskZones,"selectiveUnMaskZones")
		}
		else{
			whatsUpdated+="!"
		}
		whatsUpdated+="selectiveUnMaskZones "
	}else if(rules.selectiveMaskZones){
		if(!legacy&&modernSelectiveMaskPage){
			applyBlockingClasses(rules.selectiveMaskZones,"selectiveMaskZones")
		}
		else{
			whatsUpdated+="!"
		}
		whatsUpdated+="selectiveMaskZones "
	}else if(rules.visibleInputs){
		if(!legacy){
			applyBlockingClasses(rules.visibleInputs,"visibleInputs")
		}
		else{
			whatsUpdated+="!"
		}
		whatsUpdated+="visibleInputs "
	}else if(rules.redactZones){
		if(!legacy){
			applyBlockingClasses(rules.redactZones,"redactZones")
		}
		else{
			whatsUpdated+="!"
		}
		whatsUpdated+="redactZones "
	}else{
		if(!legacy&&!modernSelectiveMaskPage){
			rules.defaultBlockEls={"":"html"}
		}
		else{
			rules.defaultBlockEls={"":"input,select,textarea"}
		}
		applyBlockingClasses(rules.defaultBlockEls,"defaultBlockEls")
		whatsUpdated+="defaultBlockEls "
	}
	console.log("Updated Rules: "+whatsUpdated)
}

function clearScreenMasking(rule_list){
	rule_list.forEach(function(rule){
		match = new RegExp('(?:^|\\s)' + rule + '(?!\\S)')
		document.querySelectorAll("."+rule).forEach(function(node){
			while(match.test(node.className)){
				node.className = node.className.replace(match,''); 
			}
		})		
	})
}

//Return true if url substring is contain in active page
function matchingURL(page_selector) {
	console.log("RUNNING PAGE MATCH TEST")
	url = window.location.href
	if(url.indexOf(page_selector) != -1){
		return true;
	}else{
		return false;
	}
}

//Check if page is in pagesToSelectiveMask for Modern record
function selectiveMaskUrlMatch(rules_list){
	Object.keys(rules_list).forEach(function(page_selector){
		if(matchingURL(page_selector)){
			return true;
		}
	})
	return false;
}

//Apply relevant blocking rules to all listed CSS selectors
function applyBlockingClasses(rules_list,style_name){
	Object.keys(rules_list).forEach(function(page_selector){
		if(matchingURL(page_selector)){
		// APPLY THE RULE
		class_list = rules_list[page_selector].split(",")
		
		class_list.forEach(function(class_name){
			document.querySelectorAll(class_name).forEach(function(node){
				node.className += " " + style_name
			})
		})
		}
	})
}


// Event Hooks
document.addEventListener("DOMContentLoaded", function(event) {
	console.log(greeting);
	fetchRules(WHITELIST_KEYS,updateScreenMasking);
})

chrome.runtime.onMessage.addListener(function(message,sender) {
	console.log(sender + ": " + message);
	if(message = "clearPII"){
		clearScreenMasking(WHITELIST_KEYS);
	}
});

chrome.storage.onChanged.addListener(function(changes){
	if(changes.staticBlockEls && changes.staticBlockEls.newValue){
		console.log("Changes ready in staticBlockEls")
		fetchRules("staticBlockEls",updateScreenMasking)
	}
	if(changes.dynamicBlockEls && changes.dynamicBlockEls.newValue){
		console.log("Changes ready in dynamicBlockEls")
		fetchRules("dynamicBlockEls",updateScreenMasking)
	}
	if(changes.staticVisibleEls && changes.staticVisibleEls.newValue){
		console.log("Changes ready in staticVisibleEls")
		fetchRules("staticVisibleEls",updateScreenMasking)
	}
	if(changes.dynamicVisibleEls && changes.dynamicVisibleEls.newValue){
		console.log("Changes ready in dynamicVisibleEls")
		fetchRules("dynamicVisibleEls",updateScreenMasking)
	}
	if(changes.assetBlockEls && changes.assetBlockEls.newValue){
		console.log("Changes ready in assetBlockEls")
		fetchRules("assetBlockEls",updateScreenMasking)
	}
	if(changes.removeVisiblityEls && changes.removeVisiblityEls.newValue){
		console.log("Changes ready in removeVisiblityEls")
		fetchRules("removeVisiblityEls",updateScreenMasking)
	}
	if(changes.obscureEls && changes.obscureEls.newValue){
		console.log("Changes ready in obscureEls")
		fetchRules("obscureEls",updateScreenMasking)
	}
	if(changes.staticWhiteListEls && changes.staticWhiteListEls.newValue){
		console.log("Changes ready in staticWhiteListEls")
		fetchRules("staticWhiteListEls",updateScreenMasking)
	}
	if(changes.dynamicWhiteListEls && changes.dynamicWhiteListEls.newValue){
		console.log("Changes ready in dynamicWhiteListEls")
		fetchRules("dynamicWhiteListEls",updateScreenMasking)
	}
	if(changes.selectiveUnMaskZones && changes.selectiveUnMaskZones.newValue){
		console.log("Changes ready in selectiveUnMaskZones")
		fetchRules("selectiveUnMaskZones",updateScreenMasking)
	}
	if(changes.selectiveMaskZones && changes.selectiveMaskZones.newValue){
		console.log("Changes ready in selectiveMaskZones")
		fetchRules("selectiveMaskZones",updateScreenMasking)
	}
	if(changes.visibleInputs && changes.visibleInputs.newValue){
		console.log("Changes ready in visibleInputs")
		fetchRules("visibleInputs",updateScreenMasking)
	}
	if(changes.redactZones && changes.redactZones.newValue){
		console.log("Changes ready in redactZones")
		fetchRules("redactZones",updateScreenMasking)
	}
})


