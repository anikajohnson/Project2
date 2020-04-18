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
  var age_15 = {x: year_Array, y: r_15_year_olds_Array, mode: 'lines', type: 'scatter', name: '15-Year-Olds', line: {color: 'rgba(255,192,45,1)', width: 2.5}};
  var age_20 = {x: year_Array, y: r_20_year_olds_Array, mode: 'lines', type: 'scatter', name: '20-Year-Olds', line: {color: 'rgba(255,140,0,1)', width: 2.5}};
  var age_30 = {x: year_Array, y: r_30_year_olds_Array, mode: 'lines', type: 'scatter', name: '30-Year-Olds', line: {color: 'rgba(255,111,156,1)', width: 2.5}};
  var age_40 = {x: year_Array, y: r_40_year_olds_Array, mode: 'lines', type: 'scatter', name: '40-Year-Olds', line: {color: 'rgba(255,70,0,1)', width: 2.5}};
  var age_50 = {x: year_Array, y: r_50_year_olds_Array, mode: 'lines', type: 'scatter', name: '50-Year-Olds', line: {color: 'rgba(231,97,255,1)', width: 2.5}};
  var age_60 = {x: year_Array, y: r_60_year_olds_Array, mode: 'lines', type: 'scatter', name: '60-Year-Olds', line: {color: 'rgba(193,26,253,1)', width: 2.5}};
  var age_70 = {x: year_Array, y: r_70_year_olds_Array, mode: 'lines', type: 'scatter', name: '70-Year-Olds', line: {color: 'rgba(193,26,160,1)', width: 2.5}};
  var age_80 = {x: year_Array, y: r_80_year_olds_Array, mode: 'lines', type: 'scatter', name: '80-Year-Olds', line: {color: 'rgba(33,103,27,1)', width: 2.5}};
  var age_90 = {x: year_Array, y: r_90_year_olds_Array, mode: 'lines', type: 'scatter', name: '90-Year-Olds', line: {color: 'rgba(33,177,154,1)', width: 2.5}};
  var age_100 = {x: year_Array, y: r_100_year_olds_Array, mode: 'lines', type: 'scatter', name: '100-Year-Olds', line: {color: 'rgba(33,205,255,1)', width: 2.5}};

  var data = [age_15, age_20, age_30, age_40, age_50, age_60, age_70, age_80, age_90, age_100];

  var layout = {
    title: "Male Life Expectancy Compared to Women by Age Group (1950-2015)",
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
