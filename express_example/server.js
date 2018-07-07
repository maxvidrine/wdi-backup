// REQUIREMENTS
const express = require('express');
const app = express();

let burgers = ['Hamburger', 'Cheese Burger', 'Vegetable Burger'];
let tacos = ['Crunchy Taco', 'Soft Taco', 'Super Taco'];
// MIDDLEWARE provides a static folder available to the user
app.use(express.static('public'));

//ROUTES
app.get('/multiply', (request, response) => {
	let x = request.query.x;
	let y = request.query.y;
	let product = x * y;
	response.json({'product': product});
});
app.get("/api/burgers", (request, response) => {
	response.send({'burgers': burgers});
});
app.get("/tacos", (request, response) => {
	response.send({'tacos': tacos});
});
app.get("/greetings/:name", (request, response) => {
	response.send(`Hello ${request.params.name}`);
});
app.get("/picked/:color", (request, response) => {
	response.send(`You picked ${request.params.color}`);
});
app.get("/", (request, response) => {
	response.send('Hello World');
});

// SERVER START
app.listen(3000, () => {
  console.log("HTTP server listening at localhost:3000");
});