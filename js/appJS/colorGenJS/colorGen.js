(function() {
	"use strict";

//*************************Variable Island***********************************//

var rgb;
var hsl;
var hex;
var idx;
var hexVal;
var bgColor;
var lockState;
var zeroOrOne;
var lockColor;
var p = $("p");
var colorValue;
var backClicked;
var currentLock;
var newTextColor;
var randomLetter;
var hexArray = [];
var isBgCustomized;
var bgColorTracker;
var targetPosition;
var forwardClicked;
var currentPosition;
var isTextCustomized;
var $html = $("html");
var $body = $("body");
var back = $("#back");
var activePalette = [];
var $label = $("label");
var paletteStorage = [];
var setBg = $("#setBg");
var referenceArray = [];
var locks = $(".locks");
var $input = $("input");
var colorInputArray = [];
var customColorArray = [];
var forward = $("#forward");
var setText = $("#setText");
var myColors = $(".myColors");
var customBg = $("#customBg");
var rgbRadio = $("#rgbRadio");
var hslRadio = $("#hslRadio");
var hexRadio = $("#hexRadio");
var controls = $(".controls");
var classOfButton = $(".button");
var saveButton = $("#saveButton");
var myPalettes = $("#myPalettes");
var customText = $("#customText");
var toggleBtwBW = $("#toggleBtwBW");
var paletteTitle = $("#paletteTitle");
var customColors = $("#customColors");
var colorPalette = $(".colorPalette");
var supportBeams = $(".supportBeams");
var restoreDefault = $("#restoreDefault");
var palettePrintOut = $(".palettePrintOut");
var customColorInput = $(".customColorInput");
var lettersForHex = ["a","b","c","d","e","f"];
var createColorPalette = $("#createColorPalette");
var randomColorGenerator = $('#randomColorGenerator');

//******************************Function Junction***************************//


$(document).ready(function() {

	clearEverything();
});

var clearEverything = function() {

	toBlack();
	
	$input.each(function() {
	
		this.value = '';
	
	});
	
};


var	toBlack = function() {

		p.css("color", "rgb(255, 255, 255)");
				
		$label.css("color", "rgb(255, 255, 255)");
		
		$html.css("background-color", "rgb(0, 0, 0)");
		
		paletteTitle.css("color", "rgb(255,255,255)");
		
		$body.css("background-color", "rgb(0, 0, 0)");
		
		classOfButton.css("color", "rgb(255, 255, 255)");
		
		palettePrintOut.css("color", "rgb(255, 255, 255)");
		
		locks.html('<img src="img/padlockWhite.png" height="20em" width="20em" >');

};


var	toWhite = function() {

		p.css("color", "rgb(0, 0, 0)");

		$label.css("color", "rgb(0, 0, 0)");
		
		paletteTitle.css("color", "rgb(0,0,0)");
		
		classOfButton.css("color", "rgb(0, 0, 0)");
		
		palettePrintOut.css("color", "rgb(0, 0, 0)");
		
		$html.css("background-color", "rgb(255, 255, 255)");
		
		$body.css("background-color", "rgb(255, 255, 255)");
		
		locks.html('<img src="img/padlock.png" height="20em" width="20em" >');

};

	
var randomValue = function (min, max) {

	return Math.floor((Math.random() * max) + min);
};


var randomVariableChooser = function() {

	for (var i = 0; i <= 5; i++)  {
		randomLetter = randomValue(0, 5);
			
		zeroOrOne = randomValue(0, 2);

			if(zeroOrOne === 0) {

				hexVal = lettersForHex[randomLetter];

			} else if (zeroOrOne === 1) {

				hexVal = randomValue(0, 9);

			} else {

				return false;
			}

			hexArray[i] = hexVal;
		}
};


var changeTextColor = function () {

	if(setText !== "") {
	
		newTextColor = customText.val().toString();
	
		palettePrintOut.css("color", newTextColor);
	
		paletteTitle.css("color", newTextColor);
	
		$label.css("color", newTextColor);
		
		classOfButton.css("color", newTextColor);
	
		// classOfButton.css("border", "5px solid " + newTextColor);
	
		p.css("color", newTextColor);
	
		locks.css("color", newTextColor);
	
	} else {

		return false;
	}
};

var customizeBg = function() {

	if(setBg !== "") {

		var bgColor = customBg.val().toString();

		$body.css("background-color", bgColor);

		$html.css("background-color", bgColor);

	} else {

		return false;
	}
};

var determineCurrentPosition = function() {

	for (var i = 0; i < paletteStorage.length; i++) {

    	if (referenceArray[0] == paletteStorage[i][0]) {

        	for (var x = 0; x < referenceArray.length; x++) {

            	if (referenceArray[x] == paletteStorage[i][x]) {

            	}

            	currentPosition = i;

        	}
    	}
	}
};

var populateColors = function() {

	targetPosition = referenceArray;

	for (var i = 0; i <= colorPalette.length; i++) {

		if (customColorInput.eq(i).val() !== "") {

			colorValue = customColorInput.eq(i).val();

			colorPalette.eq(i).css("background-color", colorValue);

			palettePrintOut.eq(i).html(colorValue);

		} else if (customColorInput.eq(i).val() == '') {

    			colorValue = targetPosition[i];

    			customColorArray.push(targetPosition[i]);

			colorPalette.eq(i).css("background-color", colorValue);

			palettePrintOut.eq(i).html(colorValue);

		}
	}

};

var targetPreviousArray = function() {

	if (currentPosition != 0) {

		referenceArray = paletteStorage[currentPosition - 1];

	} else {
		referenceArray = paletteStorage[currentPosition];
	}
};

var targetNextArray = function() {

	if (currentPosition != paletteStorage.length - 1) {

		referenceArray = paletteStorage[currentPosition + 1];

	} else {
		referenceArray = paletteStorage[currentPosition];
	}
};

var gatherCustomColorValues = function() {

	for (var x = 0; x <= 4; x++) {

		colorInputArray[x] = customColorInput.eq(x).val(); 
	}
};

var generateColorPalette = function () {

	gatherCustomColorValues();


		for (var i = 0; i <= 4; i++) {

			if (colorInputArray[i] !== "") {

				colorValue = colorInputArray[i];

				colorPalette.eq(i).css("background-color", colorValue);

				palettePrintOut.eq(i).html(colorValue);

			} else if (colorInputArray[i] === "") {

				ifCheckedAssign();

				colorPalette.eq(i).css("background-color", colorValue);

				palettePrintOut.eq(i).html(colorValue);

			}

			if (colorInputArray[i] !== "") {

				ifCheckedAssign();
			}

			customColorArray[i] = colorValue;
		}	
};	


var ensureTypeSelected = function() {

	if(rgbRadio.is(':checked') || hslRadio.is(':checked') || hexRadio.is(':checked')) {
	
	colorPalette.show();
	
	} else {
	
		return false;
	}
};

var ifCheckedAssign = function () {


	if(rgbRadio.is(':checked')) {

		rgb = "rgb(" + randomValue(0, 255) + "," + randomValue(0, 255) + "," + randomValue(0, 255) + ")";
		
		colorValue = rgb;
	
	} else if (hslRadio.is(':checked')) {
	
		hsl = "hsl(" + randomValue(0, 360) + "," + randomValue(0, 100) + "%" + "," + randomValue(0, 100) + "%" + ")";
	
		colorValue = hsl;
	
	} else if (hexRadio.is(':checked')) {
	
		randomVariableChooser();
	
		hex = "#" + hexArray.join("");
	
		colorValue = hex;		
	
	} else if (!rgbRadio.is(':checked') && !hslRadio.is(':checked') && !hexRadio.is(':checked')) {
	
		$("#reminder").html("Forgetting something?").css("color", "purple");
		
		return false;
	}
};

var arrayOfPalettes = function() {

	paletteStorage.push(customColorArray);
};

var toggleLockState = function(currentLock, idx) {

	if(currentLock.html() === 'Lock'){
		
		customColorInput.eq(idx).val(referenceArray[idx]);	

		currentLock.html('Unlock');
	
	} else if (currentLock.html() === 'Unlock') {
		
		customColorInput.eq(idx).val("");
		currentLock.html('Lock');

	}
};

// var removeReminder = function() {
// 	$("#reminder").html("");
// };

var toggleBlackWhite = function() {

	if($("html").css("background-color") === "rgb(255, 255, 255)") {
	
		toBlack();

		toggleBtwBW.html("<img src='img/turnwhite.png' height=60em width=60em>");	 

	
	} else if ($("html").css("background-color") === "rgb(0, 0, 0)") {
	
		toWhite();

		toggleBtwBW.html("<img src='img/turnblack.png' height=60em width=60em >");	 
			 

	
	} else {
	
		return false;
	}
};

var highlightSelection = function(typeID, typeID_2, typeID_3, colorOfSelected, blackOrWhite) {
	$(typeID).css("color", colorOfSelected);

		if ($html.css("background-color") === "rgb(0, 0, 0)") {
			blackOrWhite = "rgb(255, 255, 255)";
		} else {
			blackOrWhite = "rgb(0, 0, 0)";
		}

	$(typeID_2).css("color", blackOrWhite);
	$(typeID_3).css("color", blackOrWhite);

};

var colorPaletteGenerator = function() {
	ensureTypeSelected();
	generateColorPalette();
	arrayOfPalettes();
	referenceArray = customColorArray;
	customColorArray = [];
};


//**********************Element Land**********************//


$("#lock_1").click(function() {

	toggleLockState($("#lock_1"), 0);
	
});

$("#lock_2").click(function() {

	toggleLockState($(this), 1);


});

$("#lock_3").click(function() {

	toggleLockState($(this), 2);

});

$("#lock_4").click(function() {

	toggleLockState($(this), 3);


});

$("#lock_5").click(function() {

	toggleLockState($(this), 4);

});


$("#labelRGB").click(function() {

	rgbRadio.prop("checked", true);

	highlightSelection("#labelRGB", "#labelHSL", "#labelHex", "rgb(171, 130, 229)");
	
	colorPaletteGenerator();

	controls.show();

});

$("#labelHSL").click(function() {

	hslRadio.prop("checked", true);

	highlightSelection("#labelHSL", "#labelRGB", "#labelHex", "hsl(177,81%,78%)");
	
	colorPaletteGenerator();

	controls.show();

});



$("#labelHex").click(function() {

	hexRadio.prop("checked", true);

	highlightSelection("#labelHex", "#labelRGB", "#labelHSL", "#5cde4a");
	
	colorPaletteGenerator();

	controls.show();

});

back.click(function(e) {
	
	e.preventDefault();
	
	determineCurrentPosition();
	
	targetPreviousArray();
	
	populateColors();
});

forward.click(function(e) {
	
	e.preventDefault();
	
	determineCurrentPosition();
	
	targetNextArray();
	
	populateColors();
});


setText.click(function(e) {
	
	e.preventDefault();

	if (customText !== "") {
	setText.html("Reset Text");
	}
	
	changeTextColor();
	
});

setBg.click(function(e) {
	
	e.preventDefault();

	if (customizeBg !== "") {
	setBg.html("Reset Bg");
	}
	
	customizeBg();

});

restoreDefault.click(function(e) {
	
	e.preventDefault();
	
	clearEverything();
	
});

toggleBtwBW.click(function(e) {
	
	e.preventDefault();
	
	toggleBlackWhite();

});

supportBeams.click(function() {
	colorPaletteGenerator();
});


createColorPalette.click(function(e) {
	
	e.preventDefault();
	colorPaletteGenerator();
});

colorPalette.click(function() {
	colorPaletteGenerator();
});

palettePrintOut.click(function() {
	if(palettePrintOut.css("color") === "rgb(255, 255, 255)") {
		palettePrintOut.css("color","rgb(0, 0, 0)");
	} else {
		palettePrintOut.css("color","rgb(255, 255, 255)");
	}
});


colorPalette.hide();
controls.hide();



})();





