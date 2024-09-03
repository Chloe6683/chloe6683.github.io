var config, artContent, aboutContent;

var page;

function init(config, artContent, aboutContent) {
	
	page = "ABOUT";
	config = getConfig();
	artContent = getArtContent();
	aboutContent = getAboutContent();
		
	setFromConfig();
	
	aboutPage();
	
}
	
function setFromConfig() {
	
	// Set name of tab to "title" from config.js file
	document.getElementById("title").innerHTML = getPage() + " | " + config.title;
	
	//Set bg colour
	document.body.style.backgroundColor = config.bg_colour;
	
	// HEADER
	
		// Set header images
		document.getElementById("headerImgL").src = config.header_image_left;
		document.getElementById("headerImgR").src = config.header_image_right;
		
		if (config.header_image_mobile == "") {
			document.getElementById("headerImgMobile").src = config.header_image_left;
		} else {
			document.getElementById("headerImgMobile").src = config.header_image_mobile;
		}
		
		
		
		// Set header title, font, and colour
		document.getElementById("headerTitle").innerHTML = config.header_title;
		document.getElementById("headerTitle").style["fontFamily"] = config.header_font;
		document.getElementById("headerTitle").style["color"] = config.header_font_colour;
		
		// Set header title, font, and colour
		document.getElementById("subheaderTitle").innerHTML = config.subheader_title;
		document.getElementById("subheaderTitle").style["fontFamily"] = config.subheader_font;
		document.getElementById("subheaderTitle").style["color"] = config.subheader_font_colour;
	
	// NAVBAR
	
		// set navbar text and colour
		document.getElementById("showreelBtn").innerHTML = config.showreel_text;
		document.getElementById("artworkBtn").innerHTML = config.artwork_text;
		document.getElementById("aboutBtn").innerHTML = config.about_text;
		
		document.getElementById("showreelBtn").style["fontFamily"] = config.navigation_font;
		document.getElementById("artworkBtn").style["fontFamily"] = config.navigation_font;
		document.getElementById("aboutBtn").style["fontFamily"] = config.navigation_font;
	
		document.getElementById("showreelBtn").style["color"] = config.navigation_colour_deselected;
		document.getElementById("artworkBtn").style["color"] = config.navigation_colour_deselected;
		document.getElementById("aboutBtn").style["color"] = config.navigation_colour_deselected;
		
		// Highlight current page
		if (page == "SHOWREEL") {
			document.getElementById("showreelBtn").style["color"] = config.navigation_colour_selected;
		} else if (page == "ARTWORK") {
			document.getElementById("artworkBtn").style["color"] = config.navigation_colour_selected;
		} else {
			document.getElementById("aboutBtn").style["color"] = config.navigation_colour_selected;
		}
		
	// FOOTER
	
		document.getElementById("instagramImg").src = config.instagram_img;
		document.getElementById("linkedinImg").src = config.linkedin_img;
		
		document.getElementById("instagramLink").href = config.instagram_link;
		document.getElementById("linkedinLink").href = config.linkedin_link;
	
		document.getElementById("footerText").innerHTML = config.footer_text;
		document.getElementById("footerText").style["color"] = config.footer_colour;
	
	
}

function hidePages() {
	
	document.getElementById("showreelPage").style.display = "none";
	document.getElementById("artworkPage").style.display = "none";
	document.getElementById("aboutPage").style.display = "none";
	
}

function showreelPage() {
	
	page = "SHOWREEL";	
	setFromConfig();
	
	hidePages();
	document.getElementById("showreelPage").style.display = "block";
	
	document.getElementById("showreelPage").innerHTML = "";
	
	const vid = document.createElement("video");
	
	const vidSrc = document.createElement("source");
	vidSrc.src = config.showreel_video;
	vidSrc.type = "video/mp4";
	vid.appendChild(vidSrc);
	
	vid.setAttribute("autoplay", "")
	vid.setAttribute("controls", "")
	
	vid.style.width = "100%"; 
	vid.style.height = "100%"; 
	
	document.getElementById("showreelPage").appendChild(vid);
	
}

function artworkPage() {
	
	page = "ARTWORK";	
	setFromConfig();
	
	hidePages();
	
	document.getElementById("artworkPage").style.display = "block";
	
	document.getElementById("artworkPage").innerHTML = "";
	
	for (let i = 0; i < artContent.length; i++) {
		
		// Create title for each Category
		
		if (artContent[i].title != "") {
			const header = document.createElement("h2");
			header.innerText = artContent[i].title;
			header.style["color"] = config.artwork_text_colour;
			header.style["fontFamily"] = config.artwork_text_font;
			document.getElementById("artworkPage").appendChild(header);
		}
		
		// Create box to hold images
		const div = document.createElement("div");
		const categoryId = artContent[i].id;
		div.id = categoryId;
		div.setAttribute("class", "row");
		document.getElementById("artworkPage").appendChild(div);
		
		// Create images
		for (let j = 0; j < artContent[i].images.length; j++) { 
		
			// images share a row
			const col = document.createElement("div");
			col.setAttribute("class", "col my-3");
			
			const img = document.createElement("img");
			img.src = artContent[i].images[j];
			
			img.style["width"] = "100%";
			img.style["height"] = "100%";
			img.style["object-fit"] = "cover";
			img.style["object-position"] = "25% 25%";
			
			img.setAttribute("onclick", "enlargeImage('" + artContent[i].images[j] + "')");
			
			col.appendChild(img);
			document.getElementById(categoryId).appendChild(col);
		
		}
		
	}
	

	
}

function aboutPage() {
	
	page = "ABOUT";	
	setFromConfig();
	
	hidePages();
	document.getElementById("aboutPage").style.display = "block";
	
	document.getElementById("aboutPage").innerHTML = "";
	
	for (let i = 0; i < aboutContent.length; i++) {
		
		// Create title for each Category
		const section = aboutContent[i];
		
		if (section.title != "") {
			const header = document.createElement("h2");
			header.innerText = section.title;
			header.style["color"] = config.about_title_colour;
			header.style["fontFamily"] = config.about_title_font;
			document.getElementById("aboutPage").appendChild(header);
		}
		
		if (section.hasOwnProperty("text")) {
			
			for (let j = 0; j < section.text.length; j++) {
				
				const p = document.createElement("p");
				p.innerText = section.text[j];
				document.getElementById("aboutPage").appendChild(p);
				
			}
			
		}
		
		if (section.hasOwnProperty("list")) {
			
			const ul = document.createElement("ul");
			ul.style["list-style-type"] = "none";
			
			for (let j = 0; j < section.list.length; j++) {
				
				const li = document.createElement("li");
				li.innerText = "- " + section.list[j];
				ul.appendChild(li);
				
			}
			
			document.getElementById("aboutPage").appendChild(ul);
			
		}
		
		if (section.hasOwnProperty("group")) {
			
			for (let j = 0; j < section.group.length; j++) {
				
				const h4 = document.createElement("h4");
				h4.innerText = section.group[j].title;
				
				h4.style["color"] = config.about_subtitle_colour;
				h4.style["fontFamily"] = config.about_subtitle_font;
				
				document.getElementById("aboutPage").appendChild(h4);
				
				const p = document.createElement("p");
				p.innerText = section.group[j].text;
				document.getElementById("aboutPage").appendChild(p);
				
			}
			
		}
		
		
		
	}
	
}

function enlargeImage(src) {
	
	console.log(src);
	
	document.getElementById("modalContainer").innerHTML = "";
	
	const img = document.createElement("img");
	img.src = src;
	img.setAttribute("style", "width:60%;");
	img.setAttribute("onclick", "closeModal()");
	img.setAttribute("style", "vertical-align:middle;");
	
	document.getElementById("modalContainer").appendChild(img);
	
	document.getElementById("modalContainer").style.display = "block";
	
}

function closeModal() {
	
	document.getElementById("modalContainer").style.display = "none";
	
}

function getPage() {
	
	return page.toUpperCase();
	
}