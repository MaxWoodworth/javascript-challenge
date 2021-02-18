// from data.js
var tableData = data;
console.log("data :: ", data);
// YOUR CODE HERE!
const tableBody = d3.select("#ufo-table tbody");

// tableBody.html = "";
//let tableRow = tableBody.append("tr");
//const col2Data = {
 // Date: "datetime",
  //City: "city",
 // State: "state",
  //Country: "country",
 // Shape: "shape",
  //Duration: "durationMinutes",
 // Comments: "comments",
//};

//const cols = [
  //"Date",
 // "City",
  //"State",
 // "Country",
 // "Shape",
  //"Duration",
  //"Comments",
//];
//Start Loop
data.forEach((dataRow) => {
  const row = tablebody.append("tr");
  Object.defineProperties(datarow).forEach((value) => {
   var cell = row.append("td");
    cell.text(value);
  });
});

//data.forEach((dataRow) => {
  //let tableRow = tableBody.append("tr");
 // cols.forEach((col) => tableRow.append("th").text(dataRow[col2Data[col]]));
//});

//Button time, userimput will denote the date entered
let userimput = data;
//change name of button from filter_btn to button
let button = d3.select("#but");
let form = d3.select("#form");

//handlers
button.on("click", runEnter);
form.on("click", runEnter);

//add final function to create new outputed table
function runEnter() {
  //keep page from reseting
  d3.event.preventDefault();
  //select input and get html node
  var inputElement = de.select("#datetime");
  //value of property input value
  var inputvalue = inputElement.property("value");
  console.log(userinput)
  console.log(inputvalue)
}