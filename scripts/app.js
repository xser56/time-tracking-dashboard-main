// Buttons Ids
let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");

// Changed Ids
let workCurrent = document.getElementById("workCurrent");
let workPrevious = document.getElementById("workPrevious");

let playCurrent = document.getElementById("playCurrent");
let playPrevious = document.getElementById("playPrevious");

let studyCurrent = document.getElementById("playCurrent");
let studyPrevious = document.getElementById("playPrevious");

let exerciseCurrent = document.getElementById("playCurrent");
let exercisePrevious = document.getElementById("playPrevious");

let socialCurrent = document.getElementById("socialCurrent");
let socialPrevious = document.getElementById("socialPrevious");

let selfcareCurrent = document.getElementById("selfcareCurrent");
let selfcarePrevious = document.getElementById("selfcarePrevious");

// Variables
let timeList = [];

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

// daily.addEventListener('click', function(event)
// {
//     workCurrent.innerText = "test";
// });

daily.addEventListener('click', async function (event) {
    const data = await getTimes(); 
    workCurrent.innerText = `${data[0].timeframes.daily.current} hrs`; 

    workPrevious.innerText = `Last Week - ${data[0].timeframes.daily.previous} hrs`;
});


