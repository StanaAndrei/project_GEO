
load_HTMLstream = (sval) => {
    document.getElementById(sval).innerHTML = assoc_data[sval];
}

$(document).ready(function() {
        console.log("work!");
        load_HTMLstream("header");
        load_HTMLstream("footer");
});