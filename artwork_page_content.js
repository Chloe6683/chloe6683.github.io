// Add images here. Make sure all but the last line are followed by a comma.
// You can add empty lines for spacing however you like.

// For file paths, add ../ preceding the file's location in the main folder.

// When adding new categories, make sure to copy the { } as well as their content.

// "id": must be unique. just increase it by 1 each time it doesn't matter.
// "title": will show up above a group. Leave blank for multiple rows under one group of images.
// "iamges": the list of filepaths for the images you want to display.

var artContent = [
	
	// Personal Art category
	{
		"id": 1,
		"title": "Personal Art",
		
		"images": [
		
			"../images/Personal Art/1.webp",
			"../images/Personal Art/2.webp",
			"../images/Personal Art/3.webp"
		
		]
		
	},
	
	// Second row
	{
		"id": 2,
		"title": "",
		
		"images": [
		
			"../images/Personal Art/4.webp",
			"../images/Personal Art/5.webp",
			"../images/Personal Art/6.webp"
		
		]
		
	},
	
	// Another category
	{
		"id": 3,
		"title": "VisDev work for Flying Fools Studios",
		
		"images": [
		
			"../images/VisDev/1.webp",
			"../images/VisDev/2.webp"
		
		]
		
	},
	
	{
		"id": 4,
		"title": "",
		
		"images": [
		
			"../images/VisDev/3.webp",
			"../images/VisDev/4.webp"
		
		]
		
	},
	
		{
		"id": 5,
		"title": "Project - The Name of the Rose Character Design",
		
		"images": [
		
			"../images/Name of the Rose/1.webp",
			"../images/Name of the Rose/3.webp"
		
		]
		
	},
	
	{
		"id": 6,
		"title": "",
		
		"images": [
		
			"../images/Name of the Rose/2.webp",
			"../images/Name of the Rose/4.webp"
		
		]
		
	},
	
	{
		"id": 7,
		"title": "Life Drawing",
		
		"images": [
		
			"../images/Life Drawing/1.webp",
			"../images/Life Drawing/2.webp"
		
		]
		
	},
	
	{
		"id": 8,
		"title": "",
		
		"images": [
		
			"../images/Life Drawing/3.webp",
			"../images/Life Drawing/4.webp",
			"../images/Life Drawing/5.webp"
		
		]
		
	}
	
	
]

// You shouldn't have to change anything below this comment.

function getArtContent() {
	
	return artContent;
	
}