// Allowed and blocked rule keys
var rules_whitelist = ["staticBlockEls","dynamicBlockEls","staticVisibleEls","dynamicVisibleEls","assetBlockEls","removeVisibilityEls","obscureEls","staticWhiteListEls","dynamicWhiteListEls"]
var rules_blacklist =
//Legacy values
[/*"staticBlockEls",*//*"dynamicBlockEls",*//*"staticVisibleEls",*//*"dynamicVisibleEls",*//*"assetBlockEls","removeVisibilityEls","obscureEls","staticWhiteListEls","dynamicWhiteListEls",*/
//Modern values
"selectiveUnMaskZones","pagesToSelectiveMask","selectiveMaskZones","visibleInputs","redactZones"]

//Loop keys in white and black lists and remove surrounding quotes
function convertToNonQuotedKeys(rules_whitelist,rules_blacklist,pii_string){
	key_list = rules_whitelist
	Array.prototype.push.apply(key_list,rules_blacklist)
	
	key_list.forEach(function(key){
		quote_match = new RegExp('"' + key + '"')
		pii_string = pii_string.replace(quote_match,key)
	})
	
	return pii_string;
}

//Loop keys in white and black lists and add surrounding quotes
function convertToQuotedKeys(rules_whitelist,rules_blacklist,pii_string){
	key_list = rules_whitelist
	Array.prototype.push.apply(key_list,rules_blacklist)
	
	key_list.forEach(function(key){
		quote_match = new RegExp('"' + key + '"')
		if(!quote_match.test(pii_string)){
			pii_string = pii_string.replace(key,'"' + key + '"')
		}
	})
	
	return pii_string;
}

//Remove whitespace and JS comments from PII string
function cleanPIIString(pii_raw){
	return pii_raw.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1').replace(/\s/g,"");	
}
