// for (let i = 0; i < data.title.length; i++)
//     {
//         timeList.push(`${TIME HERE} ${"Hrs"}`);
//         console.log(timeList);
//     }

let time = document.getElementById("time");
let timeList = [];

function getDataTest()
{
    fetch("../data/data.json").then(response => response.json()).then(data =>
        {
        console.log(data);

        for (let i = 0; i < data.length; i++)
        {
            timeList.push(data.title[i].daily[i].current);
        }
        console.log(timeList);
    })
}
getDataTest();
