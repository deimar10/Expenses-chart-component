var xValues = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var yValues = [17.45, 34.91, 52.36, 31.07, 23.39, 42.28, 25.48];
const backgroundcolor = [];

for(i = 0; i < xValues.length; i++) {
    if(xValues[i] === "Monday") { 
        backgroundcolor.push('hsl(186, 34%, 60%)') 
    } else {
        backgroundcolor.push("hsl(10, 79%, 65%)") 
    }
    if(xValues[i] === "Tuesday") {
         backgroundcolor.push( "hsl(186, 34%, 60%)") 
    } else {
        backgroundcolor.push("hsl(10, 79%, 65%)") 
    }
    if(xValues[i] === "Wednesday") {
         backgroundcolor.push( "hsl(186, 34%, 60%)") 
        } else {
        backgroundcolor.push("hsl(10, 79%, 65%)") 
    }
    if(xValues[i] === "Thursday") {
        backgroundcolor.push( "hsl(186, 34%, 60%)") 
        } else {
        backgroundcolor.push("hsl(10, 79%, 65%)") 
    }
    if(xValues[i] === "Friday") {
        backgroundcolor.push( "hsl(186, 34%, 60%)") 
        } else {
        backgroundcolor.push("hsl(10, 79%, 65%)") 
    }
    if(xValues[i] === "Saturday") {
        backgroundcolor.push( "hsl(186, 34%, 60%)") 
        } else {
        backgroundcolor.push("hsl(10, 79%, 65%)") 
    }
    if(xValues[i] === "Sudnay") {
        backgroundcolor.push( "hsl(186, 34%, 60%)") 
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


