var sideOption = document.querySelector('#side');
var mainOption = document.querySelector('#mainDish');
var dessertOption = document.querySelector('#dessert');
var cookpotImg = document.querySelector('img');
var youShouldMake = document.querySelector('#youShouldMake');
var menuItem = document.querySelector('#menuItem');

var letsCookBtn = document.querySelector('#lets-cook-btn');
var clearBtn = document.querySelector('#clearBtn');

//letsCookBtn.addEventListener('click', populateDish);
letsCookBtn.addEventListener('click', function() {
  populateDish();
  displayDish();
});

function randomDishItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var foodItem = '';
function populateDish() {
  event.preventDefault();
  if (sideOption.checked) {
    foodItem = randomDishItem(sides);
  } else if (mainOption.checked) {
    foodItem = randomDishItem(mains);
  } else if (dessertOption.checked) {
    foodItem = randomDishItem(desserts);
  }
  console.log(foodItem);
}

function displayDish() {
  //console.log(mealSelection);
  //foodItem = meal[randomDishItem(meal)];
  cookpotImg.classList.add('visibility-hidden');
  youShouldMake.classList.remove('visibility-hidden');
  menuItem.classList.remove('visibility-hidden');
  clearBtn.classList.remove('visibility-hidden');
  menuItem.innerHTML += `<p>${foodItem}</p>`
}
