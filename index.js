// UI Logic

let dates = [];
const clickCounter = document.getElementById('clickCounter');
let theCount = document.getElementById('clickCounter');
let deleteBtn = document.getElementById('delete-btn');
let history = document.getElementById('history');
const datesFromLocalStorage = JSON.parse(localStorage.getItem('dates'));

if (datesFromLocalStorage) {
  dates = datesFromLocalStorage;
  render(dates);
} else {
  clickCounter.innerHTML = 0;
}

function incrementBtn() {
  var mySound = new Audio('gamerMoment.mp3');
  mySound.play();
  dates.push(new Date());
  localStorage.setItem('dates', JSON.stringify(dates));
  render(dates);
  clickCounter.innerHTML = dates.length;
}

function render(date) {
  let listItems = '';
  for (let i = 0; i < date.length; i++) {
    listItems += `
          <li>
              <p>
                  ${date[i]}
              </p>
          </li>
      `;
  }
  history.innerHTML = listItems;
  clickCounter.innerHTML = dates.length;
}
deleteBtn.addEventListener('click', function () {
  localStorage.clear();
  dates = [];
  render(dates);
});

// Store Locally!!!

// moment = new Date()
// localStorage.setItem('date', moment);

// function increment() {
//   if(typeof(Storage) !== "undefined") {
//       if (localStorage.clickcount) {
//           localStorage.clickcount = Number(localStorage.clickcount)+1;
//       } else {
//           localStorage.clickcount = 1;
//       }
//       document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
//   } else {
//       document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
//   }
// }
