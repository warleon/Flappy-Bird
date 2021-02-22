var block= document.getElementById("block");
var character= document.getElementById("character");

function jump(){
    if(character.classList != "anim")
        character.classList.add("anim");
    setTimeout(function(){
    character.classList.remove("anim");
    },500);
}

var checkDead = function(){
    var ctop= parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var bleft= parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(bleft>0 && bleft<20 && ctop>130){
        block.style.animation= "none";
        if(confirm("you lose, wanna play again?")){
            block.style.animation= "block 2s infinite linear";
        }
    }
}

var repite = setInterval(checkDead,10);