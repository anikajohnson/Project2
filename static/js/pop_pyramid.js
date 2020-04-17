console.log("Loaded pop_pyramid.js");

// starter templates
// https://plotly.com/~etpinard/7625.js
// https://plotly.com/javascript/gapminder-example/
d3.json("/pop_pyramid_data").then(function (data1) {

  var data = data1;
 // find a way to loop through and select dictionary places
 // 0 + x driven by slider bar

  var x = 0

  var mendata = data[x];
  var womendata = data[15];

  var men_y_axis = Object.keys(mendata);
  var men_y_data = men_y_axis.slice(2, 23);
  var men_x_axis = Object.values(mendata);
  var men_x_data = men_x_axis.slice(2, 23);

  
  var women_y_axis = Object.keys(womendata);
  var women_y_data = women_y_axis.slice(2, 23);
  var women_x_axis = Object.values(womendata);
  var women_x_data = women_x_axis.slice(2, 23);
  var women_x_data_neg = women_x_data.map(x => -x);


  var trace1 = {
    uid: '9f2de8e2-01e2-44cf-9597-d8c9d17a223a', 
    meta: {columnNames: {
        x: 'Men, x', 
        y: 'Men, y; Women, y'
      }}, 
    name: 'Men', 
    type: 'bar', 
    x: men_x_data, 
    y: men_y_data, 
    marker: {color: 'powderblue'}, 
    hoverinfo: 'x', 
    orientation: 'h'
  };
  var trace2 = {
    uid: '31653fd0-228e-4932-88af-340740cd1dea', 
    meta: {columnNames: {
        x: 'Women, x', 
        y: 'Men, y; Women, y', 
        text: 'text'
      }}, 
    name: 'Women', 
    type: 'bar', 
    x: women_x_data_neg, 
    y: women_y_data, 
    marker: {color: 'seagreen'},
    text: women_x_data,
    hoverinfo: 'text', 
    orientation: 'h'
  };

 var tickers = ["0-4", "5-9", "10-14", "15-19", "20-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64", "65-69", "70-74", "75-79", "80-84", "85-89", "90-94", "95-99", "100-105"];


var data = [trace1, trace2];
  var layout = {
    title: "US Population Pyramid",
    xaxis: {
      type: 'linear', 
      range: [-15000, 15000], 
      title: {text: 'Population Size (thousands)'}, 
      ticktext: [15000, 12500, 10000, 7500, 5000, 2500, 0, 2500, 5000, 7500, 10000, 12500, 15000], 
      tickvals: [-15000, -12500, -10000, -7500, -5000, -2500, 0, 2500, 5000, 7500, 10000, 12500, 15000]
    }, 
    yaxis: {
      type: 'ordinal', 
      range: tickers, 
      title: {text: 'Age'}, 
      //ticktext: [men_y_data],
      autorange: true
    }, 
    bargap: 0.1, 
    barmode: 'relative', 
    autosize: true
  };
  Plotly.plot('pop-pyramid', {
    data: data,
    layout: layout 
  });








// // Create a lookup table to sort and regroup the columns of data,
// // first by year, then by continent:
//   var lookup = {};
//   function getData(year, sex) {
//     var byYear, trace;
//     if (!(byYear = lookup[year])) {;
//       byYear = lookup[year] = {};
//     }
// 	 // If a container for this year + continent doesn't exist yet,
// 	 // then create one:
//     if (!(trace = byYear[continent])) {
//       trace = byYear[continent] = {
//         y: [],
//         orientation: [],
//         name: [],
//         marker: (color='purple'),
//         hoverinfo: 'skip',
//       };
//       {
//         y: [],
//         orientation: [],
//         name: [],
//         marker: dict(color='plum'),
//         hoverinfo: 'skip',
//         x=-1 * menslist
//       };
//     }
//     return trace;
//   }

//   // Go through each row, get the right trace, and append the data:
//   for (var i = 0; i < data.length; i++) {
//     var datum = data[i];
//     var trace = getData(datum.year, datum.continent);
//     trace.text.push(datum.country);
//     trace.id.push(datum.country);
//     trace.x.push(datum.lifeExp);
//     trace.y.push(datum.gdpPercap);
//     trace.marker.size.push(datum.pop);
//   }

//   // Get the group names:
//   var years = Object.keys(lookup);
//   // In this case, every year includes every continent, so we
//   // can just infer the continents from the *first* year:
//   var firstYear = lookup[years[0]];
//   var continents = Object.keys(firstYear);

//   // Create the main traces, one for each continent:
//   var traces = [];
//   for (i = 0; i < continents.length; i++) {
//     var data = firstYear[continents[i]];
// 	 // One small note. We're creating a single trace here, to which
// 	 // the frames will pass data for the different years. It's
// 	 // subtle, but to avoid data reference problems, we'll slice
// 	 // the arrays to ensure we never write any new data into our
//    // lookup table:

//    /////// update with histogram variables
//     traces.push({
//       y: sex[i],
//       orientation: data.x.slice(),
//       name: data.y.slice(),
//       marker: (color='purple'),
//       hoverinfo: 'skip',
//       mode: 'markers',
//       },
//       {
//       y: sex[i],
//       orientation: data.x.slice(),
//       name: data.y.slice(),
//       marker: (color='plum'),
//       hoverinfo: 'skip',
//       mode: 'markers',
//       });
//   }

//   // Create a frame for each year. Frames are effectively just
//   // traces, except they don't need to contain the *full* trace
//   // definition (for example, appearance). The frames just need
//   // the parts the traces that change (here, the data).
//   var frames = [];
//   for (i = 0; i < years.length; i++) {
//     frames.push({
//       name: years[i],
//       data: continents.map(function (continent) {
//         return getData(years[i], continent);
//       })
//     })
//   }

//   // Now create slider steps, one for each frame. The slider
//   // executes a plotly.js API command (here, Plotly.animate).
//   // In this example, we'll animate to one of the named frames
//   // created in the above loop.
//   var sliderSteps = [];
//   for (i = 0; i < years.length; i++) {
//     sliderSteps.push({
//       method: 'animate',
//       label: years[i],
//       args: [[years[i]], {
//         mode: 'immediate',
//         transition: {duration: 300},
//         frame: {duration: 300, redraw: false},
//       }]
//     });
//   }

//   var layout = {
//     xaxis: {
//       title: 'Life Expectancy',
//       range: [30, 85]
//     },
//     yaxis: {
//       title: 'GDP per Capita',
//       type: 'log'
//     },
//     hovermode: 'closest',
// 	 // We'll use updatemenus (whose functionality includes menus as
// 	 // well as buttons) to create a play button and a pause button.
// 	 // The play button works by passing `null`, which indicates that
// 	 // Plotly should animate all frames. The pause button works by
// 	 // passing `[null]`, which indicates we'd like to interrupt any
// 	 // currently running animations with a new list of frames. Here
// 	 // The new list of frames is empty, so it halts the animation.
//     updatemenus: [{
//       x: 0,
//       y: 0,
//       yanchor: 'top',
//       xanchor: 'left',
//       showactive: false,
//       direction: 'left',
//       type: 'buttons',
//       pad: {t: 87, r: 10},
//       buttons: [{
//         method: 'animate',
//         args: [null, {
//           mode: 'immediate',
//           fromcurrent: true,
//           transition: {duration: 300},
//           frame: {duration: 500, redraw: false}
//         }],
//         label: 'Play'
//       }, {
//         method: 'animate',
//         args: [[null], {
//           mode: 'immediate',
//           transition: {duration: 0},
//           frame: {duration: 0, redraw: false}
//         }],
//         label: 'Pause'
//       }]
//     }],
// 	 // Finally, add the slider and use `pad` to position it
// 	 // nicely next to the buttons.
//     sliders: [{
//       pad: {l: 130, t: 55},
//       currentvalue: {
//         visible: true,
//         prefix: 'Year:',
//         xanchor: 'right',
//         font: {size: 20, color: '#666'}
//       },
//       steps: sliderSteps
//     }]
//   };

//   // Create the plot:
//   Plotly.newPlot('pop-pyramid', {
//     data: traces,
//     layout: layout,
//     frames: frames,
//   });
});
