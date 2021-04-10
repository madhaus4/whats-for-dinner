
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
