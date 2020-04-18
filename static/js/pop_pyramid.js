console.log("Loaded pop_pyramid.js");

// starter templates
// https://plotly.com/~etpinard/7625.js
// https://plotly.com/javascript/gapminder-example/

// Stub - test to confirm that you called it
function DrawPopPyramid(sampleYear) 
{
    // name of function and parameter called
    console.log(`Calling DrawPopPyramid(${sampleYear})`);

    // call data
    d3.json("/pop_pyramid_data").then((data1) => {

      
      // filter data to match sampleYear
      var resultArray = data1.filter(x => x.year == sampleYear);
      
      console.log(resultArray);
    
      // take first result
      var men_result = resultArray[0];
      var women_result = resultArray[1];

      //console.log(men_result);
      //console.log(women_result);

      // get variables
      var men_y_axis = Object.keys(men_result);
      var men_y_data = men_y_axis.slice(2, 23);
      var men_x_axis = Object.values(men_result);
      var men_x_data = men_x_axis.slice(2, 23);

      //console.log(men_y_data)
      //console.log(men_x_data)

      var tickers = men_y_data
      var women_y_axis = Object.keys(women_result);
      var women_y_data = women_y_axis.slice(2, 23);
      var women_x_axis = Object.values(women_result);
      var women_x_data = women_x_axis.slice(2, 23);
      var women_x_data_neg = women_x_data.map(x => -x);

      //console.log(women_y_data)
      //console.log(women_x_data_neg)



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

      var popdata = [trace1, trace2];

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

      //  create new plot (clears old plot)
      Plotly.newPlot('pop-pyramid', {
        data: popdata,
        layout: layout 
      });
  });
}


// Eventhandler Stub
function optionChanged(newSampleYear)
{
    // test if eventhandler is working
    console.log(`User selected ${newSampleYear}`)
  
    // call functions 
    DrawPopPyramid(newSampleYear);
}



function InitDashboard()
{
    console.log("Initializing Dashboard");

    // find selector
    var selector = d3.select("#selDataset");

    // populate selector
    d3.json("/pop_pyramid_data").then((data1) => {

      // test if data loads
      //console.log(data1);
        
      // populate dropdown box
      var year_Array = [];
      year_Array = data1.map(x => x.year);
      
      //console.log(year_Array);
      

      // for each sample id, 
      year_Array.forEach((sampleYear) => {
            //
            selector.append("option")
                .text(sampleYear)
                // set value property to be sampleId
                .property("value", sampleYear);
        }); 
        
        var sampleYear = year_Array[0];
        console.log(sampleYear)

        // call functions 
        DrawPopPyramid(sampleYear);
    });
}

InitDashboard();
