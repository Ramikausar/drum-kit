var NumOfDrumButton = document.querySelectorAll(".drum").length;
for (var i =0; i< NumOfDrumButton; i++)
{

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
    var buttonInnerHTML =this.innerHTML;

    makesound(buttonInnerHTML)
    
    
    });

}

document.addEventListener("keypress",function(event){
    makesound(event.key)  
}
);

function makesound(key){

    switch (key) 
        {
            case "w": 
                var tom1 = new Audio("sound/tom-1.mp3");
                tom1.play();
            break;

            case "a": 
                var tom2 = new Audio("sound/tom-2.mp3");
                tom2 .play();
            break;

            case "s": 
                var tom3 = new Audio("sound/tom-3.mp3");
                tom3.play();
            break;

            case "d": 
                var tom4 = new Audio("sound/tom-4.mp3");
                tom4 .play();
            break;

            case "j": 
                var snare = new Audio("sound/snare.mp3");
                snare.play();
            break;

            case "k": 
                var cash = new Audio("sound/cash.mp3");
                cash.play();
            break;

            case "l": 
                var kick = new Audio("sound/kick.mp3");
                kick.play();
            break;

            default: console.log(buttonInnerHTML);
            

        }
}
  