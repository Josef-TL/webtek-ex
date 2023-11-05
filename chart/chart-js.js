
let myChart1 = document.querySelector("#myChart1").getContext("2d")
let myChart2 = document.querySelector("#myChart2").getContext("2d")
let myChart3 = document.querySelector("#myChart3").getContext("2d")
let myChart4 = document.querySelector("#myChart4").getContext("2d")
let myChart5 = document.querySelector("#myChart5").getContext("2d")
let myChart6= document.querySelector("#myChart6").getContext("2d")
let myChart7= document.querySelector("#myChart7").getContext("2d")
let myChart8= document.querySelector("#myChart8").getContext("2d")
let myChart9= document.querySelector("#myChart9").getContext("2d")




let chartOne = new Chart(myChart1,{
    type: "line",
    data:{
        labels:["2018","2019","2020","2021"],
        datasets:[{
            label:"Danmark",
            data:[1000,825,610,360]
        }
        ]
    },
    options:{
       aspectRatio: 1
    }
    });


let chartTwo = new Chart(myChart2,{
    type: "bar",
    data:{
        labels:["🇩🇰","🇸🇪","🇳🇴","🇬🇧"],
        datasets:[{
            label:"Country exports",
            data:[1000,825,610,360]
        }
        ]
    },
    options:{
        aspectRatio: 1
    }
});


let chartThree = new Chart(myChart3,{
    type: "pie",
    data:{
        labels:["Kanye West Listens","Taylor Swift Listens"],
        datasets:[{
            label:"",
            data:[40,60]
        }
        ]
    },
    options:{
        layout:{
        },
        aspectRatio: 1
    }
});

let chartFour = new Chart(myChart4,{
    type: "line",
    data:{
        labels:["2018","2019","2020","2021"],
        datasets:[{
            label:"Danmark",
            data:[1000,825,610,360]
        },{
            label:"Sweden",
            data:[900,400,600,700]
        }
        ]
    },
    options:{
        aspectRatio: 1
    }
});


let chartFive = new Chart(myChart5,{
    type: "bar",
    data:{
        labels:["🇩🇰","🇸🇪","🇳🇴","🇬🇧"],
        datasets:[{
            label:"Country exports",
            data:[1000,825,610,360],
            backgroundColor:['Red',"rgb(230, 230, 230)","rgb(230, 230, 230)","rgb(230, 230, 230)"]
        }]
    },
    options:{
        aspectRatio: 1,
        scales:{
            x:{
                grid:{
                    display: false
                }
            },
            y:{
                grid:{
                    display: false
                }
            }
        }
    }
});


/*
OPGAVE &
 */



const datasets6 = [{
    label:"Tiktok views",
    data:[{x:0,y:23},{x:1,y:78},{x:2,y:89},{x:3,y:70}]
},{
    label:"Youtube views",
    data:[{x:0,y:67},{x:1,y:68},{x:2,y:55},{x:3,y:80}],
    borderColor: "#63C8C8"
}
]

const totalDuration = 1000;
const delayBetweenPoints = totalDuration / datasets6[0].data.length;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const animation = {
    x: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: NaN, // the point is initially skipped
        delay(ctx) {
            if (ctx.type !== 'data' || ctx.xStarted) {
                return 0;
            }
            ctx.xStarted = true;
            return ctx.index * delayBetweenPoints;
        }
    },
    y: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: previousY,
        delay(ctx) {
            if (ctx.type !== 'data' || ctx.yStarted) {
                return 0;
            }
            ctx.yStarted = true;
            return ctx.index * delayBetweenPoints;
        }
    }
};

let chartSix = new Chart(myChart6,{
    type: "line",
    data:{
        labels:["monday","tuesday","wednesday","thursday"],
        datasets: datasets6
    },
    options:{
        aspectRatio: 1,
        plugins: {
            title: {
                display: true,
                text: 'Tiktok vs Youtube'
            }
        },
        scales:{
            x:{
                grid:{
                    display: false
                }
            },
            y:{
                grid:{
                    display: false
                }
            }
        },

        animation
    }
});