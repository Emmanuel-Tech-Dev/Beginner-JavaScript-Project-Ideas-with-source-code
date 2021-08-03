const background = document.getElementById("wrapper");
const button = document.getElementById("button");
const Hex = document.getElementById("number");




button.addEventListener("click", () => {
       
            // generate random background colors usign thier rgb()
    // {
        var random = Math.floor(Math.random() * 255);
        var random1 = Math.floor(Math.random() * 255);
        var random2 = Math.floor(Math.random() * 255);

        background.style.backgroundColor = "rgb(" + random + ", "+  random1 +" , "+ random2 +")";
        Hex.innerHTML= "rgb(" + random + ", " + random1 + ", " + random2 + " )";
    // }
    
    // generate background colors using thier Hex
    // var random = Math.floor(Math.random() * 123456).toString(16) ;
    // background.style.backgroundColor = "#" + random;
    // Hex.innerHTML = "#" + random;
  
} )
