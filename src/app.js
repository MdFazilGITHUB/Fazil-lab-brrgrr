// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let Patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    Patty.style.display = "inherit";
  } else {
    Patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let Cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    Cheese.style.display = "inherit";
  } else {
    Cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let Tomatoes = document.querySelector("#tomato");
  if (state.Tomatoes) {
    Tomatoes.style.display = "inherit";
  } else {
    Tomatoes.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let Onions = document.querySelector("#onion");
  if (state.Onions) {
    Onions.style.display = "inherit";
  } else {
    Onions.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let Lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    Lettuce.style.display = "inherit";
  } else {
    Lettuce.style.display = "none";
  } 
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll(); 
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons(){
  document.querySelector(".btn-patty").classList.toggle("active",state.Patty)
  document.querySelector(".btn-cheese").classList.toggle("active",state.Cheese)
  document.querySelector(".btn-tomatoes").classList.toggle("active",state.Tomatoes)
  document.querySelector(".btn-onions").classList.toggle("active",state.Onions)
  document.querySelector(".btn-lettuce").classList.toggle("active",state.Lettuce)
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(){
  let Patty1 = document.querySelector("#patty1")
  if (state.Patty) {
    Patty1.style.display = "inherit"
  } else {
    Patty1.style.display = "none"
  }

  let Cheese1 = document.querySelector("#cheese1")
  if (state.Cheese) {
    Cheese1.style.display = "inherit"
  } else {
    Cheese1.style.display = "none"
  }

  let Tomatoes1 = document.querySelector("#tomato1")
  if (state.Tomatoes) {
    Tomatoes1.style.display = "inherit"
  } else {
    Tomatoes1.style.display = "none"
  }

  let Onion1 = document.querySelector("#onion1")
  if (state.Onions) {
    Onion1.style.display = "inherit"
  } else {
    Onion1.style.display = "none"
  }

  let Lettuce1 = document.querySelector("#lettuce1")
  if (state.Lettuce) {
    Lettuce1.style.display = "inherit"
  } else {
    Lettuce1.style.display = "none"
  }
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
var sum = 20

function renderPrice(){
  var price = wholeWheatBun*2;

  if(state.Patty){
    price+=ingredients.Patty;
  }

  if(state.Cheese){
    price+=ingredients.Cheese;
  }

  if(state.Tomatoes){
    price+=ingredients.Tomatoes;
  }

  if(state.Onions){
    price+=ingredients.Onions;
  }

  if(state.Lettuce){
    price+=ingredients.Lettuce;
  }

  document.querySelector("#price-details").innerHTML = "INR "+ " " + price;
}