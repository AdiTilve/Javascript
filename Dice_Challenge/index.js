// var img=document.querySelectorAll("img");
var rd1=Math.floor(Math.random() * 6)+1;
var rd2=Math.floor(Math.random() * 6)+1;
var randomimage1="images/dice"+rd1+".png";
var randomimage2="images/dice"+rd2+".png"
document.querySelectorAll("img")[0].setAttribute("src",randomimage1);
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);
if(rd1>rd2){
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if (rd1<rd2) {
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
