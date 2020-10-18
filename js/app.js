'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(name, minCustomers, maxCustomers, avgCookiesSold) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesSold = avgCookiesSold;
  this.cookiesSoldPerHour = [];
  this.dailyStoreSale = 0;
}
Store.prototype.randomCustomers = function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
};
Store.prototype.calcCookiesSoldPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = Math.ceil(this.randomCustomers() * this.avgCookiesSold);
    this.cookiesSoldPerHour.push(cookiesPerHour);
    this.dailyStoreSale += cookiesPerHour;
    // console.log('calculate cookies per hour');
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
var parentElement = document.getElementById('table');
var tr = document.createElement('tr'); // where the name goes 27 - 30
var td = document.createElement('td');
td.textContent = '';
tr.appendChild(td);
//var tr = document.createElement('tr'); // created first instance of row
for (var i = 0; i < hours.length; i++) {//6am -7pm
  var td = document.createElement('td');
  td.textContent = hours[i];
  tr.appendChild(td);
}
var td = document.createElement('td');
td.textContent = 'total';
tr.appendChild(td);
parentElement.appendChild(tr);
var seattleStore = new Store('Seattle', 23, 65, 6.3);
var tokyoDrift = new Store('tokyoStore', 3, 24, 1.2);
var dubaiRich = new Store('dubai', 11, 38, 3.7);
var parisOver = new Store('paris', 20, 38, 3.4);
var limaLove = new Store('lima', 2, 16, 4.6);


seattleStore.render();
tokyoDrift.render();
dubaiRich.render();
parisOver.render();
limaLove.render();



/*
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var ParentElement = document.getElementById('cookie-stand');
var seattleUL = document.getElementById('seattle');
var tokyoUL = document.getElementById('tokyo');
var dubaiUL = document.getElementById('dubai');
var parisUL = document.getElementById('paris');
var limaUL = document.getElementById('lima');

var seattle = {
  name: ('Seattle'),
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesSold: 6.3,
  cookiesSoldPerHour: [],
  dailyStoreSales: 0,
  randomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  calcCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.ceil(this.randomCustomers() * this.avgCookiesSold);
      this.cookiesSoldPerHour.push(cookiesPerHour);
      this.dailyStoreSales += cookiesPerHour;
      // console.log('calculate cookies per hour');
    }
  },
  render: function () {
    this.calcCookiesSoldPerHour();
    // console.log('render the list');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `Total: ${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
      seattleUL.appendChild(li);
    }
  }
};

var tokyo = {
  name: ('Tokyo'),
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesSold: 1.2,
  cookiesSoldPerHour: [],
  dailyStoreSales: 0,
  randomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  calcCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.ceil(this.randomCustomers() * this.avgCookiesSold);
      this.cookiesSoldPerHour.push(cookiesPerHour);
      this.dailyStoreSales += cookiesPerHour;
      // console.log('calculate cookies per hour');
    }
  },
  render: function () {
    this.calcCookiesSoldPerHour();
    // console.log('render the list');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `Total: ${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
      tokyoUL.appendChild(li);
    }
  }
};

var dubai = {
  name: ('Dubai'),
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesSold: 3.7,
  cookiesSoldPerHour: [],
  dailyStoreSales: 0,
  randomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  calcCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.ceil(this.randomCustomers() * this.avgCookiesSold);
      this.cookiesSoldPerHour.push(cookiesPerHour);
      this.dailyStoreSales += cookiesPerHour;
      // console.log('calculate cookies per hour');
    }
  },
  render: function () {
    this.calcCookiesSoldPerHour();
    // console.log('render the list');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `Total: ${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
      dubaiUL.appendChild(li);
    }
  }
};

var paris = {
  name: ('Paris'),
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesSold: 2.3,
  cookiesSoldPerHour: [],
  dailyStoreSales: 0,
  randomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  calcCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.ceil(this.randomCustomers() * this.avgCookiesSold);
      this.cookiesSoldPerHour.push(cookiesPerHour);
      this.dailyStoreSales += cookiesPerHour;
      // console.log('calculate cookies per hour');
    }
  },
  render: function () {
    this.calcCookiesSoldPerHour();
    // console.log('render the list');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `Total: ${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
      parisUL.appendChild(li);
    }
  }
};

var lima = {
  name: ('Lima'),
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesSold: 4.6,
  cookiesSoldPerHour: [],
  dailyStoreSales: 0,
  randomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  calcCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.ceil(this.randomCustomers() * this.avgCookiesSold);
      this.cookiesSoldPerHour.push(cookiesPerHour);
      this.dailyStoreSales += cookiesPerHour;
      // console.log('calculate cookies per hour');
    }
  },
  render: function () {
    this.calcCookiesSoldPerHour();
    // console.log('render the list');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `Total: ${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
      limaUL.appendChild(li);
    }
  }
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


var ParentElement = document.getElementById('table')
var tr = document.createElement('tr')
var td = document.createElement('td')
var seattle*/