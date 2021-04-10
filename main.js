// when a user clicks letsCookBtn,
// a random dish is populated from the list of possible dishes for that category
// when the dish is displayed, the cookpot img is hidden

// var randomSide = sides[Math.floor(Math.random() * sides.length)];
// var randomMain = mains[Math.floor(Math.random() * mains.length)];
// var randomDessert = desserts[Math.floor(Math.random() * desserts.length)];

var sideOption = document.querySelector('#side');
var mainOption = document.querySelector('#mainDish');
var dessertOption = document.querySelector('#dessert');
var cookpotImg = document.querySelector('#sectionId');
var youShouldMake = document.querySelector('#displayId');

var letsCookBtn = document.querySelector('#lets-cook-btn');

letsCookBtn.addEventListener('click', populateDish);

function randomDishItem(array) {
  array[Math.floor(Math.random() * array.length)];
}

function sample() {
  var mainDishItem = mains[randomDishItem(mains)];
  console.log(mainDishItem);
}

function populateDish() {
  cookpotImg.classList.add('hidden');
  youShouldMake.classList.remove('hidden');

console.log(randomDishItem(sides));
}


//
// console.log(sides);
// console.log(mains);
// console.log(desserts);


// if side is selected, display item from sides array
// create for loop to cycle through sides array
// if main is selected, display item from mains array
// create for loop to cycle through mains array
// if dessert is selected, display item from desserts array
// create for loop to cycle through desserts

// nvm use .random
