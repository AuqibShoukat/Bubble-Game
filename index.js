function makeBubble(){
    let clutter = '';
for(let i=0;i<=146;i++){
    let rn = Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML = clutter
}

let timer = 60;
function runTimer(){
    let timerint = setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector("#timerval").innerHTML = timer;
        }
        else{
            clearInterval(timerint)
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over....!!!</h1> <h1>Total Score is : ${score}</h1>`;
        }
    },1000)
}

let hitrn = 0;
function getNewHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").innerHTML = hitrn;
}

let score = 0;
function increaseScroe(){
    score += 10;
    document.querySelector("#scoreval").innerHTML = score;
}
document.querySelector("#pbtm")
.addEventListener("click", (details)=>{
    let clickedNumber = Number(details.target.textContent);
    if(clickedNumber === hitrn){
        increaseScroe();
        makeBubble();
        getNewHit();
    } 
});

getNewHit()
runTimer();
makeBubble();
