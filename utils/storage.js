// pull updated dynamicBlockEls and dynamicVisibleEls from storage and pass object to a function
function fetchRules(rule_list,ruleProcessor) {
	//rule_list = string or array of strings
	if(typeof rule_list == "string"){rule_list = new Array(rule_list)}
	
	rule_list.forEach(function(rule){
		chrome.storage.local.get(rule,function(items) {
		ruleProcessor(items)
		})
	})	
}

function LoadStorage(PII,rules_whitelist){
	chrome.storage.local.clear();
	PII = JSON.parse(PII)
	buildRulesObjectForUI(PII);
	Object.keys(PII).forEach(function(storage_key) {
		// Load only approve object storage_keys
		if(rules_whitelist.indexOf(storage_key) != -1){
			pair = {}
			pair[storage_key] = PII[storage_key]
			console.log(JSON.stringify(pair))
			chrome.storage.local.set(pair)
		}	
	});
}

