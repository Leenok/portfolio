
let dayOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let quettis = ['«Чем умнее человек, тем легче он признает себя дураком». Альберт Эйнштейн', 
'«Никогда не ошибается тот, кто ничего не делает». Теодор Рузвельт', 
'«Менее всего просты люди, желающие казаться простыми». Лев Николаевич Толстой', 
'«Мы находимся здесь, чтобы внести свой вклад в этот мир. Иначе зачем мы здесь?» Стив Джобс', 
'«Если тебе тяжело, значит ты поднимаешься в гору. Если тебе легко, значит ты летишь в пропасть». Генри Форд',
'«Характер – это и есть судьба». Майя Плисецкая',
'Победа - это еще не все, все - это постоянное желание побеждать. Винс Ломбарди',
'Ваше время ограничено, не тратьте его, живя чужой жизнью Стив Джобс',
'80% успеха - это появиться в нужном месте в нужное время. Вуди Аллен',
'Начинать всегда стоит с того, что сеет сомнения. Борис Стругацкий',
'Жизнь - это то, что с тобой происходит, пока ты строишь планы. Джон Леннон',
'Сложнее всего начать действовать, все остальное зависит только от упорства. Амелия Эрхарт',
'Деньги и время — самое тяжелое бремя в жизни. Наиболее несчастны те, у кого их больше, чем они умеют использовать. Сэмюэл Джонсон',
'Деньги – хороший слуга, но плохой хозяин. Фрэнсис Бэкон',
'Жизнь — игра, а деньги — способ вести счет. Тед Тёрнер',
'Время и деньги по большей части взаимозаменяемы. Уинстон Черчилль',
'Я пишу не для того, чтобы просить тебя прийти, я пишу, чтобы предупредить: я всегда буду ждать. Фредерик Бегбедер',
'Любовь одна, но подделок под нее — тысячи. Франсуа Ларошфуко',
'Дарить любовь гораздо важнее, чем ее получать. Одри Хепберн',
'Все может отдать мужчина своему верному другу — все, только не ту женщину, которую любит. Генрих Ибсен',
'Женщина священна; женщина, которую любишь, священна вдвойне. Александр Дюма',
'Когда любишь, то такое богатство открываешь в себе! Даже не верится, что ты так умеешь любить. А. П. Чехов',
'Старость не может защитить от любви, но любовь легко защитит от старости. Коко Шанель',
'«Не бойтесь неудач, потому что это ваш путь к успеху», — Леброн Джеймс',
'«Цели никогда не должны быть простыми. Они должны быть неудобными, чтобы заставить вас работать», — Майкл Фелпс',
'«Мир – высшее благо, какого люди желают в этой жизни». Мигель де Сервантес',
'«Если у вас восьмой блин комом, к чёрту блины, лепите комочки». «Бимайн. Тариф на безлимитное счастье», Мария Свешникова',
'«Я вовсе не хочу знать, что говорят за моей спиной, – я и без того о себе достаточно высокого мнения». Оскар Уайльд',
'«Курить бросить легко. Я сам бросал тысячу раз». Марк Твен',
'«В основном свободу человек проявляет только в выборе зависимости». Герман Гессе',
'«Самый здоровый ответ на жизнь – это радость». Дипак Чопра',
'«У кого есть "Зачем", тот выдержит почти любое "Как"». Фридрих Ницше',
'«Надо любить жизнь больше, чем смысл жизни». Фёдор Достоевский',
'«Влюбиться можно в красоту, но полюбить – лишь только душу!» Уильям Шекспир',
'«Живёт свободно только тот, кто находит радость в исполнении своего долга». Цицерон',
'«Каждому человеку свойственно ошибаться, но только глупцу свойственно упорствовать в своей ошибке» Цицерон',
'«Бренное тело дух вечный двигает» Цицерон',
'«Не знать истории – значит всегда быть ребёнком» Цицерон',
'«Ведь нужно не только овладеть мудростью, но и уметь пользоваться ею» Цицерон',
'«Когда нечем гордиться в настоящем, хвастаются вчерашними заслугами» Цицерон',
'«Через сомнения приходим к истине» Цицерон',
'«Величайшая победа – победа над самим собой» Цицерон',
'«Ненавижу советы – все, кроме своих». Джек Николсон',
'«Не оборачивается тот, кто устремлён к звёздам» Леонардо да Винчи',
'«Ни высокий интеллект, ни воображение, ни то и другое вместе не творят гения. Любовь, любовь и любовь – вот в чём сущность гения». Вольфганг Амадей Моцарт',
'«Фантазия мужчины – лучшее оружие женщины». Софи Лорен',
'«Необходимо, чтобы художник, кроме глаза, воспитывал и свою душу». Василий Кандинский',
'«Не так уж сложно изменить общество – сложно изменить себя». Нельсон Мандела',
'«Перспектива рано умереть заставила меня понять, что жизнь стоит того, чтобы её прожить». Стивен Хокинг',
'«Чемпионами становятся не в тренажёрных залах. Чемпиона рождает то, что у человека внутри: желания, мечты, цели». Мухаммед Али',
'«Характер – это и есть судьба». Майя Плисецкая',
'«Внимай лишь одному учителю – Природе». Рембрандт',
];

//2. hi
let myStorage = window.localStorage;
if(myStorage.name == undefined || myStorage.name === 'null'){
  let name = prompt("Ваше имя?", "");
  localStorage.setItem('name', name);
  localStorage.setItem('city', 'Minsk');
}

//1. clock + time
let mounths = ['Январь', 'Февраль','Март','Апрель', 'Май', 'Июнь','Июль','Август','Сентябрь','Ноябрь', 'Декабрь'];
let timedayword = { "morning":"Доброе утро", "afternoon":"Добрый день", "evening":"Добрый вечер", "night":"Доброй ночи"};
let dt = new Date();

  let moun = mounths[dt.getMonth()]+" "+dt.getDate() ;
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
    
    document.querySelector('.weekDay').innerText = `${moun}, ${dayOfWeek[weekd]}`;
    document.querySelector('.ti').innerText = `${hour}:${min}:${sec}`; 
    tiday = (hour>5 && hour<12)? "morning" : (hour>=12 && hour<18)? "afternoon": (hour>=18 && hour<24)? "evening" : "night";
    document.querySelector('.pmDay').innerText = `${timedayword[tiday]}, ${myStorage.name}!`;

    var t = setTimeout(function(){ currentTime() }, 1000); 
  }

  function updateTime(k) {
    return (k < 10)? "0" + k: k;
  }
  currentTime();

//4.quet update ))))) work!!!!!!!!!!
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function aletrr() {
    qi.innerHTML = quettis[getRandomInt(quettis.length)]
  }
let qi = document.querySelector('.quit');
qi.innerHTML = quettis[getRandomInt(quettis.length)];
document.querySelector('.upquit').addEventListener('click', aletrr);
//finish

//3. gallery
let galbg = document.querySelector('.bg');
let rig = document.querySelector('.right');
let lef = document.querySelector('.left');
let mimgs = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/'+tiday+'/';
console.log(tiday);
document.body.style.backgroundImage = 'url('+mimgs+'18.jpg)';

function nextBg(e){
  let ti = +document.body.style.backgroundImage.split('/').reverse()[0].split('.')[0];
  ti = (ti+1<21)? ti+1: 1;
  if(ti<10){ ti = '0'+ti;}
  document.body.style.backgroundImage = 'url('+mimgs +(ti)+'.jpg)';
}
function prevBg(){
  let ti = +document.body.style.backgroundImage.split('/').reverse()[0].split('.')[0];
  ti = (ti==1)?20: ti-1;
  if(ti<10){ ti = '0'+ti;}
  document.body.style.backgroundImage = 'url('+mimgs +(ti)+'.jpg)';
}
rig.addEventListener('click', nextBg);
lef.addEventListener('click', prevBg);
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
