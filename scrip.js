const startDate = new Date("December 9, 2025 00:00:00");

function actualizarTiempo(){

const now = new Date();
const diff = now - startDate;

const seconds = Math.floor(diff / 1000) % 60;
const minutes = Math.floor(diff / (1000*60)) % 60;
const hours = Math.floor(diff / (1000*60*60)) % 24;
const days = Math.floor(diff / (1000*60*60*24));
const months = Math.floor(days / 30);
const years = Math.floor(months / 12);

document.getElementById("years").textContent = years;
document.getElementById("months").textContent = months % 12;
document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;

}

setInterval(actualizarTiempo,1000);



function playSong(id){

const songs = document.querySelectorAll("audio");

songs.forEach(song=>{
song.pause();
song.currentTime=0;
});

const song = document.getElementById(id);

song.play();

}
