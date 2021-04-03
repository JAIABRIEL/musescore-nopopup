// ==UserScript==
// @name          musescore-nopopup
// @namespace     https://github.com/JAIABRIEL/
// @version       1
// @author        JAIABRIEL
// @grant         none
// @match         https://musescore.com/*/scores/*
// @description   Hide "Please rate this score" popup on MuseScore which appears on every sheet when scrolled to the end.
// ==/UserScript==



window.addEventListener('load', function() {
    function getElementByXpath(path) {
 			return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	};
  
  baseChild = getElementByXpath("/html/body/div[1]/div/section").children[0].children[0].children[2].children[0].children[0];
    
  for (var i = 0; i < baseChild.childNodes.length; i++) {
  	var tableChild = baseChild.children[i];
    
    if (tableChild.childNodes.length > 0 && tableChild.style.width === "") {
            tableChild.style.visibility = "hidden";
    }
} }, false);
