// JAVASCRIPT FILE 

  /*
  Ana Leite | Marta Marques | Sofia Bento
  WD2 | Projeto 2 - 12.2021
  */

console.log ('on the way');


// BODY _____________________________________________________

// LAUNCH SCREEN
const launch_mp4 = document.querySelector('.launch');
// após 1500 milisegundos a imagem sai
function launch() {
  setTimeout (function () {
    launch_mp4.style.display="none";
  }, 1200);
} 

// ____________ LOGIN SCREEN _____________
// close on click
const login = document.getElementById("login");
const home = document.getElementById("home");
const login_btn = document.getElementById("login_btn");

function login_screen() {
  if (login.style.display == 'none') {
      login.style.display = 'block';
  } else {
      login.style.display = 'none';
  }
}

// save input name
  function saveName() {
     // guarda variável do nome
     let yourname = document.getElementById("user_name").value;
     // variavel com nome personalizado no html
     document.getElementById("your_name").innerText = `${yourname}`;
  } 
// ____________ FIM LOGIN SCREEN _____________


// ____________ NAV _____________
// ACEDER A CADA "PÁGINA"
// quando se clica no botão de Home, mostra essa e esconde as outras páginas
function displayHome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("add-post").style.display = "none";
  document.getElementById("journey").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("info").style.display = "none";
  document.getElementById("tags").style.display = "none";
  document.getElementById("tree-map").style.display = "none";
  // change images on click
  document.getElementById('img-home').src='images/home-2.jpg';
  document.getElementById('img-add').src='images/add-post.jpg';
  document.getElementById('img-journey').src='images/journey.jpg';
  document.getElementById('img-about').src='images/about.jpg';
  document.getElementById('img-info').src='images/info.jpg';
}
// quando se clica no botão de Add Post, mostra essa e esconde as outras páginas
function displayAddPost() {
  document.getElementById("add-post").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("journey").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("info").style.display = "none";
  document.getElementById("tags").style.display = "none";
  document.getElementById("tree-map").style.display = "none";
  // change images on click
  document.getElementById('img-home').src='images/home.jpg';
  document.getElementById('img-add').src='images/add-post-2.jpg';
  document.getElementById('img-journey').src='images/journey.jpg';
  document.getElementById('img-about').src='images/about.jpg';
  document.getElementById('img-info').src='images/info.jpg';
}
// quando se clica no botão de Journey, mostra essa e esconde as outras páginas
function displayJourney() {
  document.getElementById("journey").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("add-post").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("info").style.display = "none";
  document.getElementById("tags").style.display = "none";
  document.getElementById("tree-map").style.display = "none";
  // change images on click
  document.getElementById('img-home').src='images/home.jpg';
  document.getElementById('img-add').src='images/add-post.jpg';
  document.getElementById('img-journey').src='images/journey-2.jpg';
  document.getElementById('img-about').src='images/about.jpg';
  document.getElementById('img-info').src='images/info.jpg';
}
// quando se clica no botão de About, mostra essa e esconde as outras páginas
function displayAbout() {
  document.getElementById("about").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("add-post").style.display = "none";
  document.getElementById("journey").style.display = "none";
  document.getElementById("info").style.display = "none";
  document.getElementById("tags").style.display = "none";
  document.getElementById("tree-map").style.display = "none";
  // change images on click
  document.getElementById('img-home').src='images/home.jpg';
  document.getElementById('img-add').src='images/add-post.jpg';
  document.getElementById('img-journey').src='images/journey.jpg';
  document.getElementById('img-about').src='images/about-2.jpg';
  document.getElementById('img-info').src='images/info.jpg';
}
// quando se clica no botão de Info, mostra essa página sobre a página em que se estiver
function displayInfo() {
  if (document.getElementById("info").style.display === "none") {
    document.getElementById("info").style.display = "block";
  } else {
  document.getElementById("info").style.display = "none";
  }
  // change images on click
  document.getElementById('img-home').src='images/home.jpg';
  document.getElementById('img-add').src='images/add-post.jpg';
  document.getElementById('img-journey').src='images/journey.jpg';
  document.getElementById('img-about').src='images/about.jpg';
  document.getElementById('img-info').src='images/info-2.jpg';
}

// ____________ FIM NAV _____________




// HOME ________________________________________________

// ______________ ANIMAÇÃO DIÁRIA _______________


setInterval(function () {
 var Today = new Date();
 var H = Today.getHours();

 if (H >= 5 && H < 12 ) {
   document.getElementById("morning").style.display = "block";
   document.getElementById("afternoon").style.display = "none";
   document.getElementById("evening").style.display = "none";
   document.getElementById("night").style.display = "none";
 }

 else if (H >= 12  && H < 17) {
   document.getElementById("afternoon").style.display = "block";
   document.getElementById("morning").style.display = "none";
   document.getElementById("evening").style.display = "none";
   document.getElementById("night").style.display = "none";
  }

  else if (H >= 17  && H < 20) {
    document.getElementById("evening").style.display = "block";
    document.getElementById("morning").style.display = "none";
    document.getElementById("afternoon").style.display = "none";
    document.getElementById("night").style.display = "none";
   }

 else {
   document.getElementById("night").style.display = "block";
   document.getElementById("morning").style.display = "none";
   document.getElementById("afternoon").style.display = "none";
   document.getElementById("evening").style.display = "none";
 } 
 
 /* else if (document.getElementByClassName("huge-viewport").style.display = "block") {
  document.getElementById("morning").style.display = "none";
  document.getElementById("afternoon").style.display = "none";
  document.getElementById("evening").style.display = "none";
  document.getElementById("night").style.display = "none";
 } */

});


// onclick no botão do login, os vídeos voltam todos ao ínicio e fazem play
function playVideo() {
   document.getElementById("morning").currentTime = 0;
   document.getElementById("morning").play();
   document.getElementById("afternoon").currentTime = 0;
   document.getElementById("afternoon").play();
   document.getElementById("evening").currentTime = 0;
   document.getElementById("evening").play();
   document.getElementById("night").currentTime = 0;
   document.getElementById("night").play();
} 


// ______________ FIM ANIMAÇÃO DIÁRIA _______________

// ______________ FRASE INSPIRADORA DIÁRIA _______________
function frase(){
  var d = new Date();
  var n = d.getDay();    //vai buscar o dia
  var titles = ['Detachment is power. Release all things that no longer work for you.','Let your body know that you appreciate it for all the work it does for you.',
   'Find pleasure in things that ground you. ',
   'Move your body for twenty minutes each day. Walk, stretch, dance. Do whatever makes you feel good.',
   'Throughout the day, take moments to check in with yourself. Ask yourself: how is my body? how is my heart? how is my mind?',
   'Spend ten minutes each day learning something new. Read a book. Listen  to a podcast. Research something that lights you up.',
   'Can you create space to allow the things you’re passionate about to thrive?'];     //variavel com o array de frases que queremos usar
  document.getElementById("daily-inspo").innerHTML = titles[n-1]; //vai retirando cada frase e substitui pela proxima
  }

  frase(); 
// ______________ FIM FRASE INSPIRADORA DIÁRIA _______________


 
// ADD POST ___________________________________________
// quando se clica no botão X (fechar add post), esconde a página add post e volta à home
function closeAddPost() {
  document.getElementById("add-post").style.display = "none";
  document.getElementById("home").style.display = "block";
}

// ao clicar SAVE vai para topo da página
function gotop() {
  $(window).scrollTop(0);
}

// quado se clica SAVE limpa conteúdo caixas input
/* function clearInput() {
  $('#today').val('');
  $('#prompt').val('');
  $('#favourites').val('');
  // volta a background color branco
  $('#entry').css({'background-color':'white'});
} */

/* text area - adaptação da caixa à quantidade de texto */
const textareas = document.getElementsByTagName("textarea");
for (let i = 0; i < textareas.length; i++) {
  textareas[i].setAttribute("style", "height:" + (textareas[i].scrollHeight) + "px;overflow-y:hidden;");
  textareas[i].addEventListener("input", changeHeight, false);
}
function changeHeight() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}


// _____________ GET DATE (DD-MM-YYYY)  ______________

var today = new Date();
/* o getDate() devolve o dia do mês (entre 1 e 31) para a data específica em local time */
var dd = today.getDate();

/* o getMonth() devolve o mês para a data específica em local time (entre 0 e 11, em que 0 corresponde a Janeiro, 1 a Fevereiro, etc)
*/
var mm = today.getMonth()+1; 

/* o getFullYear() devolve o ano para a data específica em local time, num número absoluto de quatro dígitos entre os anos 1000 e 9999 */
var yyyy = today.getFullYear();

/* se o dia do mês for menor que o dia 10 (por exemplo dia 8), acrescenta um 0 antes (ex: 08) */
if(dd<10) 
{
    dd='0'+dd;
} 
/* se o número do mês for menor que 10 (por exemplo agosto mês 8), acrescenta um 0 antes (ex: 08) */
if(mm<10) 
{
    mm='0'+mm;
} 

/* display da data de hoje no formato dd-mm-yyyy */
today = dd+'-'+mm+'-'+yyyy;
document.getElementById("date").innerHTML = today;


/* GET WEEKDAY */
const weekday = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];

/* o getDay() devolve o dia da semana de 0 a 6 */
const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("weekday").innerHTML = day;

// _____________ FIM GET DATE (DD-MM-YYYY)  ______________


// ________ DAILY PROMPT _________
function dailyPrompt(){
  var d = new Date();
  var n = d.getDay();
  var prompts = ['What part of your day did you most enjoy? ',
   'Did any part of your day cause stress, frustration, or sadness? What can you do to change those experiences? ',
    'What three ordinary things brought you the most joy today? ',
   'Describe two or three things you can do to relax today.',
   'What aspects of your daily life are you most grateful for?',
   'Have you made time for yourself today? List three things that feel like self-care to you... and get on your way!',
   'List three things you can see, hear, smell and touch in this moment. If you want to, describe how those made you feel. '];
  document.getElementById("prompt-question").innerHTML = prompts[n-1];
  }

  dailyPrompt(); 
// ________ FIM DAILY PROMPT _________


// __________ CHANGE BG COLOR FOR EACH MOOD ___________

function changeColorFantastic() {
  // document.querySelector(":root").style.setProperty('--background-color', '#66FF88');
	document.getElementById("add-post").style.setProperty('--background-color', '#66FF88');
}

function changeColorInspiring() {
	document.getElementById("add-post").style.setProperty('--background-color', '#DFCCFF');
}

function changeColorFrustrating() {
	document.getElementById("add-post").style.setProperty('--background-color', '#FD7B52');
}

function changeColorSad() {
	document.getElementById("add-post").style.setProperty('--background-color', '#8189D1');
}

function changeColorGood() {
	document.getElementById("add-post").style.setProperty('--background-color', '#FCFF66');
}

function changeColorOrdinary() {
	document.getElementById("add-post").style.setProperty('--background-color', '#B7F2EB');
}

function changeColorStressed() {
	document.getElementById("add-post").style.setProperty('--background-color', '#FF461E');
}

function changeColorAnxious() {
	document.getElementById("add-post").style.setProperty('--background-color', '#446CD1');
}

function changeColorTiring() {
	document.getElementById("add-post").style.setProperty('--background-color', '#E3E3E3');
}
// __________ FIM CHANGE BG COLOR FOR EACH MOOD ___________



// ————————————————————————————————————————————————————
/* POSTS INTERACTION */

// check for jquery
$(function () {
  console.log("hello jquery!");

  // you might want to consider displaying all previously saved posts on page load
  displayAllPosts();
});

// ——————————————————————————————————————————————————————— save single function (deprecated)
// add post listener behaviour
//$("#entry button").on("click", saveOnePost);

function saveOnePost() {
  // get the user input inside the field
  let conteudo = $("#today").val();
  let conteudo2 = $("#prompt").val();
  let conteudo3 = $("#favourites").val();
  console.log("o valor é: ", conteudo);
  console.log("o valor é: ", conteudo2);
  console.log("o valor é: ", conteudo3);

  // save just this one item/string to localStorage
  // this replaces whatever is already there
  localStorage.setItem("posts", conteudo);
  localStorage.setItem("posts", conteudo2);
  localStorage.setItem("posts", conteudo3);
}

// add clear memory/storage listener behaviour
 $("#clear").on("click", function () {
  localStorage.clear();
}); 

// ——————————————————————————————————————————————————————— simple display functions (deprecated)
// add list entries listener behaviour
//$("#blog button").on("click", displayPost);

function displayPost() {
  console.log("a ler os posts…");
  // reads whatever is saved in the "drawer" called "posts" from localStorage
  let conteudo = localStorage.getItem("posts");
  console.log(conteudo);
  let conteudo2 = localStorage.getItem("posts");
  console.log(conteudo2);
  let conteudo3 = localStorage.getItem("posts");
  console.log(conteudo3);

  // create a new HTML element
  let elemento;

  // use template literals and jQuery to quickly create an element
  // notice the difference between `(acento grave) and '(quote)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  elemento = $(`<article>
                    <p>${conteudo}</p>
                    <p>${conteudo2}</p>
                    <p>${conteudo3}</p>
                </article>`);

  console.log(elemento);

  // place the new element on screen (inside the correct HTML element target)
  $("#journey div").append(elemento);
}

// ——————————————————————————————————————————————————————— Save (add) post function
$("#save").on("click", saveForStorage);

function saveForStorage() {
  // vamos precisar de uma lista de posts (nova, ou popular uma lista nova com os posts que já existem na memória)
  let posts;

  // e de um post (o novo) para gravar na lista
  let post;

  // let promptq;
  // promptq = document.getElementById("prompt-question");


  // vamos criar um objeto com conteúdo novo
  // a partir do input de utilizador
  // primeiro, ler o conteúdo que o utilizador inseriu
  let m = document.getElementById("date").innerHTML = today;
  let w = document.getElementById("weekday").innerHTML = day;
  let c = $("#today").val();
  // Daily prompt
  let d = $("#prompt").val();
  // Today's favourites/discoveries
  let f = $("#favourites").val();
  let e = $("#entry select").val(); 
  let t = $("#entry option:selected").text();
  let p = $("#prompt-question").text();


  // cria o objeto com os conteudos
  post = {
    date: m,
    weekday: w,
    moodname: t,
    conteudo: c,
    promptq: p,
    conteudo2: d,
    conteudo3: f,
    mood: e,
  };


  // console.log(post);

  // depois ler o que está na gaveta da memória em localStorage
  //... primeiro é preciso ver se existe alguma coisa na memória…
  if (localStorage.getItem("posts") != null) {
    // se existe, ler o local storage… que devolve um string enorme, lembram-se?…
    let JSONposts = localStorage.getItem("posts");

    // transforma o mega string numa variável… que é uma lista [array] de objetos {propriedade: valor, outraPropriedade: valor}, algo assim [{1}, {2}, {etc}]
    posts = JSON.parse(JSONposts);

    // não esquecer que esta variável "posts" é um array = [ {texto: array} {texto: de} {array: objetos} ]

  } else {

    // se localStorage == null, então ainda nao gravamos nada (AKA "first-run")
    // precisamos de criar este array… vazio…
    posts = [];
  }

  // ao clicar em save, esconde a página add post e mostra a journey
  document.getElementById("add-post").style.display = "none";
  document.getElementById("journey").style.display = "block";


  // quer exista com posts, quer esteja vazia
  // acrescenta um post novo ao fim do array/lista de posts com o post novo
  posts.push(post);
  //posts.reverse(post);
  

  // prepara para gravar a lista de novo (transforma o array de objetos numa string enorme de texto e…)
  let JSONposts = JSON.stringify(posts);

  // grava…
  localStorage.setItem("posts", JSONposts);

  // you might want to consider showing the new post immediatelly
  displayAllPosts();

  // you may interact/call the p5js sketch functions from here also… afterall… it's all JS ;)
  setup();

}


// ——————————————————————————————————————————————————————— Show/display all posts function
// add list/display all entries listener behaviour
/* $("#nav-content button").on("click", displayAllPosts); */
// $("#nav-content button").on("click", "window.open('journey.html')");

function displayAllPosts() {
  // antes de fazer append… "limpa" todos os posts que podem estar dentro do DIV de "blog" // <-- no futuro, modificar isto para "contar" o que já está e apenas fazer append dos novos
  // $("#blog div").html("");

  // ler o local storage
  let posts;

  // se o storage estiver vazio
  if (localStorage.getItem("posts") == null) {
    console.log("ups… nothing to see here");

    // escreve uma mensagem (call for action)
    $("#journey div").html(`<div class="no-posts-box"><p class="no-posts1">Your journey archive looks empty...</p><p class="no-posts2">Why not write your first entry now? :)</p><p class="no-posts3">Click on the plus icon below to add a new post!</p></div>`);

    // esconde o nav da journey
    // document.getElementById("flex-jnav").style.display = "none";

  } else { // se não estiver vazio
    
    // limpa a mensagem
    $("#journey div").html("");

    // revela o nav da journey
    // document.getElementById("flex-jnav").style.display = "fixed";

    // lê os posts do storage
    let JSONposts = localStorage.getItem("posts");

    // remember to parse the items into an array of objects
    posts = JSON.parse(JSONposts);

    // reverter a ordem em que os posts são submetidos (para aparecerem os mais recentes no topo)
    let revposts = posts.reverse();

    // para cada entry (cada novo post submetido) é criada uma variável com o conteúdo do array chamado post
    revposts.forEach(function (post, index) {
      let el = $(`
                    <article onclick="expandPost()" class="each-post" id="post${index}" style="background-color:${post.mood}">
                  
                        <p class="date-week">${post.date} | ${post.weekday}</p>
                        <p class="mood-name" style="font-family:${post.moodname}">${post.moodname}</p>
                        <p class="p-conteudo">${post.conteudo}</p>
                        <p class="p-prompt" style="font-family:${post.moodname}">${post.promptq}</p>
                        <p class="p-conteudo">${post.conteudo2}</p>
                        <p class="p-favs" style="font-family:${post.moodname}">TODAY'S FAVOURITES / DISCOVERIES</p>
                       
                        <p class="p-conteudo">${post.conteudo3}</p> 
                                    
                    </article>
                `);
                
      // no html faz append de cada post          
      $("#journey div").append(el);


      /* <p class="p-prompt" style="font-family:${post.moodname}">${post.promptq}</p> */
    
      /* let colorposts = [];

      posts.forEach(function (post) {
          if (post.mood == "#FCFF66") {
            colorposts.push(post);
          }
      });  */

    });
  }
}



// _____________ LAST POSTS  ______________

function recentPosts(){
  let JSONposts = localStorage.getItem("posts");
  posts = JSON.parse(JSONposts);
  // array de posts odenados
  let revposts = posts.reverse();
  /*Post 1*/
  // cria uma div com cor, data e nome do post nº0
  let lastpost0 = $(`<div class="last-posts" style="background-color:${revposts[0].mood}">
  <p> ${revposts[0].date} </p>
  <h2 style="font-family:${revposts[0].moodname}"> ${revposts[0].moodname}</h2>
  </div>"`);
  // no html faz append da div criada
  $("#recent-posts").append (lastpost0);
  /*Post 2*/
  let lastpost1 = $(`<div class="last-posts" style="background-color:${revposts[1].mood}">
  <p> ${revposts[1].date} </p>
  <h2 style="font-family:${revposts[1].moodname}"> ${revposts[1].moodname} </h2>
  </div>"`);
  $("#recent-posts").append (lastpost1);
  }
  // corre sempre a função
  recentPosts();

// _____________ FIM LAST POSTS  ______________



// ___________ ABA FILTER BY ____________ 

function displayTags() {
  document.getElementById("tags").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("add-post").style.display = "none";
  document.getElementById("journey").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("info").style.display = "none";
}


// let colorbuttons = $("#tags button");

/* let colorbuttons = $("#tags button").val();
// let colorbuttons = document.getElementsById("tags").val();
let colorposts = []; */

/* $("#tags button").click(function(){ 
  let colorbuttons = $(this).val();
  posts.forEach(function (post) {
    if (post.mood == colorbuttons) {
      colorposts.push(post);
    }
  })
}); */


/* function filterMood() {
  posts.forEach(function (post, index) {
    if (post.mood == colorbuttons) {
      colorposts.push(post);
    }
  })
}; */


// ___________ FIM ABA FILTER BY ____________ 

// ___________ TREE MAP ____________

// botão mood map
function displayTreeMap() {
  document.getElementById("tree-map").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("add-post").style.display = "none";
  document.getElementById("journey").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("info").style.display = "none";
  document.getElementById("tags").style.display = "none";
}








/* for (let i = 0; i < color1.length; i++) {
  if (post.mood == "#66FF88") {
    console.log(color1[i]);
  }
} */

/* function saberColor1() {
  posts.forEach(function (post) {
    if (post.mood == "#66FF88") {
     color1.console.log(post);
     item1 = "800px"
    }
  })
}; */




/* function filterMood() {
  posts.forEach(function (post, index) {
    if (post.mood == colorbuttons) {
      colorposts.push(post);
    }
  })
}; */


// ___________ FIM TREE MAP ____________


// quando se clica no botão de save, aplica esta função, que limpa a caixa de input, mas deixa o placeholder da primeira pergunta
/* function clearInput()
{      
     $("#entry input").each(function () {
   $(this).val("");
         x=1;
    });
        $("#entry input").first().focus();          

} */



/* function hugeViewport(x) {
  if (x.matches) { // If media query matches
    $("#huge-viewport").style.display = "block";
  } else {
    $("#huge-viewport").style.display = "none";
  }
}

var x = window.matchMedia("(min-width: 600px)")
hugeViewport(x) // Call listener function at run time
x.addEventListener(hugeViewport) // Attach listener function on state changes */




// tree map de moods
// variável para valor de tamanho da flex
let size1 = $("#grid-item-1").style.flex();

// valor da variável
// teste com valor real
size1 = "10%";

// valor da variável = nºde post com a cor verde




