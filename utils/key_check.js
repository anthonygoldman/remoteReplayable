// Compares the evaled object's keys to an unparsed string interpretation
// Desgined to portect situations where the same URL stub might exist in the same rule block
// In these instances only the last instance is loaded, and a warning is fired

//Requires evaled object, and raw string
function keyCountMatchWarnings(pii_object,pii_checkstring){
	results = ""
	object_count = countObjectKeys(pii_object);
	string_count = countStringKeys(pii_checkstring)
	
	if(object_count != string_count){
		results = 'There were ' + (string_count - object_count).toString() + ' fewer url keys imported than the original object contained.  Check input for duplicate URL keys in each group.'
	}
	
	return results
}

//Loop all keys in evaled object and retrn count
function countObjectKeys(pii_object){
	key_count = 0
	Object.keys(pii_object).forEach(function(rules_key){
		key_count += 1
		Object.keys(pii_object[rules_key]).forEach(function(url_keys){
			key_count += 1
		})
	})
	return key_count
}

// Count raw string keys - 
// will not count key ommited from rules_whitelist or rules_blacklist (see string_clean.js) if they are not already double quoted.
function countStringKeys(pii_checkstring){
	pii_checkstring = cleanPIIString(pii_checkstring) // remove comments and whitespace
    pii_checkstring = convertToQuotedKeys(rules_whitelist,rules_blacklist,pii_checkstring) // quote all standard keys
	return pii_checkstring.match(/"[^"]*":/g).length // return count of keys
}