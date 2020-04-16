// show that the JS file was loaded
console.log("loaded stacked.js");

// query the endpoint
d3.json("/age_stacked_area_data").then(function(data) {
    // inspect the JSON
    console.log(data);

    function filteredAgeRange(young) {
        return young.year = 1950;
    }

    var filteredAges = 
    // need to get loop through the dictionary to create arrays
    var yearStart = 1950;
    var yearEnd = 2015
    var array = [];
    // I need 3 value sets though - how does that happen?
    for (var i = yearStart; i <- yearEnd; i++) {
        array.push(i);
    };

    keys = Object.keys(data);
    values = Object.values(data);

    // create the trace
    var trace = {
        x: keys,
        y: values,
        type: "line"
    };

    // put the trace into an array
    var data = [trace];

    // defines the layout object
    var layout = {
        title: "working age dependency ratio",
        xaxis: { title: "Year"},
        yaxis: { title: "Count"}
    };

    // make the plot
    Plotly.newPlot("stacked-area", data, layout);


    // make the year selection function / event handler?
    d3.selectAll("button").on("click", function() {
        // create year selection function
        console.log(this);
    });
});
// // Stub - test to confirm 
// function DrawStacked(yearId)
// {
//     // name of function and parameter called
//     console.log(`Calling DrawStacked(${yearId})`);
    
//     // call data
//     d3.json("age_population").then((data) => {
//         // define data
//         var years = data.years;
//         // filter data to match year
//         var resultArray = years.filter(s => s.id == yearId);
//         // take first result
//         var result = resultArray[0];
//         // get variables
//         var year_ids = result.year_ids;
//         var age_labels = result.age_labels;
//         var count_values = result.count_values;