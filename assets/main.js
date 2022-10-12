var xValues = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var yValues = [17.45, 34.91, 52.36, 31.07, 23.39, 42.28, 25.48];
const backgroundcolor = [];
var a = new Date();
var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    var r = weekdays[a.getDay()];
    console.log(r);

for(i = 0; i < xValues.length; i++) {
    if(r === xValues[i]) { 
        backgroundcolor.push('hsl(186, 34%, 60%)') 
    } else {
        backgroundcolor.push("hsl(10, 79%, 65%)") 
    }
}


new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            data: yValues,
            backgroundColor: backgroundcolor,
        }],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                id: 'y-axis-density',
                gridLines: {
                    display:false
                }
            }]
        },
        legend: {display: false},
        title: {
            display: true,
            text: "Spending - Last 7 days"
        } 
    }
})


