function sidebar() {

    const template = document.createElement('template');

    template.innerHTML=`
        
        <div>
            <h1>Pinned Page</h1>
            <h4>PiHole</h4>
            <p>A guide on how to set up a PiHole for your network.<br /><a href="article_pihole.html">Read more</a></p>

            <h1>Useful Links</h1>
            <ul>
                <li><a href="#"><img src="icons/link.png" alt="Link"> This is a link.</a></li>
                <li><a href="#"><img src="icons/link.png" alt="Link"> This is a link.</a></li>
                <li><a href="#"><img src="icons/link.png" alt="Link"> This is a link.</a></li>
                <li><a href="#"><img src="icons/link.png" alt="Link"> This is a link.</a></li>
            </ul>
        </div>
    `

    document.getElementById("sidebar").prepend(template.content);

}
