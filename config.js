// Change config settings here. Make sure all but the last line are followed by a comma.
// You can add empty lines for spacing however you like.

// For file paths, add ../ preceding the file's location in the main folder.

var config = {
	
	// The name of the tab
	"title": "Rowan Tupper",
	
	// SOCIAL LINKS
		"instagram_link": "https://www.instagram.com/vesper100",
		"linkedin_link": "https://uk.linkedin.com/in/rowan-tupper-5349b627b",
		
		"instagram_img": "../images/instagram.webp",
		"linkedin_img": "../images/linkedin.webp",
	
	// APPEARANCE
		// The background colour of the whole site
		"bg_colour": "#000000",
	
	// HEADER
		// The images that appear either side of the header
		"header_image_left": "../images/header_face_L.webp",
		"header_image_right": "../images/header_face_R.webp",
		
		// The image that appears above the header on mobile
		"header_image_mobile": "", // Optional
		
		"header_title": "Rowan Tupper",
		"header_font": "Colon W01 Bold",
		"header_font_colour": "#ff8799",
	
		// SUBHEADER	
			"subheader_title": "2d animator - rorotupper@gmail.com",
			
			"subheader_font": "Courier M W01 Light",
			"subheader_colour": "#ff8799",
	
	// NAVIGATION
		"showreel_text": "SHOWREEL",
		"artwork_text": "ARTWORK",
		"about_text": "ABOUT",
		
		"navigation_font":"Times New Roman",
		// the font colour of the current page
		"navigation_colour_selected":"#ffffff",
		// the font colour of each other page
		"navigation_colour_deselected":"#808080",
		
	// FOOTER
		"footer_text": "© 2024. Site by Chloe Ivy. All rights reserved.",
		"footer_colour": "#808080",
		
	// ARTWORK PAGE
		"artwork_text_colour": "#ffffff",
		"artwork_text_font": "Courier M W01 Light",

	// SHOWREEL PAGE
		"showreel_video": "../images/showreel.mp4",
		
	// ABOUT PAGE
		"about_title_colour": "#ff8799",
		"about_title_font": "Colon W01 Bold",
		
		"about_subtitle_colour": "#BB717C",
		"about_subtitle_font": "Colon W01 Bold",
		
		"about_text_colour": "#ffffff",
		"about_text_font": "Courier M W01 Light"
	
}

// You shouldn't have to change anything below this comment.

function getConfig() {
	
	return config;
	
}