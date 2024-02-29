function startDisco() {

    function deleteButton() {
        const element = document.getElementById("startButton");
        element.remove();
    }

    function startMusic() {
        let source = "audio/disco.mp3"
        let audio = document.createElement("audio");
        audio.autoplay = true;
        audio.load()
        audio.addEventListener("load", function () {
            audio.play();
        }, true);
        audio.src = source;
    }
    
    //TODO: This is very bad. Rewrite this shit
    function startDance()
    {
        let tableElement = document.getElementById("table");
        let imageContainer = document.getElementById("image");
        let rowElement = document.getElementById("firstRow");
        let body = document.body;
        body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)),url(\"/images/disco_club.jpg\")";
        
        tableElement.style.display = null;

        function makeDisco() 
        {
            let screenWidth = window.screen.width;
            let screenHeight = window.screen.height;
            // TODO Remove magic numbers by finding a way to get data from an HTML file
            let pictureHeight = 285;
            let pictureWidth = 300;

            function multiplyDisco()
            {
                let widthCount = (screenWidth / pictureWidth) - 2;
                let heightCount = (screenHeight / pictureHeight) - 2;

                //Horizontal cloning
                for (let i = 0; i <= widthCount; i++) 
                {
                    let copyImageContainer = imageContainer.cloneNode(true);
                    rowElement.appendChild(copyImageContainer);
                }
                //Vertical cloning
                for (let i = 0; i <= heightCount; i++) 
                {
                    let rowCopy = rowElement.cloneNode(true);
                    table.appendChild(rowCopy);
                }
            }
        // I know....it's bad....
        multiplyDisco();
        }
        makeDisco();   
    }
    startMusic(); 
    deleteButton();
    startDance();
     
}
 

