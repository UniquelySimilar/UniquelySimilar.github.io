// Display specific content (div), hide other content (div), and set menu option (link) class to 'active'
function processContent(selectorsToHide, selectorToShow) {
	for (i = 0; i < selectorsToHide.length; i++) {
		$(selectorsToHide[i]).hide();
		$(selectorsToHide[i] + "-item").removeClass("active");
	}

	// Special processing for drop down menu
	$("#misc-ui-item").removeClass("active");
	$("#add-remove-images").removeClass("active");

	$(selectorToShow).show().removeClass("hide");
	$(selectorToShow + "-item").addClass("active");
}

// Initialize AJAX URLs
var content_ajax_path = "../../pages/ajax/";
var imageContainerUrl = "../../pages/ajax/image_container.html";

// Initialize AJAX content
// UPDATE: Based on my reading, can not initialize a global variable from a callback.

function getAndShowAjaxContent(url) {
	$.get(url)
	.done( function(data) {
		console.log("jQuery 'get()' succeeded." );
		console.log(data);

		$('#main').empty().append(data);
	})
	.fail( function() {
		console.error("ERROR: jQuery 'get()' failed." );
	});
}

function showAbout() {
	//console.log("'showAbout()' called");
	getAndShowAjaxContent(content_ajax_path + "about.html");
}

function showSkillset() {
	//console.log("'showSkillset()' called");
	getAndShowAjaxContent(content_ajax_path + "skillset.html");
}

function showDemoApps() {
	//console.log("'showDemoApps()' called");
	getAndShowAjaxContent(content_ajax_path + "demo_apps.html");
}

function showInterests() {
	//console.log("'showInterests()' called");
	getAndShowAjaxContent(content_ajax_path + "interests.html");
}

function showAddRemoveImages() {
	//console.log("'showAddRemoveImages()' called");
	getAndShowAjaxContent(content_ajax_path + "add_remove_images.html");

	// Special processing for drop down menu
	$("#misc-ui-item").addClass("active");
	$("#add-remove-images").addClass("active");
}

function showContact() {
	//console.log("'showContact()' called");
	getAndShowAjaxContent(content_ajax_path + "contact.html");
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
	initMenuClick(".add-remove-images-link", showAddRemoveImages);
	initMenuClick(".contact-link", showContact);

	// Display 'About' content on initial page load
	showAbout();
});

/* Add/remove images processing */
var ajax_url = "../../pages/ajax/image_container.html";
var img_count = 1;
var image_html = "<p>Uninitialized image HTML</p>";

// Get the image div HTML
var jqxhr = $.get(ajax_url)
.done( function(data) {
	//console.log("jQuery 'get()' succeeded." );
	image_html = data;
	//console.log(image_html);
})
.fail( function() {
	console.error("ERROR: jQuery 'get()' failed." );
});

//Create 'Add' button functionality
$( '#add-image' ).click( function() {
	var btn_id = "btn-" + img_count;

	$('#images-div').append(image_html)
	.find('button').last().attr('id', btn_id);

	$('#images-div').find('.image-title').last().text('Image ' + img_count);

	$("#" + btn_id).click( function() {
		$(this).parent().parent().remove();
	});
	img_count++;
});

// Create 'Reset' button functionality
$( '#reset-page' ).click( function() {
	$('#images-div').empty();
	img_count = 1;
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
