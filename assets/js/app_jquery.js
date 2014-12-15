// Display 'About' content, hide other content, and set menu option to 'active'
function showAbout() {
	//console.log("'showAbout()' called");

	$("#about").show();
	$("#skillset").hide(); 
	$("#demo-apps").hide();
	$("#interests").hide();

	$("#skillset-item").removeClass("active");
	$("#demo-apps-item").removeClass("active");
	$("#interests-item").removeClass("active");
	$("#about-item").addClass("active");
}

// Display 'Skillset' content, hide other content, and set menu option to 'active'
function showSkillset() {
	//console.log("'showSkillset()' called");
	
	$("#skillset").show();
	$("#about").hide();
	$("#demo-apps").hide();
	$("#interests").hide();

	$("#about-item").removeClass("active");
	$("#demo-apps-item").removeClass("active");
	$("#interests-item").removeClass("active");
	$("#skillset-item").addClass("active");
}

// Display 'Demo Apps' content, hide other content, and set menu option to 'active'
function showDemoApps() {
	//console.log("'showDemoApps()' called");
	
	$("#demo-apps").show();
	$("#skillset").hide();
	$("#about").hide();
	$("#interests").hide();

	$("#about-item").removeClass("active");
	$("#skillset-item").removeClass("active");
	$("#interests-item").removeClass("active");
	$("#demo-apps-item").addClass("active");
}

// Display 'Interests' content, hide other content, and set menu option to 'active'
function showInterests() {
	//console.log("'showInterests()' called");
	
	$("#interests").show();
	$("#demo-apps").hide();
	$("#skillset").hide();
	$("#about").hide();

	$("#about-item").removeClass("active");
	$("#skillset-item").removeClass("active");
	$("#demo-apps-item").removeClass("active");
	$("#interests-item").addClass("active");
}

// Page load
$(function() {
	// Initialize menu itme click handlers
	$(".about-link").click(function(event) {
		event.preventDefault();
		showAbout();
	});

	$(".skillset-link").click(function(event) {
		event.preventDefault();
		showSkillset();
	});

	$(".demo-apps-link").click(function(event) {
		event.preventDefault();
		showDemoApps();
	});

	$(".interests-link").click(function(event) {
		event.preventDefault();
		showInterests();
	});

	// Display 'About' content on initial page load
	showAbout();
});


// Pause/resume carousel
/*
$( "#pause-resume-carousel-btn" ).click(function() {
	if ( $( this ).text() == 'Pause Slide Show') {
		$( "#test-carousel" ).carousel('pause');
		$( this ).text('Resume Slide Show');
	} else {
		$( "#test-carousel" ).carousel('cycle');
		$( this ).text('Pause Slide Show');
	}
});
*/
