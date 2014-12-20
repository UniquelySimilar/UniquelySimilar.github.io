// Display specific content (div), hide other content (div), and set menu option (link) class to 'active'
function processContent(selectorsToHide, selectorToShow) {
	for (i = 0; i < selectorsToHide.length; i++) {
		$(selectorsToHide[i]).hide();
		$(selectorsToHide[i] + "-item").removeClass("active");
	}

	$(selectorToShow).show();
	$(selectorToShow + "-item").addClass("active");
}

function showAbout() {
	//console.log("'showAbout()' called");
	processContent(["#skillset", "#demo-apps", "#interests", "#contact"], "#about");
}

function showSkillset() {
	//console.log("'showSkillset()' called");
	processContent(["#about", "#demo-apps", "#interests", "#contact"], "#skillset");
}

function showDemoApps() {
	//console.log("'showDemoApps()' called");
	processContent(["#skillset", "#about", "#interests", "#contact"], "#demo-apps");
}

function showInterests() {
	//console.log("'showInterests()' called");
	processContent(["#demo-apps", "#skillset", "#about", "#contact"], "#interests");
}

function showContact() {
	//console.log("'showContact()' called");
	processContent(["#demo-apps", "#skillset", "#about", "#interests"], "#contact");
}

// Initialize menu item (link) click handlers
function initMenuClick(linkSelector, showFunction) {
	$(linkSelector).click(function(event) {
		event.preventDefault();
		showFunction();
	});
}

// Page load
$(function() {
	// Initialize menu item (link) click handlers
	initMenuClick(".about-link", showAbout);
	initMenuClick(".skillset-link", showSkillset);
	initMenuClick(".demo-apps-link", showDemoApps);
	initMenuClick(".interests-link", showInterests);
	initMenuClick(".contact-link", showContact);

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
