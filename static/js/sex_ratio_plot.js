console.log("Loaded sex_ratio_plot.js")

d3.json("/age_ratio_scatter_data").then(function (data) {

// x-axis: year 
// y-axis: men per 100 women

// for 20-year-old line, loop through each year and
//log value that matches 20-year-old count


var r_100_year_olds = Object.keys(data[0])
var r_15_year_olds = Object.keys(data[1])
var r_20_year_olds = Object.keys(data[2])
var r_30_year_olds = Object.keys(data[3])
var r_40_year_olds = Object.keys(data[4])
var r_50_year_olds = Object.keys(data[5])
var r_60_year_olds = Object.keys(data[6])
var r_70_year_olds = Object.keys(data[7])
var r_80_year_olds = Object.keys(data[8])
var r_90_year_olds = Object.keys(data[9])

console.log(age_groups)

var counts_1950 = Object.values(data[0])
console.log(counts)

const minYear = "1950"
const maxYear = "2015"
for (i = minYear; i < maxYear; i++){
  thatYear = data.filtered(d => d.Year === i);
  console.log("thatYear:", thatYear);
  console.log(Object.values(data[0]))
}

  // var trace1 = {
  //     x: age_groups,
  //     y: counts,
  //     mode: 'markers',
  //     type: 'scatter'
  //   };
    
  //   var trace2 = {
  //     x: [2, 3, 4, 5],
  //     y: [16, 5, 11, 9],
  //     mode: 'lines',
  //     type: 'scatter'
  //   };
    
  //   var trace3 = {
  //     x: [1, 2, 3, 4],
  //     y: [12, 9, 15, 12],
  //     mode: 'lines+markers',
  //     type: 'scatter'
  //   };
    
  //   var data = [trace1, trace2, trace3];
    
  //   Plotly.newPlot('sex-ratio-scatterplot', data);

});
