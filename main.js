// JAVASCRIPT FILE 

  /*
  Ana Leite | Marta Marques | Sofia Bento
  WD2 | Projeto 2 - 12.01.2022
  */

// verificar se JS está conectado
console.log ('on the way');


// BODY _____________________________________________________

// LAUNCH SCREEN
const launch_mp4 = document.querySelector('.launch');
// mostrar a animação apenas durante 1200 milisegundos 
function launch() {
  setTimeout (function () {
    launch_mp4.style.display="none";
  }, 1200);
} 

// ____________ LOGIN SCREEN _____________
const login = document.getElementById("login");
const home = document.getElementById("home");
const login_btn = document.getElementById("login_btn");

// close login on click
function login_screen() {
  if (login.style.display == 'none') {
      login.style.display = 'block';
  } else {
      login.style.display = 'none';
  }
}

// save input name
function saveName() {
  // guarda o "valor" inserido no nome numa variável
  let yourname = document.getElementById("user_name").value;
  // escreve no HTML o nome inserido
  document.getElementById("your_name").innerText = `${yourname}`;
} 
// ____________ FIM LOGIN SCREEN _____________


// ____________ NAV _____________
// ACEDER A CADA "PÁGINA"
// quando se clica no botão de Home, mostra essa página e esconde as outras
function displayHome() {
  // escrito por extenso porque JQuery não estava a funcionar
  document.getElementById("home").style.display = "block";
  document.getElementById("add-post").style.display = "none";
  document.getElementById("journey").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("info").style.display = "none";
  document.getElementById("tags").style.display = "none";
  document.getElementById("tree-map").style.display = "none";
  // muda as imagens do nav
  document.getElementById('img-home').src='images/home-2.jpg';
  document.getElementById('img-add').src='images/add-post.jpg';
  document.getElementById('img-journey').src='images/journey.jpg';
  document.getElementById('img-about').src='images/about.jpg';
  document.getElementById('img-info').src='images/info.jpg';
}

// quando se clica no botão de Add Post, mostra essa página e esconde as outras
function displayAddPost() {
  document.getElementById("add-post").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("journey").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("info").style.display = "none";
  document.getElementById("tags").style.display = "none";
  document.getElementById("tree-map").style.display = "none";
  // muda as imagens do nav
  document.getElementById('img-home').src='images/home.jpg';
  document.getElementById('img-add').src='images/add-post-2.jpg';
  document.getElementById('img-journey').src='images/journey.jpg';
  document.getElementById('img-about').src='images/about.jpg';
  document.getElementById('img-info').src='images/info.jpg';
}

// quando se clica no botão de Journey, mostra essa página e esconde as outras
function displayJourney() {
  document.getElementById("journey").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("add-post").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("info").style.display = "none";
  document.getElementById("tags").style.display = "none";
  document.getElementById("tree-map").style.display = "none";
  // muda as imagens do nav
  document.getElementById('img-home').src='images/home.jpg';
  document.getElementById('img-add').src='images/add-post.jpg';
  document.getElementById('img-journey').src='images/journey-2.jpg';
  document.getElementById('img-about').src='images/about.jpg';
  document.getElementById('img-info').src='images/info.jpg';
}

// quando se clica no botão de About, mostra essa página e esconde as outras
function displayAbout() {
  document.getElementById("about").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("add-post").style.display = "none";
  document.getElementById("journey").style.display = "none";
  document.getElementById("info").style.display = "none";
  document.getElementById("tags").style.display = "none";
  document.getElementById("tree-map").style.display = "none";
  // muda as imagens do nav
  document.getElementById('img-home').src='images/home.jpg';
  document.getElementById('img-add').src='images/add-post.jpg';
  document.getElementById('img-journey').src='images/journey.jpg';
  document.getElementById('img-about').src='images/about-2.jpg';
  document.getElementById('img-info').src='images/info.jpg';
}

// quando se clica no botão de Info, mostra essa página sobre a página que estiver aberta
function displayInfo() {
  // se o balão não estiver a ser mostrado, mostra; e vice-versa
  if (document.getElementById("info").style.display === "none") {
    document.getElementById("info").style.display = "block";
  // muda a imagem do nav
    document.getElementById('img-info').src='images/info-2.jpg';
  } else {
    document.getElementById("info").style.display = "none";
    document.getElementById('img-info').src='images/info.jpg';
  }
  // muda as imagens do nav
    document.getElementById('img-home').src='images/home.jpg';
    document.getElementById('img-add').src='images/add-post.jpg';
    document.getElementById('img-journey').src='images/journey.jpg';
    document.getElementById('img-about').src='images/about.jpg';
}
// ____________ FIM NAV _____________




// HOME ________________________________________________

// ______________ ANIMAÇÃO DIÁRIA _______________
// animação para cada momento do dia
setInterval(function () {
//método para data do dia
 let Today = new Date();
 let H = Today.getHours();
// morning: entre as 5h e as 12h
 if (H >= 5 && H < 12 ) {
   document.getElementById("morning").style.display = "block";
   document.getElementById("afternoon").style.display = "none";
   document.getElementById("evening").style.display = "none";
   document.getElementById("night").style.display = "none";
 }
//afternoon: entre as 12h e as 17h
 else if (H >= 12  && H < 17) {
   document.getElementById("afternoon").style.display = "block";
   document.getElementById("morning").style.display = "none";
   document.getElementById("evening").style.display = "none";
   document.getElementById("night").style.display = "none";
  }
//evening: entre as 17h e as 20h
  else if (H >= 17  && H < 20) {
    document.getElementById("evening").style.display = "block";
    document.getElementById("morning").style.display = "none";
    document.getElementById("afternoon").style.display = "none";
    document.getElementById("night").style.display = "none";
   }
//night: entre as 20h e as 5h
 else {
   document.getElementById("night").style.display = "block";
   document.getElementById("morning").style.display = "none";
   document.getElementById("afternoon").style.display = "none";
   document.getElementById("evening").style.display = "none";
 } 

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
  let d = new Date();
  // método para a data de hoej
  let n = d.getDay();  
  // variável com array de frases 
  let titles = ['Detachment is power. Release all things that no longer work for you.','Let your body know that you appreciate it for all the work it does for you.',
   'Find pleasure in things that ground you. ',
   'Move your body for twenty minutes each day. Walk, stretch, dance. Do whatever makes you feel good.',
   'Throughout the day, take moments to check in with yourself. Ask yourself: how is my body? how is my heart? how is my mind?',
   'Spend ten minutes each day learning something new. Read a book. Listen  to a podcast. Research something that lights you up.',
   'Can you create space to allow the things you’re passionate about to thrive?'];     
  //corre as frases da array para cada dia
   document.getElementById("daily-inspo").innerHTML = titles[n]; 
  }
  // inicia a função
  frase(); 
// ______________ FIM FRASE INSPIRADORA DIÁRIA _______________


 
// ADD POST ___________________________________________
// quando se clica no botão X (fechar add post), esconde a página add post e volta à home
function closeAddPost() {
  document.getElementById("add-post").style.display = "none";
  document.getElementById("home").style.display = "block";
  // muda as imagens do nav
  document.getElementById('img-home').src='images/home-2.jpg';
  document.getElementById('img-add').src='images/add-post.jpg';
  document.getElementById('img-journey').src='images/journey.jpg';
  document.getElementById('img-about').src='images/about.jpg';
}

// ao clicar SAVE vai para topo da página
function gotop() {
  $(window).scrollTop(0);
}

/* TENTATIVA
//quado se clica SAVE limpa conteúdo caixas input
ao limpar o conteúdo das caixas perdem-se as informações guardadas
function clearInput() {
  // limpa "value" das caixas inseridas
  $('#today').val('');
  $('#prompt').val('');
  $('#favourites').val('');
  // volta ao background branco
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
  let d = new Date();
  let n = d.getDay();
  let prompts = ['What part of your day did you most enjoy? ',
   'Did any part of your day cause stress, frustration, or sadness? What can you do to change those experiences? ',
    'What three ordinary things brought you the most joy today? ',
   'Describe two or three things you can do to relax today.',
   'What aspects of your daily life are you most grateful for?',
   'Have you made time for yourself today? List three things that feel like self-care to you... and get on your way!',
   'List three things you can see, hear, smell and touch in this moment. If you want to, describe how those made you feel. '];
  document.getElementById("prompt-question").innerHTML = prompts[n];
  }
  dailyPrompt(); 

// ________ FIM DAILY PROMPT _________


// __________ CHANGE BG COLOR FOR EACH MOOD ___________

function changeColorFantastic() {
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
  // display de todos os posts on load da página 
  displayAllPosts();
});

// ——————————————————————————————————————————————————————— 

function saveOnePost() {
  // vai buscar o valor inserido pelo utilizador
  let conteudo = $("#today").val();
  let conteudo2 = $("#prompt").val();
  let conteudo3 = $("#favourites").val();
  console.log("o valor é: ", conteudo);
  console.log("o valor é: ", conteudo2);
  console.log("o valor é: ", conteudo3);

  // salva os valores na localStorage
  localStorage.setItem("posts", conteudo);
  localStorage.setItem("posts", conteudo2);
  localStorage.setItem("posts", conteudo3);
}

// ———————————————————————————————————————————————————————

function displayPost() {
  console.log("a ler os posts…");
  // lê o que está salvo na gaveta "posts" da localStorage
  let conteudo = localStorage.getItem("posts");
  console.log(conteudo);
  let conteudo2 = localStorage.getItem("posts");
  console.log(conteudo2);
  let conteudo3 = localStorage.getItem("posts");
  console.log(conteudo3);

  // cria um novo elemento no HTML
  let elemento;

  // cria um "article" para inserir o conteúdo dos posts 
  elemento = $(`<article>
                    <p>${conteudo}</p>
                    <p>${conteudo2}</p>
                    <p>${conteudo3}</p>
                </article>`);

  console.log(elemento);

  // insere o "elemento" no HTML
  $("#journey div").append(elemento);
}

// ——————————————————————————————————————————————————————— Save / add post
$("#save").on("click", saveForStorage);

function saveForStorage() {
  // cria uma lista de posts
  let posts;

  // um novo post para gravar na lista
  let post;

  // lê o conteúdo que o utilizador inseriu
  let m = document.getElementById("date").innerHTML = today;
  let w = document.getElementById("weekday").innerHTML = day;
  // nome do mood
  let t = $("#entry option:selected").text();
  // resposta texto livre
  let c = $("#today").val();
  // Daily prompt
  let p = $("#prompt-question").text();
  let d = $("#prompt").val();
  // resposta favoritos
  let f = $("#favourites").val();
  // cor
  let e = $("#entry select").val(); 

 

  // cria o objeto com os conteúdos
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

  // se existem posts na localStorage, lê o conteúdo
  if (localStorage.getItem("posts") != null) {

    let JSONposts = localStorage.getItem("posts");

    // transforma o conteúdo numa array variável
    posts = JSON.parse(JSONposts);

  } else {
    // se a localStorage está vazia, cria array vazio
    posts = [];
  }

  // ao clicar em save, esconde a página add post e mostra a journey
  document.getElementById("add-post").style.display = "none";
  document.getElementById("journey").style.display = "block";

  // e muda o icon selecionado para o icon da journey
  document.getElementById('img-home').src='images/home.jpg';
  document.getElementById('img-add').src='images/add-post.jpg';
  document.getElementById('img-journey').src='images/journey-2.jpg';
  document.getElementById('img-about').src='images/about.jpg';
  document.getElementById('img-info').src='images/info.jpg';

  // quer existam posts, quer esteja vazia, acrescenta um post novo ao fim do array/lista de posts com o post novo
  posts.push(post);

  // gravar a lista de novo
  let JSONposts = JSON.stringify(posts);

  localStorage.setItem("posts", JSONposts);

  displayAllPosts();

}


// ————————————————————————————————————————————————— 

function displayAllPosts() {

  // lê o local storage
  let posts;

  // se o storage estiver vazio
  if (localStorage.getItem("posts") == null) {
    console.log("ups… nothing to see here");
    // se não estiver vazio
  } else { 
    // limpa a mensagem
    $("#journey div").html("");

    // lê os posts do storage
    let JSONposts = localStorage.getItem("posts");

    posts = JSON.parse(JSONposts);

    // reverter a ordem em que os posts são submetidos (para aparecerem os mais recentes no topo)
    let revposts = posts.reverse();

    // para cada entry (cada novo post submetido) é criada uma variável com o conteúdo do array chamado post
    // cria um "article" no HTML com os conteúdos inseridos pelo utilizador
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
                
      // faz append no HTML do "el" ("article") de cada post          
      $("#journey div").append(el);

    });
  }
}

// _________ ALERT BOX CLEAR STORAGE __________
function openAlert() {
  document.getElementById("clear-alert").style.display = "block";
}

function closeAlert() {
  document.getElementById("clear-alert").style.display = "none";
}

function refreshJourney() {
  $('#journey').load(document.URL +  ' #journey');
}

// faz clear storage de todos os posts na journey
function clearStorage() {
  localStorage.clear();
}


// _____________ LAST POSTS  ______________

function recentPosts(){
  // acede à localStorage
  let JSONposts = localStorage.getItem("posts");
  posts = JSON.parse(JSONposts);
  // array de posts ordenados, a partir de 0, 1, 2...
  let revposts = posts.reverse();

  /*Post 1 = nº0 da array*/
  // cria uma div com cor, data e nome do post nº0
  let lastpost0 = $(`<div class="last-posts" style="background-color:${revposts[0].mood}">
  <p> ${revposts[0].date} </p>
  <h2 style="font-family:${revposts[0].moodname}"> ${revposts[0].moodname}</h2>
  </div>"`);
  // no html faz append da div criada
  $("#recent-posts").append (lastpost0);

  /*Post 2 = nº1 da array*/
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
// tags de moods
function displayTags() {
  document.getElementById("tags").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("add-post").style.display = "none";
  document.getElementById("journey").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("info").style.display = "none";
  document.getElementById("tree-map").style.display = "none";
}

// TENTATIVA: filtrar posts por mood

// array com os posts
/* let colorposts = [];
let button = $("#button")

// para cada post
posts.forEach(function (post) {
  // se a cor do post for = à cor do botão clicado
  if (post.mood == button.value) {
    //"puxa" esses posts
    colorposts.push(post);
  } 
  // cria condição para cada cor de post
  if (post.mood == ... ) {
    colorposts.push(post);
    ...
  }
});  */

// ___________ FIM ABA FILTER BY ____________ 


// ___________ MOOD MAP (TREE MAP) ____________

// formas correspondentes a cada mood
function displayTreeMap() {
  document.getElementById("tree-map").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("add-post").style.display = "none";
  document.getElementById("journey").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("info").style.display = "none";
  document.getElementById("tags").style.display = "none";
}

// TENTATIVA
// mudar o tamanho da flex de cada icon, de acordo com o número de posts do mood correspondente
/*
// variável para valor de tamanho de cada flex
let sizeIcon1 = $("#grid-item-1").style.flex();
let sizeIcon2 = $("#grid-item-2").style.flex();
let sizeIcon3 = $("#grid-item-3").style.flex();
let sizeIcon4 = $("#grid-item-4").style.flex();
let sizeIcon5 = $("#grid-item-5").style.flex();
let sizeIcon6 = $("#grid-item-6").style.flex();
let sizeIcon7 = $("#grid-item-7").style.flex();
let sizeIcon8 = $("#grid-item-8").style.flex();
let sizeIcon9 = $("#grid-item-9").style.flex();

// variável "postsVerdes" = array de posts verdes
let postsVerdes = post.mood ("#66FF88");

// tamanho em percentagem da flex = (número total de posts verdes x 100 (percentagem)) / número total de posts
sizeIcon1 = calc("postsVerdes.length"*100)/posts.length; 

// repetir para cada cor
*/
// ___________ FIM MOOD MAP ____________
