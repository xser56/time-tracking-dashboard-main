
// Buttons
let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");

// Changes
let currentTime = document.getElementById("currentTime");
let previousTime = document.getElementById("previosTime");

let timeList = [];

// Functions
async function apiCall() 
{
    const response = await fetch("../data/data.json");
    const data = await response.json();
    
    console.log(data[0].timeframes.daily.current);
    const dailyCurrent = data[0].timeframes.daily.current;

    const output = document.getElementById("output");
    output.textContent = `Daily Current Value: ${dailyCurrent}`;
};
apiCall()

daily.addEventListener('click', function(event)
{
    currentTime.innerHTML = apiCall(data[0].timeframes.daily.current);  
});
