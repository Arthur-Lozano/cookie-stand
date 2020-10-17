'use strict';

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