# Installation 

Unapproved Chrome extensions cannot be downloaded from the Chrome store.  To use them, you must first activate development mode by checking the box at the top right corner of the extensions menu.

![Activate development mode](/ReadmeImages/devMode.png)

Then you'll need to clone a local copy of this repo.

Then, in the settings menu where you activated developer mode, use the button `Load unpacked extension..` to locate the local copy of the repo in your file browser.  Once installed, enable the extension (Note: you will be asked to confirm you want developer extensions active each time you boot Chrome.  If the extension goes MIA, you may need to restart chrome and opt back in to the installation).

# Use

Once the extension is installed, you will find a button for it on your extension toolbar.

The extension allows you to import the `pii` object from `clientconfig/productconfig/record/product_config.js`.  (Note: you should grab **only** the `pii` object, not the entire config file.)

Press apply, and the extension will assign background colors to elements on the page that match the config settings: dark red for blocked items, and dark green for items marked visible.

The extension does not colorize elements that are left to the default setting.  This means form elements without an explicit visibility rule will remain uncolored, and block entered content by default.

However, you will notice that any items that replay is currently unmasking will have a background color of cyan.

# Known issues

1. Single page apps often do not repaint the extension colors on a partial page redraw.  If you suspect the site has angular, react, emberJS, etc. in play, you may need to manually refresh the extension painting by hitting apply again.
2. This shit is ugly.  Sorry about that.
3. Extension will list matching rules for the page in the extension menu.  However this list also tends to not properly update on SPA page loads.

#Updates - Release Notes

1.1:
- browser_action/browser_action.js and browser_action/popup.html -
Added a default pair of brackets in the input textarea so it's easier to copy and paste pii block from a code package.
- browser_action/popup.html and browser_action/popup.js -
Added a call from popup.html to a new file popup.js in order to make calls to add and remove text from the icon on the taskbar when we apply or clear masking rules.
- content/content_script.js -
Also added a function to check if the current url is in pagesToSelectiveMask in preparation for modern record.
- content/content_styles.css -
Also changed default colors from bright red/green to dark red/green in preparation for using the bright colors with modern record rules, and added color schemes for all potential rules as well as for items masked by default and items unmasked as recognized by the .fsrVisible class currently on the site but not in the rules entered here.

1.2:
- browser_action/browser_action.js -
Added a line that clears out the list of rules above the textarea when you click the apply button before the new rules show up; previously this would duplicate lines.
- content/content_script.js -
Lots of changes. Added a boolean for legacy, set to always true (for now). Added defaultBlockEls for items masked by default, and added logic to make it only inputs/selects/textareas for legacy or modern pagesToSelectiveMask but mask html for modern pages that aren't in pagesToSelectiveMask. Updated the console message printed when rule updates happen. Fixed document.addEventListener to call fetchRules with WHITELIST_KEYS variable instead of a static array so it's scalable as more items get added. Under chrome.storage.onChanged.addListener updated the console messages.

1.3:
- content/content_script.js -
Added a lot of logic in the updateScreenMasking function and in the chrome.storage.onChanged.addListener to account for legacy and modern values that could be passed so that they can all be handled instead of ignored in the future.
- utils/string_clean.js -
Fleshed out the rules_blacklist to hold all potential information coming in from both legacy and modern record in preparation for trying to start moving items over to rules_whitelist.

1.4:
- content/content_script.js -
Added all legacy values to WHITELIST_KEYS.
- content/content_styles.css -
Realized staticWhiteListEls and dynamicWhiteListEls had been left out, wrote a note to remind myself to figure out where in the list to add them and add them in later.
- utils/string_clean.js -
Added all legacy values to rules_whitelist and took them out of rules_blacklist.