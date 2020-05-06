display = (x) => {
    console.log(x);//for debug
}

load_HTMLstream = (sval) => {
    display("inStream");
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

$(document).ready(function() {
        display("works");
        load_HTMLstream("header");
        load_HTMLstream("footer");
});