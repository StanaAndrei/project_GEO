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
    let s = '';
    let nr = Number(document.getElementById('BRs').getAttribute('data-nrBrs'));
    if (nr){
    for (let i = 0; i < nr; i++)
        s += '<br>';
    document.getElementById('BRs').innerHTML = s;
    }
}

const audioAdd = "content/audio/audioBG.mp3";

$(document).ready(function() { 
        display("works");
        setBrakes();
        //playAudio(audioAdd);
        renderHTMLstream("header");
        renderHTMLstream("footer");    
});

updateContent = (p) =>{
    document.getElementById("fdata").innerText = fdata[p];
}
var slideIndex = 1;
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

//search:
srcFunction = () => {
    let input, filter, ul, li, a, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    filter = filter.replace(" ", "");
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
//linkClick:
lc_triggered = (num) => {
    if (window.location.href.search(numToPage[num]) !== -1){
        alert("Esti deja pe pagina respectiva!");
        return;
    }
    if (window.location.href.search("spages") !== -1)
        location.replace(numToPage[num]);
    else
        location.replace('content/spages/' + numToPage[num]);
}