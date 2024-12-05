// Buttons Ids
let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");

// Changed Ids
let workCurrent = document.getElementById("workCurrent");
let workPrevious = document.getElementById("workPrevious");

let playCurrent = document.getElementById("playCurrent");
let playPrevious = document.getElementById("playPrevious");

let studyCurrent = document.getElementById("studyCurrent");
let studyPrevious = document.getElementById("studyPrevious");

let exerciseCurrent = document.getElementById("exerciseCurrent");
let exercisePrevious = document.getElementById("exercisePrevious");

let socialCurrent = document.getElementById("socialCurrent");
let socialPrevious = document.getElementById("socialPrevious");

let selfcareCurrent = document.getElementById("selfcareCurrent");
let selfcarePrevious = document.getElementById("selfcarePrevious");


// Functions
async function getTimes() 
{
    const response = await fetch("../data/data.json");
    const data = await response.json();
    console.log(data)
    
    console.log(data[0].timeframes.daily.current);
    return data;
};
getTimes()

daily.addEventListener('click', async function (event)
{
    const data = await getTimes(); 

    workCurrent.innerText = `${data[0].timeframes.daily.current} hrs`; 
    workPrevious.innerText = `Last Week - ${data[0].timeframes.daily.previous} hrs`;

    playCurrent.innerText = `${data[1].timeframes.daily.current} hrs`; 
    playPrevious.innerText = `Last Week - ${data[1].timeframes.daily.previous} hrs`;

    studyCurrent.innerText = `${data[2].timeframes.daily.current} hrs`; 
    studyPrevious.innerText = `Last Week - ${data[2].timeframes.daily.previous} hrs`;

    exerciseCurrent.innerText = `${data[3].timeframes.daily.current} hrs`; 
    exercisePrevious.innerText = `Last Week - ${data[3].timeframes.daily.previous} hrs`;

    socialCurrent.innerText = `${data[4].timeframes.daily.current} hrs`; 
    socialPrevious.innerText = `Last Week - ${data[4].timeframes.daily.previous} hrs`;
    
    selfcareCurrent.innerText = `${data[5].timeframes.daily.current} hrs`; 
    selfcarePrevious.innerText = `Last Week - ${data[5].timeframes.daily.previous} hrs`;
});

weekly.addEventListener('click', async function (event)
{
    const data = await getTimes();

    workCurrent.innerText = `${data[0].timeframes.weekly.current} hrs`;
    workPrevious.innerText = `Last Week - ${data[0].timeframes.weekly.previous} hrs`;

    playCurrent.innerText = `${data[1].timeframes.weekly.current} hrs`; 
    playPrevious.innerText = `Last Week - ${data[1].timeframes.weekly.previous} hrs`;

    studyCurrent.innerText = `${data[2].timeframes.weekly.current} hrs`; 
    studyPrevious.innerText = `Last Week - ${data[2].timeframes.weekly.previous} hrs`;

    exerciseCurrent.innerText = `${data[3].timeframes.weekly.current} hrs`; 
    exercisePrevious.innerText = `Last Week - ${data[3].timeframes.weekly.previous} hrs`;

    socialCurrent.innerText = `${data[4].timeframes.weekly.current} hrs`; 
    socialPrevious.innerText = `Last Week - ${data[4].timeframes.weekly.previous} hrs`;

    selfcareCurrent.innerText = `${data[5].timeframes.weekly.current} hrs`; 
    selfcarePrevious.innerText = `Last Week - ${data[5].timeframes.weekly.previous} hrs`;
});

monthly.addEventListener('click', async function (event)
{
    const data = await getTimes();

    workCurrent.innerText = `${data[0].timeframes.monthly.current} hrs`;
    workPrevious.innerText = `Last Week - ${data[0].timeframes.monthly.previous} hrs`;

    playCurrent.innerText = `${data[1].timeframes.monthly.current} hrs`; 
    playPrevious.innerText = `Last Week - ${data[1].timeframes.monthly.previous} hrs`;

    studyCurrent.innerText = `${data[2].timeframes.monthly.current} hrs`; 
    studyPrevious.innerText = `Last Week - ${data[2].timeframes.monthly.previous} hrs`;

    exerciseCurrent.innerText = `${data[3].timeframes.monthly.current} hrs`; 
    exercisePrevious.innerText = `Last Week - ${data[3].timeframes.monthly.previous} hrs`;

    socialCurrent.innerText = `${data[4].timeframes.monthly.current} hrs`; 
    socialPrevious.innerText = `Last Week - ${data[4].timeframes.monthly.previous} hrs`;

    selfcareCurrent.innerText = `${data[5].timeframes.monthly.current} hrs`; 
    selfcarePrevious.innerText = `Last Week - ${data[5].timeframes.monthly.previous} hrs`;
});