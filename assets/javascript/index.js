const timeDis = document.querySelector("#timeDisplay")
const startBin = document.querySelector("#startBin")
const pauseBtn = document.querySelector("#pauseBin")
const resetBtn = document.querySelector("#resetBin")
let StartTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervald
let hrs =0
let mins =0
let secs = 0
startBin.addEventListener("click",() => {
    if(paused) {
        paused = false;
        StartTime = Date.now() - elapsedTime;
        
        intervald = setInterval(updateTime, 75)
    }
});
pauseBtn.addEventListener("click",() => {
    if(!paused){
        paused = true
        elapsedTime = Date.now() - StartTime
        clearInterval(intervald)
    }
})
resetBtn.addEventListener("click",() => {
    if(paused == true){
        
        clearInterval(intervald)
        StartTime = 0;
        elapsedTime = 0;
        currentTime = 0;
        hrs = 0
        mins = 0
        secs = 0
        timeDisplay.textContent = "00:00:00";

    }
   

})

function updateTime(){
    elapsedTime = Date.now() - StartTime
    secs = Math.floor((elapsedTime/1000)%60)
    mins = Math.floor((elapsedTime/(1000*60))%60)
    hrs = Math.floor((elapsedTime/(1000*60*60))%60)
    
    secs = pad(secs)
    mins = pad(mins)
    hrs = pad(hrs)
    timeDisplay.textContent = `${hrs} ${mins} ${secs}`
    function pad(unit){
        return(("0" + unit).length > 2 ? unit: "0" + unit)
    }


} 

