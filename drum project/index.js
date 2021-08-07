//document.querySelector("button").addEventListener("click",function(){
   // alert("i got clicked")
//});
//var NumofDrums=document.querySelectorAll(".drum").length;
//for (i=0;i<NumofDrums;i++)
//{
  //  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    //    var audio=new Audio("sounds/crash.mp3");
      //  audio.play();
    //})



document.querySelector("button.w.drum").addEventListener("click",function(){
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
})

document.querySelector("button.s.drum").addEventListener("click",function(){
    var audio=new Audio("sounds/kick-bass.mp3")
    audio.play();
})

document.querySelector("button.j.drum").addEventListener("click",function(){
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
});
document.querySelector("button.l.drum").addEventListener("click",function(){
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
});
document.querySelector("button.j.drum").addEventListener("click",function(){
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
})
document.querySelector("button.k.drum").addEventListener("click",function(){
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
});
document.addEventListener("keydown",function(){
    alert("key pressed ");
})