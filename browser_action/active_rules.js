var active_rules = {}
var active_rules_id = "#active_rules"

//Tied to page load for browser action window inital populations	
function populateActiveRules(){
	fetchRules(rules_whitelist,buildActiveList);
}

// Compare rules in storage and isolate active URL substrings
function buildActiveList(rule_object){
	active_rules_area = document.querySelectorAll(active_rules_id)[0]
	Object.keys(rule_object).forEach(function(parent_key){
		//Create holding div for parent rule type.
		active_rules_area.innerHTML = active_rules_area.innerHTML += parentRuleBlock(parent_key)
		Object.keys(rule_object[parent_key]).forEach(function(url_key){
			// Populate each active rule string into parent URL
			activeURLRule(parent_key,rule_object[parent_key],url_key)
		})
	})
}

// If rule substring is in active tab URL then populate a div with all selectors for the matched URL
function activeURLRule(parent_id_string,rule_object,url_string){
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
	    url = tabs[0].url
	    regex = new RegExp(url_string)
	    if(url.match(regex)){ addURLRuleBlock(parent_id_string,rule_object,url_string) }
	});
}

// HTML template for parent rule block
function parentRuleBlock(id_string){
	return '<div id="active_' + id_string + '"><em><strong>Active ' + id_string + ':</strong></em></div>'
}

//HTML tmeplate for matched URL rule substring
function addURLRuleBlock(parent_id_string,rule_object,url_string){
	url_string == "" ? url_string_display = url_string_display = 'Global ("")' : url_string_display = url_string
	parent_id_tag = document.querySelectorAll("#active_"+parent_id_string)[0]
	new_el = '<div id="' + parent_id_string + '_' + url_string + '"><strong>' + url_string_display + '</strong> : ' + rule_object[url_string].replace(/,/g,", ") + '</div>'
	parent_id_tag.innerHTML += new_el
}

//Listeners for storage change to update active rules
chrome.storage.onChanged.addListener(function(changes){
	if(changes.dynamicBlockEls && changes.dynamicBlockEls.newValue){
		fetchRules("dynamicBlockEls",buildActiveList)
	}
	if(changes.dynamicVisibleEls && changes.dynamicVisibleEls.newValue){
		fetchRules("dynamicVisibleEls",buildActiveList)
	}
})