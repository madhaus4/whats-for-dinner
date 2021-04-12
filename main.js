var sideOption = document.querySelector('#side');
var mainOption = document.querySelector('#mainDish');
var dessertOption = document.querySelector('#dessert');
var cookpotImg = document.querySelector('img');
var dish = document.querySelector('#displayId');
var youShouldMake = document.querySelector('#youShouldMake');
var menuItem = document.querySelector('#menuItem');
var letsCookBtn = document.querySelector('#lets-cook-btn');

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
    return foodItem = randomDishItem(sides);
  } else if (mainOption.checked) {
    return foodItem = randomDishItem(mains);
  } else if (dessertOption.checked) {
    return foodItem = randomDishItem(desserts);
  }
  console.log(foodItem);
}

function displayDish() {
  document.getElementById('menuItem').style.fontSize = '1.5em';
  menuItem.innerHTML += `${foodItem}! `;

  cookpotImg.classList.add('hidden');
  dish.classList.remove('hidden');
  youShouldMake.classList.remove('hidden');
  menuItem.classList.remove('hidden');
}
