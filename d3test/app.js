// create data array

// var data = [
// 	{'date':'1-May-12','rank':58.13},
// 	{'date':'30-Apr-12','rank':53.98},
// 	{'date':'27-Apr-12','rank':67.00},
// 	{'date':'26-Apr-12','rank':89.70},
// 	{'date':'25-Apr-12','rank':99.00},
// 	{'date':'24-Apr-12','rank':130.28},
// 	{'date':'23-Apr-12','rank':166.70},
// 	{'date':'20-Apr-12','rank':234.98},
// 	{'date':'19-Apr-12','rank':345.44},
// 	{'date':'18-Apr-12','rank':443.34},
// 	{'date':'17-Apr-12','rank':543.70},
// 	{'date':'16-Apr-12','rank':580.13},
// 	{'date':'13-Apr-12','rank':605.23},
// 	{'date':'12-Apr-12','rank':622.77},
// 	{'date':'11-Apr-12','rank':626.20},
// 	{'date':'10-Apr-12','rank':628.44},
// 	{'date':'9-Apr-12','rank':636.23},
// 	{'date':'5-Apr-12','rank':633.68},
// 	{'date':'4-Apr-12','rank':624.31},
// 	{'date':'3-Apr-12','rank':629.32},
// 	{'date':'2-Apr-12','rank':618.63},
// 	{'date':'30-Mar-12','rank':599.55},
// 	{'date':'29-Mar-12','rank':609.86},
// 	{'date':'28-Mar-12','rank':617.62},
// 	{'date':'27-Mar-12','rank':614.48},
// 	{'date':'26-Mar-12','rank':606.98},
// ];
var data = [
{date: "2/11/2018", rank: 9},
{date: "2/16/2018", rank: 2},
{date: "2/18/2018", rank: 31},
{date: "2/25/2018", rank: 1},
{date: "3/4/2018", rank: 1},
{date: "3/11/2018", rank: 1},
{date: "3/18/2018", rank: 35},
{date: "3/26/2018", rank: 5},
{date: "4/8/2018", rank: 2},
];

console.log(data);

// var data = [
// 	{'full_name': 'Biniam', 'avg_speed': 150.154},
// 	{'full_name': 'JP', 'avg_speed': 150.152},
// 	{'full_name': 'Riki', 'avg_speed': 150.157},
// 	{'full_name': 'Ben', 'avg_speed': 150.160},
// 	{'full_name': 'Max', 'avg_speed': 150.154},
// 	{'full_name': 'Troy', 'avg_speed': 150.153},
// 	{'full_name': 'Justin', 'avg_speed': 150.149},
// 	{'full_name': 'Kevin', 'avg_speed': 151.148},
// 	{'full_name': 'Aaron', 'avg_speed': 150.154},
// 	{'full_name': 'Dalton', 'avg_speed': 150.154},
// 	{'full_name': 'Teri', 'avg_speed': 150.153},
// 	{'full_name': 'Fanny', 'avg_speed': 150.152},
// 	{'full_name': 'June', 'avg_speed': 150.155},
// 	{'full_name': 'Sharon', 'avg_speed': 150.150},
// 	{'full_name': 'Chris', 'avg_speed': 150.146},
// 	{'full_name': 'Tina', 'avg_speed': 150.159},
// ];

// // WORKING

// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// parse the date / time
var parseTime = d3.timeParse("%m/%d/%Y");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.rank); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("div").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// format the data
data.forEach(function(d) {
  d.date = parseTime(d.date);
  d.rank = +d.rank;
});

// Scale the range of the data
x.domain(d3.extent(data, function(d) { return d.date; }));
y.domain([0, d3.max(data, function(d) { return d.rank; })]);

// Add the valueline path.
svg.append("path")
  .data([data])
  .attr("class", "line")
  .attr("d", valueline);

// Add the X Axis
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Add the Y Axis
svg.append("g")
  .call(d3.axisLeft(y));
