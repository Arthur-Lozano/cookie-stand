'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookiesPerdayToday = new Array(15).fill(0);
var myForm = document.getElementById('addCookieStore');
var locationArray = [];
var parentElement = document.getElementById('table');


//Constructor function
function Store(name, minCustomers, maxCustomers, avgCookiesSold) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesSold = avgCookiesSold;
  this.cookiesSoldPerHour = [];
  this.dailyStoreSale = 0;
}
Store.prototype.randomCustomers = function () { //why the prototype before the constructor when proto is the stunt man?
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
};
Store.prototype.calcCookiesSoldPerHour = function () {
  console.log(this.cookiesSoldPerHour);
  if (this.cookiesSoldPerHour.length === 0) {
    for (var i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.ceil(this.randomCustomers() * this.avgCookiesSold);
      this.cookiesSoldPerHour.push(cookiesPerHour);
      this.dailyStoreSale += cookiesPerHour;
      cookiesPerdayToday[i] += cookiesPerHour;
      cookiesPerdayToday[cookiesPerdayToday.length - 1] += cookiesPerHour;
      // console.log('calculate cookies per hour');
    }

  }
};

Store.prototype.render = function () { // runs/generates a row for each object instantiated 
  this.calcCookiesSoldPerHour();
  var tr = document.createElement('tr'); // where the name goes 27 - 30
  var td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);
  for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {// - 36 are all the numbers
    var td = document.createElement('td');
    td.textContent = this.cookiesSoldPerHour[i];
    tr.appendChild(td); // make td add text put it to the row
  }
  var td = document.createElement('td');
  td.textContent = this.dailyStoreSale;
  tr.appendChild(td);
  parentElement.appendChild(tr);
};

function callHeader() {
  var tr = document.createElement('tr'); // where the name goes 27 - 30
  var td = document.createElement('td');
  td.textContent = '';
  tr.appendChild(td);
  //var tr = document.createElement('tr'); // created first instance of row
  for (var i = 0; i < hours.length; i++) {//6am -7pm
    td = document.createElement('td');
    td.textContent = hours[i];
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = 'total';
  tr.appendChild(td);
  parentElement.appendChild(tr);
}

// render everything
function renderAll() {
  console.log(locationArray);
  callHeader();
  for (var i = 0; i < locationArray.length; i++) {
    locationArray[i].render();
  }
  renderFooter();
}

// The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
var seattleStore = new Store('Seattle', 23, 65, 6.3);
locationArray.push(seattleStore);
var tokyoDrift = new Store('tokyoStore', 3, 24, 1.2);
locationArray.push(tokyoDrift);
var dubaiRich = new Store('dubai', 11, 38, 3.7);
locationArray.push(dubaiRich);
var parisOver = new Store('paris', 20, 38, 3.4);
locationArray.push(parisOver);
var limaLove = new Store('lima', 2, 16, 4.6);
locationArray.push(limaLove);


function renderFooter() {
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = 'Total';
  tr.appendChild(td);
  //var tr = document.createElement('tr');
  for (var k = 0; k < cookiesPerdayToday.length; k++) {//6am -7pm
    td = document.createElement('td');
    td.textContent = cookiesPerdayToday[k];
    tr.appendChild(td);
  }
  tr.appendChild(td);
  parentElement.appendChild(tr);
}
// Below is the event handler
myForm.addEventListener('submit', formSubmit);
function formSubmit(event) {
  event.preventDefault();
  var form = event.target;
  var cityName = form.cityName.value;
  var minCustomer = parseInt(form.minCustomer.value);
  var maxCustomer = parseInt(form.maxCustomer.value);
  var avgCookie = parseInt(form.avgCookie.value);

  locationArray.push(new Store(cityName, minCustomer, maxCustomer, avgCookie));
  parentElement.innerHTML = '';
  renderAll();
}
renderAll();

