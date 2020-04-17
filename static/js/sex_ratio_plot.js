console.log("Loaded sex_ratio_plot.js")

d3.json("/age_ratio_scatter_data").then(function (data2) {

// create an empty array for each age group
  var year_Array = [];
  var r_100_year_olds_Array = [];
  var r_15_year_olds_Array = [];
  var r_20_year_olds_Array = [];
  var r_30_year_olds_Array = [];
  var r_40_year_olds_Array = [];
  var r_50_year_olds_Array = [];
  var r_60_year_olds_Array = [];
  var r_70_year_olds_Array = [];
  var r_80_year_olds_Array = [];
  var r_90_year_olds_Array = [];
 
  // populate array for each age group by looping through json dictionary key that matches age group
  var r_15_year_olds_Array = data2.map(x => x.r_15_year_olds);
  var r_20_year_olds_Array = data2.map(x => x.r_20_year_olds);
  var r_30_year_olds_Array = data2.map(x => x.r_30_year_olds);
  var r_40_year_olds_Array = data2.map(x => x.r_40_year_olds);
  var r_50_year_olds_Array = data2.map(x => x.r_50_year_olds);
  var r_60_year_olds_Array = data2.map(x => x.r_60_year_olds);
  var r_70_year_olds_Array = data2.map(x => x.r_70_year_olds);
  var r_80_year_olds_Array = data2.map(x => x.r_80_year_olds);
  var r_90_year_olds_Array = data2.map(x => x.r_90_year_olds);
  var r_100_year_olds_Array = data2.map(x => x.r_100_year_olds);
  var year_Array = data2.map(x => x.year);

  // check arrays are working

  // console.log(year_Array)
  // console.log(r_100_year_olds_Array)
  // console.log(r_15_year_olds_Array)
  // console.log(r_20_year_olds_Array)
  // console.log(r_30_year_olds_Array)
  // console.log(r_40_year_olds_Array)
  // console.log(r_50_year_olds_Array)
  // console.log(r_60_year_olds_Array)
  // console.log(r_70_year_olds_Array)
  // console.log(r_80_year_olds_Array)
  // console.log(r_90_year_olds_Array)
  // console.log(r_100_year_olds_Array)

// create traces for each age group, specify name for hovertext, set line color, width etc. 
  var age_15 = {x: year_Array, y: r_15_year_olds_Array, mode: 'lines', type: 'scatter', name: '15-Year-Olds', line: {color: 'rgba(255,255,0,1)', width: 2}};
  var age_20 = {x: year_Array, y: r_20_year_olds_Array, mode: 'lines', type: 'scatter', name: '20-Year-Olds', line: {color: 'rgba(255,140,0,1)', width: 2}};
  var age_30 = {x: year_Array, y: r_30_year_olds_Array, mode: 'lines', type: 'scatter', name: '30-Year-Olds', line: {color: 'rgba(255,140,155,1)', width: 2}};
  var age_40 = {x: year_Array, y: r_40_year_olds_Array, mode: 'lines', type: 'scatter', name: '40-Year-Olds', line: {color: 'rgba(255,70,0,1)', width: 2}};
  var age_50 = {x: year_Array, y: r_50_year_olds_Array, mode: 'lines', type: 'scatter', name: '50-Year-Olds', line: {color: 'rgba(255,0,0,1)', width: 2}};
  var age_60 = {x: year_Array, y: r_60_year_olds_Array, mode: 'lines', type: 'scatter', name: '60-Year-Olds', line: {color: 'rgba(193,26,253,1)', width: 2}};
  var age_70 = {x: year_Array, y: r_70_year_olds_Array, mode: 'lines', type: 'scatter', name: '70-Year-Olds', line: {color: 'rgba(193,26,160,1)', width: 2}};
  var age_80 = {x: year_Array, y: r_80_year_olds_Array, mode: 'lines', type: 'scatter', name: '80-Year-Olds', line: {color: 'rgba(33,103,27,1)', width: 2}};
  var age_90 = {x: year_Array, y: r_90_year_olds_Array, mode: 'lines', type: 'scatter', name: '90-Year-Olds', line: {color: 'rgba(33,177,154,1)', width: 2}};
  var age_100 = {x: year_Array, y: r_100_year_olds_Array, mode: 'lines', type: 'scatter', name: '100-Year-Olds', line: {color: 'rgba(33,205,255,1)', width: 2}};

  var data = [age_15, age_20, age_30, age_40, age_50, age_60, age_70, age_80, age_90, age_100];
  
  // var layout = {
  //   title: 'Scatter Plot Age Ratio',
  //   showlegend: false,
  //   xaxis: {
  //     type: 'ordinal',
  //     title: 'Year',
  //     range: year_Array,
  //     autorange: true
  //   },
  //   yaxis: {
  //     type: 'linear',
  //     title: 'Males per 100 females',
  //     range: [-5, 105],
  //     tickertext: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  //     tickervals: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  //   },
  // };

//////////////////////////

    var layout = {
    title: "Male Live Expectancy Compared to Women (1950-1915)",
    showlegend: false,
    autosize: true,
    xaxis: {
      type: 'ordinal', 
      range: year_Array, 
      title: {text: 'Years'}, 
      ticktext: year_Array, 
      tickvals: year_Array,
      showline: true,
      showgrid: false,
      showticklabels: true,
      linecolor: 'rgb(204,204,204)',
      linewidth: 2,
      autotick: false,
      ticks: 'outside',
      tickcolor: 'rgb(204,204,204)',
      tickwidth: 2,
      ticklen: 5,
      tickfont: {
        family: 'Arial',
        size: 12,
        color: 'rgb(82, 82, 82)'
      }  
    }, 
    yaxis: {
      type: 'linear', 
      range: [-5, 105], 
      title: 'Men per 100 women', 
      tickertext: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 105],
      tickervals: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 105],
      autorange: true
    },
    legend: {
      y:0.5,
      traceorder: 'reversed',
      font: {
        size: 12
      }
    }
  }; 
  
    
  Plotly.newPlot('sex-ratio-scatterplot', data, layout);
});

  // starter code: https://plotly.com/javascript/line-charts/ "LabellingLines with Annotations"
//   var xData = [
//     [year_Array],
//     [year_Array],
//     [year_Array],
//     [year_Array],
//     [year_Array],
//     [year_Array],
//     [year_Array],
//     [year_Array],
//     [year_Array],
//     [year_Array]
//   ];

//   var yData = [
//     [r_15_year_olds_Array],
//     [r_20_year_olds_Array],
//     [r_30_year_olds_Array],
//     [r_40_year_olds_Array],
//     [r_50_year_olds_Array],
//     [r_60_year_olds_Array],
//     [r_70_year_olds_Array],
//     [r_80_year_olds_Array],
//     [r_90_year_olds_Array],
//     [r_100_year_olds_Array]
//   ];
  
//   var colors = ['rgba(255,255,0,1)', 'rgba(255,140,0,1)', 'rgba(255,140,155,1)',
//     'rgba(255,70,0,1)', 'rgba(255,0,0,1)', 'rgba(193,26,253,1)', 'rgba(193,26,160,1)',
//     'rgba(33,103,27,1)', 'rgba(33,177,154,1)', 'rgba(33,205,255,1)'
//   ];
  
//   var lineSize = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  
//   var labels = ['15-Year-Olds', '20-Year-Olds', '30-Year-Olds', '40-Year-Olds', '50-Year-Olds', 
//   '60-Year-Olds', '70-Year-Olds', '80-Year-Olds', '90-Year-Olds', '100-Year-Olds' ];
  
//   var plotdata = [];
  
//   for ( var i = 0 ; i < xData.length ; i++ ) {
//     var result = {
//       x: xData[i],
//       y: yData[i],
//       type: 'scatter',
//       mode: 'lines',
//       line: {
//         color: colors[i],
//         width: lineSize[i]
//       }
//     };
//     plotdata.push(result);
//   }

//   var layout = {
//     title: "US Population Pyramid",
//     showlegend: false,
//     height: 600,
//     width: 600,
//     xaxis: {
//       type: 'ordinal', 
//       range: year_Array, 
//       title: {text: 'Years'}, 
//       //ticktext: year_Array, 
//       tickvals: year_Array,
//       // showline: true,
//       // showgrid: false,
//       // showticklabels: true,
//       linecolor: 'rgb(204,204,204)',
//       linewidth: 2,
//       autotick: false,
//       ticks: 'outside',
//       tickcolor: 'rgb(204,204,204)',
//       tickwidth: 2,
//       ticklen: 5,
//       tickfont: {
//         family: 'Arial',
//         size: 12,
//         color: 'rgb(82, 82, 82)'
//       }  
//     }, 
//     yaxis: {
//       type: 'linear', 
//       range: [-5, 100], 
//       title: {text: 'Men per 100 women'}, 
//       //ticktext: [men_y_data],
//       autorange: true
//     }
//   }; 
  


//   // var layout = {
//   //   showlegend: false,
//   //   height: 600,
//   //   width: 600,
//   //   xaxis: {
//   //     showline: true,
//   //     showgrid: false,
//   //     showticklabels: true,
//   //     linecolor: 'rgb(204,204,204)',
//   //     linewidth: 2,
//   //     autotick: false,
//   //     ticks: 'outside',
//   //     tickcolor: 'rgb(204,204,204)',
//   //     tickwidth: 2,
//   //     ticklen: 5,
//   //     tickfont: {
//   //       family: 'Arial',
//   //       size: 12,
//   //       color: 'rgb(82, 82, 82)'
//   //     }
//   //   },
//   //   yaxis: {
//   //     showgrid: false,
//   //     zeroline: false,
//   //     showline: false,
//   //     showticklabels: false
//   //   },
//   //   autosize: false,
//   //   margin: {
//   //     autoexpand: false,
//   //     l: 100,
//   //     r: 20,
//   //     t: 100
//   //   },
//   //   annotations: [
//   //     {
//   //       xref: 'paper',
//   //       yref: 'paper',
//   //       x: 0.0,
//   //       y: 1.05,
//   //       xanchor: 'left',
//   //       yanchor: 'bottom',
//   //       text: 'Main Source for News',
//   //       font:{
//   //         family: 'Arial',
//   //         size: 30,
//   //         color: 'rgb(37,37,37)'
//   //       },
//   //       showarrow: false
//   //     },
//   //     {
//   //       xref: 'paper',
//   //       yref: 'paper',
//   //       x: 0.5,
//   //       y: -0.1,
//   //       xanchor: 'center',
//   //       yanchor: 'top',
//   //       text: 'Source: Pew Research Center & Storytelling with data',
//   //       showarrow: false,
//   //       font: {
//   //         family: 'Arial',
//   //         size: 12,
//   //         color: 'rgb(150,150,150)'
//   //       }
//   //     }
//   //   ]
//   // };
  
//   // for( var i = 0 ; i < 65 ; i++ ) {
//   //   var result = {
//   //     xref: 'paper',
//   //     x: 0.05,
//   //     y: yData[i][0],
//   //     xanchor: 'right',
//   //     yanchor: 'middle',
//   //     text: labels[i] + ' ' + yData[i][0] +'%',
//   //     showarrow: false,
//   //     font: {
//   //       family: 'Arial',
//   //       size: 16,
//   //       color: 'black'
//   //     }
//   //   };
//   //   var result2 = {
//   //     xref: 'paper',
//   //     x: 0.95,
//   //     y: yData[i][64],
//   //     xanchor: 'left',
//   //     yanchor: 'middle',
//   //     text: yData[i][64] +'%',
//   //     font: {
//   //       family: 'Arial',
//   //       size: 16,
//   //       color: 'black'
//   //     },
//   //     showarrow: false
//   //   };
  
//   //   layout.annotations.push(result, result2);
//   // layout.annotations.push(result);
//   // }
  
//   //Plotly.newPlot('sex-ratio-scatterplot', plotdata, layout);
//   Plotly.newPlot('sex-ratio-scatterplot', plotdata);

// });
