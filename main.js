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
  return array[Math.floor(Math.random() * array.length)];
}

function sample() {
  var mainDishItem = mains[randomDishItem(mains)];
  console.log(mainDishItem);
}

function populateDish() {
  event.preventDefault();
  cookpotImg.classList.add('hidden');
  youShouldMake.classList.remove('hidden');

  var foodItem = '';
  if (sideOption.checked) {
    foodItem = randomDishItem(sides);
  } else if (mainOption.checked) {
    foodItem = randomDishItem(mains);
  } else if (dessertOption.checked) {
    foodItem = randomDishItem(desserts);
  }
}
