// Acordes Maiores

function playc() {
    var audio = document.getElementById("audio-c");
    audio.play();
  }
 
  function playd() {
    var audio = document.getElementById("audio-d");
    audio.play();
  }

  function playe() {
    var audio = document.getElementById("audio-e");
    audio.play();
  }

  function playf() {
    var audio = document.getElementById("audio-f");
    audio.play();
  }

  function playg() {
    var audio = document.getElementById("audio-g");
    audio.play();
  }

  function playa() {
    var audio = document.getElementById("audio-a");
    audio.play();
  }

  function playb() {
    var audio = document.getElementById("audio-b");
    audio.play();
  }

  // Acordes menores 7+

  function playcm7M() {
    var audio = document.getElementById("audio-cm7M");
    audio.play();
  }

  function playdm7M() {
    var audio = document.getElementById("audio-dm7M");
    audio.play();
  }

  function playem7M() {
    var audio = document.getElementById("audio-em7M");
    audio.play();
  }

  const btnMobileMaiores = document.getElementById('btn-maiores');

  function toggleMenuMaiores(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
  }

  btnMobileMaiores.addEventListener('click', toggleMenuMaiores)




  const btnMobileMenores = document.getElementById('btn-menores');

  function toggleMenuMenores(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active2')
  }

  btnMobileMenores.addEventListener('click', toggleMenuMenores)