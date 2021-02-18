// from data.js
const tableData = data;

// YOUR CODE HERE!
const tbody = d3.select("tbody");

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
function table(data) {
  
//Without this reset it kept adding the extra table on to the arleady existing table.  
  tbody.html("");

//simple error I wasnt paying attention to the caps in the R in row
  //Start Loop
  data.forEach((dataRow) => {
    const row = tbody.append("tr");
    Object.values(dataRow).forEach((value) => {
    let cell = row.append("td");
     cell.text(value);
    });
  });
}
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
  //d3.event.preventDefault();
  //select input and get html node
  const date = d3.select("#datetime").property("value");
  //value of property input value
  //var inputvalue = inputElement.property("value");
  //console.log(userinput)
  //console.log(inputvalue)
  let finaltable = tableData;
  if (date) {
    finaltable = finaltable.filter(row => row.datetime === date);
  }
    table(finaltable);
}
d3.selectAll("#but").on("click", runEnter);
table(tableData);