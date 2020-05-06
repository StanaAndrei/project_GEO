const footerHTMLstream = 
"<footer>"+

"<p>prezentare Gyula!"+
"<br>"+
"de Drug Erick și Stana Andrei"+
"</p></footer>";

const headerHTMLstream = '<header>'+
'<div id="container" style="white-space:nowrap">'+

    '<div id="title_image" style="display:inline;">'+
        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Gyula_V%C3%A1r_nappal.jpg/290px-Gyula_V%C3%A1r_nappal.jpg"/>'+
   '</div>'+

    '<div id = "texts">'+
        '<h1 id = "main_title" >Gyula</h1>'+
    '</div>'+
    '<div id = "aut">'+
       '<div class="dropdown">'+
       '<button class="dropbtn">Menu  <i class="las la-level-down-alt">'+
       '</i></button>'+
       '<div class="dropdown-content">'+
        '<a href="#">Link 1</a>'+
         '<a href="#">Link 2</a>'+
         '<a href="#">Link 3</a>'+
       '</div>'+
     '</div>'+
     '<button onclick = "toMainPage()" class="button button1"> <i class="las la-home"></i></button>'+
    '</div>'+
'</div>'+
'</header>';

var assoc_data = []
assoc_data["footer"] = footerHTMLstream;
assoc_data["header"] = headerHTMLstream;