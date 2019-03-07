// from data.js
var tableData = data;

var tbody = d3.select("tbody");
tableData.forEach((report) => {
  var row = tbody.append("tr");
  Object.entries(report).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});
// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {

  // select all tr elements
  tbody.selectAll("td").remove();
  tbody.selectAll("tr").remove();

  tableData = data;
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element value and get the raw HTML node
  var datestr = d3.select("#datetime").property("value").trim();
  if (datestr) {
    console.log(datestr);
    tableData = tableData.filter(tableData => tableData.datetime === datestr); 
  }

  var city = d3.select("#city").property("value").trim();
  if (city) {
    console.log(city);
    tableData = tableData.filter(tableData => tableData.city === city); 
  }

  var state = d3.select("#state").property("value").trim();
  if (state) {
    console.log(state);
    tableData = tableData.filter(tableData => tableData.state === state); 
  }

  var country = d3.select("#country").property("value").trim();
  if (country) {
    console.log(country);
    tableData = tableData.filter(tableData => tableData.country === country); 
  }

  var shape = d3.select("#shape").property("value").trim();
  if (shape) {
    console.log(shape);
    tableData = tableData.filter(tableData => tableData.shape === shape); 
  }

  tableData.forEach((report) => {
        var row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
      });

});


