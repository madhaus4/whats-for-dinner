var sideOption = document.querySelector('#side');
var mainOption = document.querySelector('#mainDish');
var dessertOption = document.querySelector('#dessert');
var cookpotImg = document.querySelector('img');
var youShouldMake = document.querySelector('#youShouldMake');
var menuItem = document.querySelector('#menuItem');
var letsCookBtn = document.querySelector('#lets-cook-btn');
var clearBtn = document.querySelector('#clearBtn');
var foodItem = '';

letsCookBtn.addEventListener('click', function() {
  populateDish();
  displayDish();
});
clearBtn.addEventListener('click', clearSelection);

function randomDishItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function populateDish() {
  event.preventDefault();
  if (sideOption.checked) {
    return foodItem = randomDishItem(sides);
  } else if (mainOption.checked) {
    return foodItem = randomDishItem(mains);
  } else if (dessertOption.checked) {
    return foodItem = randomDishItem(desserts);
  }
  alert('You didn\'t choose an option');
}

function displayDish() {
  cookpotImg.classList.add('visibility-hidden');
  youShouldMake.classList.remove('visibility-hidden');
  menuItem.classList.remove('visibility-hidden');
  clearBtn.classList.remove('visibility-hidden');
  menuItem.innerHTML += `<p>${foodItem}!</p>`;
}

function clearSelection() {
  var clearMenuItem = event.target.className('clear-btn');
  for (var i = 0; i < menuItem.length; i++) {
    menuItem.innerHTML += '';
  }
  // cookpotImg.classList.remove('visibility-hidden');
  // youShouldMake.classList.add('visibility-hidden');
  // menuItem.classList.add('visibility-hidden');
  // clearBtn.classList.add('visibility-hidden');

}
