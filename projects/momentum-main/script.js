import dataJson from './quotes.json' assert { type: "json" };

//2. add name user
let myStorage = window.localStorage;
if(myStorage.name == undefined || myStorage.name === 'null'){
  let name = prompt("Ваше имя?", "");
  localStorage.setItem('name', name);
  localStorage.setItem('city', 'Minsk');
}

//1. clock + time

let dt = new Date();

  let moun = dt.getDate()+" "+  dataJson.mounths[dt.getMonth()];
  let tiday ='';

  function currentTime(date) {
    var date = new Date();
    let weekd = date.getDay();
     
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    
    document.querySelector('.weekDay').innerText = `${moun}, ${dataJson.dayOfWeek[weekd]}`;
    document.querySelector('.ti').innerText = `${hour}:${min}:${sec}`; 

    tiday = (hour>5 && hour<12)? "morning" : (hour>=12 && hour<18)? "afternoon": (hour>=18 && hour<24)? "evening" : "night";
    document.querySelector('.pmDay').innerText = `${dataJson.timedayword[tiday]}, ${myStorage.name}!`;

    var t = setTimeout(function(){ currentTime() }, 1000); 
  }

  function updateTime(k) {
    return (k < 10)? "0" + k: k;
  }
  currentTime();

//4.quote 
  let quoteText = document.getElementById('q-text');
  let quoteAuthor =  document.getElementById('q-author');

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function nextQuote() {
    let qObj = dataJson.quits[getRandomInt(dataJson.quits.length)];
    quoteText.innerHTML = qObj.text;
    quoteAuthor.innerHTML = qObj.autor;
  }

  document.querySelector('.upquote').addEventListener('click', nextQuote);

  nextQuote();

//3. gallery
let nextFon = document.querySelector('.next-fon');
let prevFon = document.querySelector('.prev-fon');
let mimgs = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/'+tiday+'/';

let mim = document.createElement('img');
mim.src = mimgs+'18.jpg'; // (*)

mim.onload = function() {
  document.body.style.backgroundImage = 'url('+mimgs+'18.jpg)';
};


function next_Fon(){
  let ti = +document.body.style.backgroundImage.split('/').reverse()[0].split('.')[0];
  ti = (ti+1<21)? ti+1: 1;
  if(ti<10){ ti = '0'+ti;}
  changeFon(ti);
  let mim = document.createElement('img');
  // mim.src = ''+mimgs+(ti)+'.jpg';
  // mim.onload = function() {
  //   document.body.style.backgroundImage = `url(${mim.src})`;
  // };
  
}

function prev_Fon(){
  let ti = +document.body.style.backgroundImage.split('/').reverse()[0].split('.')[0];
  ti = (ti==1)?20: ti-1;
  if(ti<10){ ti = '0'+ti;}
  changeFon(ti);
  // let mim = document.createElement('img');
  // mim.src = ''+mimgs+(ti)+'.jpg';
  // mim.onload = function() {
  //   document.body.style.backgroundImage = `url(${mim.src})`;
  // };
}

function changeFon(srr){

  let mim = document.createElement('img');
  mim.src = ''+mimgs+(srr)+'.jpg';
  mim.onload = function() {
    document.body.style.backgroundImage = `url(${mim.src})`;
  };
}
nextFon.addEventListener('click', next_Fon);
prevFon.addEventListener('click', prev_Fon);

///gallery work!!!!!!!!!!!!!!!!!))))))))))))

//5.audio 
let naudi = document.getElementById('audio');
let btnPlay = document.querySelector(".play");   
let btnPause = document.querySelector(".pause"); 
let btnPrev = document.querySelector(".prev");   
let btnNext = document.querySelector(".next"); 

let playlist =['Minor.mp3', 'Papercut.mp3','Sad.mp3','Sia.mp3'];
let treck = 0;
//эл класса songs
var sl = document.querySelector(".songs");
document.querySelector('.nametrak').innerHTML = "трек: "+naudi.src.split("/").reverse()[0];

//endchek
function switchTreck (numTreck=treck) {
  naudi.src =  'song/'+playlist[numTreck];
  //name trak
  document.querySelector('.nametrak').innerHTML = "трек: "+naudi.src.split("/").reverse()[0];
  naudi.currentTime = 0;
  naudi.play();
  btnPlay.innerHTML = "||";
  //зануляем классы 
  for(let i = 0; i< playlist.length; i++){
    console.log(sl.children[i]);
    sl.children[i].children[0].innerHTML="|>";
    sl.children[i].classList.remove('check');
  }
  // добовляем check к нужному
  sl.children[numTreck].classList.add('check');
  sl.children[numTreck].children[0].innerHTML="||";
}

//treck перемотка
let y = document.querySelector('.rangtrak');
y.onchange = function(){
    naudi.currentTime =(this.value * audioLength)/100;
}

btnPlay.addEventListener("click", playpaus);
let audioTime = 0;
let audioLength = 0;
let timenow = 0;
function playpaus() {
  if(naudi.paused){
    naudi.play();
    audioPlay = setInterval(function() {
      audioTime = Math.round(naudi.currentTime);// Получаем всё время песни
      audioLength = Math.round(naudi.duration);  // Назначаем ширину элементу time

      timenow = Math.round(audioTime/60)+":"+audioTime%60;
      document.querySelector('.timenow').innerHTML = timenow;

      let timeend = Math.round(audioLength/60)+":"+audioLength%60;
      document.querySelector('.timeend').innerHTML = timeend;

      y.value = (audioTime * 100) / audioLength;

     if(naudi.ended && treck < 3){
        treck++; 
          switchTreck(treck); 
      } else if (naudi.ended && treck >= 3) {
        treck = 0; 
          switchTreck(treck); 
      }
  }, 10);
    btnPlay.innerHTML = "||";
    sl.children[treck].children[0].innerHTML="||";
    
  }else{
    naudi.pause();
    btnPlay.innerHTML = "|>";
    sl.children[treck].children[0].innerHTML="|>";
    clearInterval(audioPlay);
  } 
};

//prev song
btnPrev.addEventListener("click", function() {
  if (treck > 0) {
      treck--; 
      switchTreck(treck); 
  } else { 
      treck = 3; 
      switchTreck(treck); 
  }
});
//next song
btnNext.addEventListener("click", function() {
  if (treck < 3) { 
      treck++; 
      switchTreck(treck); 
  } else { 
      treck = 0; 
      switchTreck(treck); 
  }
});

//звук  вкл/выкл
naudi.muted = false;
let imsound = document.querySelector('.sou');

document.querySelector('.inn').addEventListener('click', function(){
  naudi.muted = (naudi.muted === true)? false: true;
  imsound.src = (naudi.muted === true)? 'images/off_sound.svg' : 'images/on-speaker.svg ';
});
//звук громкость
var range = document.getElementById('range');
range.onchange = function(){
    naudi.volume = (this.value/100).toFixed(1);
  console.log(naudi.volume);
}

//5.weather
let city = localStorage.city;
let apiKey = '6ea365e2b36f4c8c54c0a446ec8c1e69';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;

let butOk = document.querySelector('.ok');
let citych = document.querySelector('.inp');
let nam = document.querySelector('.city');

async function newweather(cit){
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}&units=metric`
  await axios.get(url).then(res => {
      document.querySelector('.city').innerHTML = res.data.name
      document.querySelector('.temp').innerHTML = Math.ceil(res.data.main.temp);
      document.querySelector('.humidity').innerHTML = res.data.main.humidity
      document.querySelector('.wind').innerHTML = (res.data.wind.speed*1000/3600).toFixed(0);
      citych.value = "";

      localStorage.setItem('city', cit);
      document.querySelector('.error').innerHTML ="";
  }).catch(function (error){
      document.querySelector('.error').innerHTML = `неверный город ${cit}`;
      citych.value = "";
  })   
}

butOk.addEventListener('click', ()=>{
  city = citych.value; 
  newweather(city);
})

newweather(city);
//end weather

/* todolist*/
let myNodelist = document.getElementsByTagName('LI');
for(let i=0;i<myNodelist.length; i++){
  let span = document.createElement('span');
  let text = document.createTextNode('\u00D7');
  span.className = "close";
  span.appendChild(text);
  myNodelist[i].appendChild(span);
}
let close = document.getElementsByClassName('close');
for(let i=0; i<close.length;i++){
  close[i].onclick = function(){
    this.parentElement.style.display = "none";
  }
}
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

document.querySelector('.add').addEventListener('click', newElement);

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  (inputValue === '')? alert("You must write something!"):document.getElementById("myUL").appendChild(li);
 
  document.getElementById("myInput").value = "";
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  
  li.appendChild(span);
  span.onclick = function(){
    this.parentElement.style.display = "none";
  }
}
