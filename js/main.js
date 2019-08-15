var tigercount = 0;
var hippocount = 0;
var monkeycount = 0;
var groups = 3;
var username;
var classname;
var listofbehaviors;
var listofbehaviorsdisplay;

function setdatafromlocalstorage() {
	if (localStorage.getItem("UTTECusername") !== null) {
		// Code for localStorage/sessionStorage.
		console.log("Connection to local storage established...");
		tigercount = parseInt(localStorage.tigercount);
		hippocount = parseInt(localStorage.hippocount);
		monkeycount = parseInt(localStorage.monkeycount);
		tigerbutton.textContent = localStorage.tigerbutton_name;
		hippobutton.textContent = localStorage.hippobutton_name;
		monkeybutton.textContent = localStorage.monkeybutton_name;
		input_group1.value = localStorage.tigerbutton_name;
		input_group2.value = localStorage.hippobutton_name;
		input_group3.value = localStorage.monkeybutton_name;
		groups = parseInt(localStorage.groups);
		username = localStorage.UTTECusername;
		classname = localStorage.classname;
		listofbehaviors = localStorage.listofbehaviors;
		listofbehaviorsdisplay = localStorage.listofbehaviorsdisplay;

		$("#input_username").val(username);
		$("#input_class").val(classname);
		//$("title").text(username);
		//$(".navbar-brand").html("<img src='assets/logo.svg' width='75' height='75' alt=''>Behavioral Management: "+classname);
		try {
			$("#listbehaviors").html(JSON.parse(listofbehaviors));
			$("#listbehaviorsdisplay").html(JSON.parse(listofbehaviorsdisplay));
		} catch (error) {
			console.log(error);
		}
		//document.getElementById("listbehaviordisplay").getElementsByClassName("fa-trash")[0].style.display = "none";
		//$("#listbehaviordisplay .fa-trash").hide();
		if (groups == 2) {
			$("#monkeybutton").hide();
			$("#input_group3").hide();
			$("#inputState").val("2 Groups (less than 20 students)");
		} else {
			$("#monkeybutton").show();
			$("#input_group3").show();
			$("#inputState").val("3 Groups (more than 20 students)");
		}
	} else {
		// Sorry! No Web Storage support..
		console.log("Connection to local storage is not available...");
		tigercount = 0;
		hippocount = 0;
		monkeycount = 0;
		input_group1.value = "Tiger";
		input_group2.value = "Hippo";
		input_group3.value = "Monkey";
		groups = 3;
		username = "";
		classname = "";
		listofbehaviors = "";
		listofbehaviorsdisplay = "";
	}
}

function updatelocalstorage() {
	if (typeof Storage !== "undefined") {
		// Code for localStorage/sessionStorage.
		console.log("Connection to local storage established...");
		localStorage.tigercount = tigercount;
		localStorage.hippocount = hippocount;
		localStorage.monkeycount = monkeycount;
		localStorage.tigerbutton_name = tigerbutton.textContent;
		localStorage.hippobutton_name = hippobutton.textContent;
		localStorage.monkeybutton_name = monkeybutton.textContent;
		localStorage.groups = groups;
		localStorage.UTTECusername = username;
		localStorage.classname = classname;
		localStorage.listofbehaviors = listofbehaviors;
		localStorage.listofbehaviorsdisplay = listofbehaviorsdisplay;
		//$("#listbehaviorsdisplay").html(JSON.parse(listofbehaviors));
		//document.getElementById("listbehaviordisplay").getElementsByClassName("fa-trash")[0].style.display = "none";
		//$("#listbehaviordisplay .fa-trash").hide();
	} else {
		// Sorry! No Web Storage support..
		console.log("Connection to local storage is not available...");
	}
}

function clearlocalstorage() {
	if (typeof Storage !== "undefined") {
		// Code for localStorage/sessionStorage.
		console.log("Connection to local storage established...");
		localStorage.removeItem("tigercount");
		localStorage.removeItem("hippocount");
		localStorage.removeItem("monkeycount");
		localStorage.removeItem("tigerbutton_name");
		localStorage.removeItem("hippo_button_name");
		localStorage.removeItem("monkeybutton_name");
		localStorage.removeItem("groups");
		localStorage.removeItem("UTTECusername");
		localStorage.removeItem("classname");
		localStorage.removeItem("listofbehaviors");
		localStorage.removeItem("listofbehaviorsdisplay");
		console.log("Local storage is cleared...");
	} else {
		// Sorry! No Web Storage support..
		console.log("Connection to local storage is not available...");
	}
}

$(document).ready(function() {
	console.log("Document load event");

	setdatafromlocalstorage();

	/*if(localStorage.SignStatus === "Signed In"){
        document.getElementById("form_getstarted").classList.remove("d-none");
        document.getElementById("btn_start").classList.remove("d-none");
        document.getElementById("btn_login").classList.add("d-none");
    }else{
        // Default appearance - Sign in required
    }*/

	// Sign in username and classname - no account required
	//$('#Modal').modal('show');

	$("#tigerbutton").click(function() {
		tigercount++;
		drawAxisTickColors();
		updatelocalstorage();
	});

	$("#hippobutton").click(function() {
		hippocount++;
		drawAxisTickColors();
		updatelocalstorage();
	});

	$("#monkeybutton").click(function() {
		monkeycount++;
		drawAxisTickColors();
		updatelocalstorage();
	});

	$("#addbehavior").click(function() {
		console.log("click event add behavior");
		var behavior = $("#inputBehavior").val();
		console.log(behavior);
		$("#listbehaviors").append("<li class='list-group-item'>" + behavior + "<i class='fas fa-trash float-right'></li>");
		$("#listbehaviorsdisplay").append("<li class='list-group-item'>" + behavior + "</li>");
		listofbehaviors = JSON.stringify($("#listbehaviors").html());
		listofbehaviorsdisplay = JSON.stringify($("#listbehaviorsdisplay").html());
		console.log("List of behavior in string format :" + listofbehaviors);
		updatelocalstorage();
	});

	/*$("#listbehaviors i").click(function(){
       $(this).parent().remove(); 
    });*/

	$(document).on("click", "#listbehaviors i", function() {
		var index =
			$(this)
				.parent()
				.index() + 1;
		console.log(index);
		$("ul.listitems li:nth-child(" + index + ")").remove();
		//$(this).parent().remove();
		listofbehaviors = JSON.stringify($("#listbehaviors").html());
		console.log("List of behavior in string format :" + listofbehaviors);
		listofbehaviorsdisplay = JSON.stringify($("#listbehaviorsdisplay").html());
		updatelocalstorage();
	});

	$("#inputState").click(function() {
		var option = $("#inputState option:selected").text();
		console.log(option);
		if (option == "2 Groups (less than 20 students)") {
			$("#monkeybutton").hide();
			$("#input_group3").hide();
			groups = 2;
			drawAxisTickColors();
			updatelocalstorage();
		} else {
			$("#monkeybutton").show();
			$("#input_group3").show();
			groups = 3;
			drawAxisTickColors();
			updatelocalstorage();
		}
	});

	$("#settings").click(function() {
		$("#settingsmenu").fadeToggle();
	});

	/*$("#user").click(function(){
         $('#Modal').modal('show'); 
    });*/

	/*$("#form").click(function(){
        //window.open("evaluation.html");
    })*/

	$("#btn_login").click(function() {
		//$("title").text(username);
		//$(".navbar-brand").html("<img src='assets/logo.svg' width='75' height='75' alt=''>Behavioral Management: "+classname);
		//listofbehaviors = JSON.stringify($("#listbehaviors").html());
		//listofbehaviorsdisplay = JSON.stringify($("#listbehaviorsdisplay").html());
		//console.log("List of behavior in string format :"+listofbehaviors);
		//localStorage.SignStatus = "Signed In";
		handleSignInClick();
	});

	$("#btn_start").click(function() {
		username = $("#input_username").val();
		classname = $("#input_class").val();
		updatelocalstorage();
		document.getElementById("landing").classList.add("d-none");
		document.getElementById("navbar").classList.remove("d-none");
		document.getElementById("game").classList.remove("d-none");
		drawAxisTickColors();
	});

	$("#signout").click(function() {
		username = "";
		$("#input_username").val(username);
		classname = "";
		$("#input_class").val(classname);
		//$("title").text(username);
		//$(".navbar-brand").html("<img src='assets/logo.svg' width='75' height='75' alt=''>Behavioral Management: "+classname);

		handleSignOutClick();
		clearlocalstorage();
		location.reload();
	});

	/*$("#closebutton, .close").click(function(){
         drawAxisTickColors(); 
    });*/
});
