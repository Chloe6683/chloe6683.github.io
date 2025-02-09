function footer() {

    const template = document.createElement('template');

    template.innerHTML=`

        <div id="footer">

          <p>Site by Chloe Ivy</p>

        </div>

    `

    document.getElementById("footer").prepend(template.content);

}
