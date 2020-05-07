display = (val) => {
    console.log(val);//for debug
}

renderHTMLstream = (sval) => {
    document.getElementById(sval).innerHTML = assoc_data[sval];
}

toMainPage = () => {
    let cHref = window.location.href;
    let arrWs = cHref.split("/");
    let last = arrWs.length - 1;
    if (arrWs[last] === "index.html" || arrWs[last - 1] === "project_GEO")
        alert("Esti deja pe pagina principala!");
    else
        location.replace("../../index.html");//*/
}

function playAudio(){
    document.getElementById("myaudio").focus();

}
//st
//end

setBrakes = () =>{

}

const audioAdd = "content/audio/audioBG.mp3";
var slideIndex = 1;
$(document).ready(function() { 
    display("works");
        //playAudio(audioAdd);
        let f = Boolean(window.location.href.lastIndexOf("food.html") === window.location.href.length - 9);
        f = f && Boolean(window.location.href.lastIndexOf("food.html") !== -1);
        if (f){
            showDivs(slideIndex);
        }
        renderHTMLstream("header");
        renderHTMLstream("footer");       
});

updateContent = (p) =>{
    document.getElementById("fdata").innerText = fdata[p];
}

 plusDivs = (n) =>  {
    showDivs(slideIndex += n);
    //display("up");
}
  
showDivs = (n) => {

    let i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block"; 
    updateContent(slideIndex - 1);
}