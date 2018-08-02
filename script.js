window.onload = function(){
  document.getElementById("theImage")
  .onclick = function(){
    changeImage();
  }
}
var i= 0
function changeImage(){
  var list = ["shibsibs.jpg", "javiyuzuno.jpg", "evgalina.jpg", "adamandmirai.jpg"];
  i++
  if(i>=4) {
    i = 0;
  }
  var newImg = list[i];
  document.getElementById("theImage").src = newImg;
}
