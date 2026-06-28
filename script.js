let options = [
    {
        name: "✂️",
        goodAgainst: {
            name: "Papier",
            index: 2
        }
    },
    {
        name: "🪨",
        goodAgainst: {
            name: "Schere",
            index: 0
        }
    },
    {
        name: "📄",
        goodAgainst: {
            name: "Stein",
            index: 1
        }
    },
]
let lifes = 5;
let cheatMode = false;
let winstreak = 0;
function choose(option) {
    let computerDecision = 0;
    let computerRandomDecision = Math.floor(Math.random() * 100);
    if(computerRandomDecision < 34){
        computerDecision = 0;
    }else{
        if(computerRandomDecision < 67 && computerRandomDecision > 34){
        computerDecision = 1;
    }else{
        if(computerRandomDecision > 67){
        computerDecision = 2;
    }
    }
    }
    
    
    if(options[option].goodAgainst.index == computerDecision){
        document.getElementById("playerstatus").textContent = "Gewonnen!";
        winstreak += 1;
    }else{ 
        if(options[computerDecision].goodAgainst.index == option){
            document.getElementById("playerstatus").textContent = "Verloren!";
            winstreak = 0;
            lifes -= 1;
        }else{
            document.getElementById("playerstatus").textContent = "Unentschieden.";
        }
    }
    document.getElementById("computerdecision").textContent =  options[computerDecision].name ;
    document.getElementById("playerdecision").textContent =  options[option].name;
    document.getElementById("winstreak").textContent = " Streak: " + winstreak;
    document.getElementById("hearts-container").textContent =  lifes + " ❤️ ";
}
