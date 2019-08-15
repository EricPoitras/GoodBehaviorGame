input_group1.addEventListener("input", function() {
	var input_group1_value = input_group1.value;
	tigerbutton.textContent = input_group1_value;
	updatelocalstorage();
	drawAxisTickColors();
});
input_group2.addEventListener("input", function() {
	var input_group2_value = input_group2.value;
	hippobutton.textContent = input_group2_value;
	updatelocalstorage();
	drawAxisTickColors();
});
input_group3.addEventListener("input", function() {
	var input_group3_value = input_group3.value;
	monkeybutton.textContent = input_group3_value;
	updatelocalstorage();
	drawAxisTickColors();
});
input_help_textbox.addEventListener("keypress", function(e) {
	var key = e.which || e.keyCode;
	if (key === 13) {
		console.log("Enter key press");
		/*var element = $(this)
			.html()
			.replace(/\r?\n|\r|\s|["']/g, "");
		var elementdescription = element.substring(0, 500);
		var elementType = $(this).prop("nodeName");
		refreshloggervalues();
		datalogger("ClickEvent", elementdescription, "querysubmitbutton");*/
	}
});
