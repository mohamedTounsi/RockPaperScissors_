let wins=localStorage.getItem('wins');
let loses=localStorage.getItem('loses');
let ties=localStorage.getItem('ties');
let pwins=document.getElementById('wins');
pwins.innerHTML=wins;
let ploses=document.getElementById('loses');
ploses.innerHTML=loses;
let pties=document.getElementById('ties');
pties.innerHTML=ties;





function rock(){
  const randomNumber = Math.random();
  if (0<=randomNumber && randomNumber<1/3){
    window.location.href = "rocktie.html"
    ties++;
    localStorage.setItem('ties',ties);

  }
  else if(1/3<=randomNumber && randomNumber<2/3){
    window.location.href = "rocklose.html"
    loses++;
    localStorage.setItem('loses',loses);


  }
  else{
    window.location.href = "rockwin.html"
    wins++;
    localStorage.setItem('wins',wins);



  }
}


function paper(){
  const randomNumber = Math.random();
  if (0<=randomNumber && randomNumber<1/3){
    window.location.href = "paperwin.html"
    wins++;
    localStorage.setItem('wins',wins);



  }
  else if(1/3<=randomNumber && randomNumber<2/3){
    window.location.href = "papertie.html"
    ties++;
    localStorage.setItem('ties',ties);


  }
  else{
    window.location.href = "paperlose.html"
    loses++;
    localStorage.setItem('loses',loses);

  }
}


function sis(){
  const randomNumber = Math.random();
  if (0<=randomNumber && randomNumber<1/3){
    window.location.href = "sislose.html"
    loses++;
    localStorage.setItem('loses',loses);


  }
  else if(1/3<=randomNumber && randomNumber<2/3){
    window.location.href = "siswin.html"
    wins++;
    localStorage.setItem('wins',wins);

  }
  else{
    window.location.href = "sistie.html"
    ties++;
    localStorage.setItem('ties',ties);


  }
}
function face(){
  window.location.href= "https://www.facebook.com/mohamed.tounsi.583"
}
function insta(){
  window.location.href= "https://www.instagram.com/mohamed__tounsii/"
}
function reset(){
  localStorage.removeItem('loses');
  localStorage.removeItem('wins');
  localStorage.removeItem('ties');
  wins=0;
  loses=0;
  ties=0;
  pties.innerHTML=ties;
  pwins.innerHTML=wins;
  ploses.innerHTML=loses;
  
}