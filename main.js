var sideOption = document.querySelector('#side');
var mainOption = document.querySelector('#mainDish');
var dessertOption = document.querySelector('#dessert');
var cookpotImg = document.querySelector('#cookpotImg');
var youShouldMake = document.querySelector('#youShouldMake');
var menuItem = document.querySelector('#menuItem');

var letsCookBtn = document.querySelector('#lets-cook-btn');
var clearBtn = document.querySelector('#clearBtn');

//letsCookBtn.addEventListener('click', populateDish);
letsCookBtn.addEventListener('click', populateDish);


function randomDishItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// function populateDish() {
//   event.preventDefault();
//   var foodItem = '';
//   if (sideOption.checked) {
//     foodItem = randomDishItem(sides);
//   } else if (mainOption.checked) {
//     foodItem = randomDishItem(mains);
//   } else if (dessertOption.checked) {
//     foodItem = randomDishItem(desserts);
//   }
//   console.log(foodItem);
//   return foodItem;
//   displayDish();
// }

function populateDish() {
  event.preventDefault();
  if (sideOption.checked) {
    displayDish(sides);
  } else if (mainOption.checked) {
    displayDish(mains);
  } else if (dessertOption.checked) {
    displayDish(desserts);
  }
}

var mealSelection = '';
function displayDish(meal) {
  mealSelection = meal[randomDishItem(meal)];
  cookpotImg.classList.add('visibility-hidden');
  youShouldMake.classList.remove('visibility-hidden');
  menuItem.classList.remove('visibility-hidden');
  clearBtn.classList.remove('visibility-hidden');
  cookpotImg.innerHTML += `<p>${mealSelection}</p>`
}
