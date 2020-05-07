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
        '<a href="#">Cultura</a>'+
         '<a href="#">Mancare</a>'+
         '<a href="#">Istorie</a>'+
         '<a href="#">Geografie</a>'+
         '<a href="#">Turism</a>'+
       '</div>'+
     '</div>'+
     '<button onclick = "toMainPage()" class="button button1"> <i class="las la-home"></i></button>'+
    '</div>'+
'</div>'+
'</header>';

var assoc_data = [];
assoc_data["footer"] = footerHTMLstream;
assoc_data["header"] = headerHTMLstream;
//food:
var fdata = [
'Pronunțat „guiaș”, este, probabil, cel mai cunoscut preparat unguresc. Poate fi o supă sau o tocăniță, făcută din legume și carne, de obicei de vită sau porc, asezonată cu multă'+
'paprică (boia de ardei). Printre legumele aflate în lista ingredientelor se află de obicei cartofii, morcovii, rădăcina de pătrunjel, țelină sau ardei gras.'+
'Gulyásul a fost creat pentru prima dată în secolul al IX-lea de către ciobani și ciurdari. Este făcut de obicei într-un ceaun, deasupra unui foc de lemne.',
'Nu, nicio pasăre nu a fost rănită în prepararea acestui desert. Laptele de pasăre e un desert de origine maghiară, compus dintr-o cremă supă de vanilie, cu bulgărași de albuș de ou,'+
'bătut spumă cu zahăr și vanilie. Bulgărașii de albuș sunt coborâți cu o lingură în crema de vanilie și fierți acolo. Textura cremoasă a budincii de vanilie se îmbină perfect cu'+
'textura aerată a bulgărașilor de albuș de ou.',
'Ceea ce vezi în imagine te-ar putea duce cu gândul la un desert, însă, deși este dulce, nu este consumată ca desert, ci ca fel principal. Meggyleves este o supă dulce, de vișine,'+
 'făcută cu smântână și servită rece, în anotimpul cald.',
 'Papricașul de pui, așa cum este cunoscut la noi, este consumat de cele mai multe ori pe paste sau găluște (sau mămăligă, în România). Este un fel de tocăniță de pui, făcută cu'+
'smântână și paprică, de unde îi vine și numele. E o mâncare condimentată, delicioasă atunci când este mâncată caldă.',
'Acest preparat se traduce în română ca ardei umpluți. Rețeta se găsește, adaptată, și în România, însă este făcută original în Ungaria. Ardeilor grași le este îndepărtată coada'+
'și seminţele și sunt umpluți cu un amestec de carne, orez și legume, după care sunt gătiți în sos.'
];

