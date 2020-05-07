display = (x) => {
    console.log(x);//for debug
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
$(document).ready(function() { 
    display("works");
        //playAudio(audioAdd);
        renderHTMLstream("header");
        renderHTMLstream("footer");
        
});