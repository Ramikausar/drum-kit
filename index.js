var NumOfDrumButton = document.querySelectorAll(".drum").length;
for (var i =0; i< NumOfDrumButton; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    
    function handleClick(){
        var audio = new Audio("sound/tom-4.mp3");
        audio.play();
    } 

}
  