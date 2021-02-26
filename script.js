const block= document.getElementById("block");
const hole= document.getElementById("hole");
const player= document.getElementById("player");
var jumping = 0;

hole.addEventListener('animationiteration', ()=>{
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
});

setInterval(()=>{
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop= playerTop-500;
    if(playerTop<457 && jumping==0){
        player.style.top = (playerTop+3)+"px";
    }
    if(playerTop>455 || ( (blockLeft<50) && (blockLeft>-50) && ( (cTop<holeTop) || (cTop>holeTop+110) ) ) ){
        alert("game over");
        player.style.top = "50px";
    }
},10);

function jump(){
    jumping =1;
    var jumpCount = 0;
    var jumpIntervale = setInterval(()=>{
        var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
        if(playerTop>6 && jumpCount<15){
            player.style.top = (playerTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpIntervale);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}