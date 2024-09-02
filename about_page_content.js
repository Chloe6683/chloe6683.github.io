
// "id": needs to be unique.
// "title": display name for the section.

	// optional

// "text": paragraphs separated by space.
// "list": bullet points.
// "group": sections with subheaders.

var aboutContent = [
	
	{
		"id": 1,
		"title": "About Me",
		
		"text": [
		
			"Hi! I'm a UK based animation student in my final year at Arts University Bournemouth.",
			"My passion is 2D animation - hand drawn as well as rigged. I am disciplined, eager, always excited to learn more, and above all committed to the efficient production of high quality work."
		]
		
	},
	
	{
		"id": 2,
		"title": "Software Proficiencies:",
		
		"list": [
		
			"Toon Boom harmony",
			"Storyboard Pro",
			"TVPaint",
			"CelAction 2d",
			"Photoshop",
			"Clip Studio Paint",
			"Adobe After Effects"
		]
		
	},
	
	{
		"id": 3,
		"title": "Experience:",
		
		"group": [
		
			{
				"title": "Karrot Animation Studios (Apr 2024)",
				"text": "- Produced 2d rigged character and prop animation in CelAction for a simulated brief using assets from Karrot's Sarah & Duck."
			},
			
			{
				"title": "Student Film: This Is The Life (Jan - Jun 2024)",
				"text": "- Produced rough, clean and coloured animation in ToonBoom Harmony for the short film This Is The Life."
			},
			
			{
				"title": "Flying Fools Studios (Nov - Dec 2023)",
				"text": "- Worked remotely with a small team producing concept art, character designs, and visual development for a live brief for Flying Fools Studios."
			},
			
			{
				"title": "Student Film: Le Château Des Chats (Jun 2023)",
				"text": "- Worked as a colour assistant on the short film Le Château Des Chats."
			},
			
			
			
		]
		
	},
	
	{
		"id": 4,
		"title": "Education:",
		
		"group": [
		
			{
				"title": "Arts University Bournemouth",
				"text": "BA Animation Production (Oct 2022 - Present), Foundation Diploma, Distinction (Sept 2021 - Jul 2022)"
			},
			
			{
				"title": "Richmond Secondary School and 6th Form College",
				"text": "A Levels, A*AA (Sept 2019 - Jul 2021)"
			}			
			
		]
		
	}
	
]

// You shouldn't have to change anything below this comment.

function getAboutContent() {
	
	return aboutContent;
	
}