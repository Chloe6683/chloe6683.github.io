function header() {

    const template = document.createElement('template');

    template.innerHTML=`

        <div id="header">

            <div id="logo">

                <br>
                <h1>\> PinkIvy<span class="blink">|</span></h1>
                <p>My website.</p>

            </div>

            <div id="menubar">

                <ul id="menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="links.html">Links</a></li>
                </ul>

            </div>

        </div>

    `

    document.getElementById("header").prepend(template.content);

}
