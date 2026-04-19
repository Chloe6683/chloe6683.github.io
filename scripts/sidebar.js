function sidebar() {

    const template = document.createElement('template');

    template.innerHTML=`
        
        <div>
            <h1>Pinned Page</h1>
            <h4>You Should Have a Website</h4>
            <p>Why you should have your own personal site.<br /><a href="article_website.html">Read more</a></p>

            <h1>Other Links</h1>
            <ul>
                <li><a href="article_music.html"><img src="icons/link.png" alt="Link"> I'm Listening To</a></li>
                <li><a href="article_botc.html"><img src="icons/link.png" alt="Link"> Blood on the Clocktower</a></li>
                <li><a href="article_1kbwc.html"><img src="icons/link.png" alt="Link"> 1,000 Blank White Cards</a></li>
                
            </ul>
        </div>
    `

    document.getElementById("sidebar").prepend(template.content);

}
