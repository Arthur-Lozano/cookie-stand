'use strict'


//Create object(s) - Number One below
var hoursOp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
var myCookies = ['16 cookies', '20 cookies', '35 cookies', '48 cookies', '56 cookies', '77 cookies', '93 cookies', '144 cookies', '119 cookies', '84 cookies', '61 cookies', '23 cookies', '42 cookies', '57 cookies', 'Total: 875 cookies'];
// First object with given data and properties
//2. the render needs to be a method of the object
// render article with h2, p, ul with list, img

var seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avgCookie: 6.3, // Simulated amount of cookies purchased
  cookiesPerHrArray: [],
  totalSale: 0,
  // Uses a method of that object to generate a random number of customers per hour.
  // Helper function to get random number, code used from mdn docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomCustomer: function () {
    for (var i = 0; i < hoursOp.length; i++) {
      var customerTotal = randomNumber(this.min, this.max);
      var simulatedAmtCookies = math.floor(this.avgCookie * customerTotal);
      this.totalSale += simulatedAmtCookies;
      this.cookiesPerHrArray.push(simulatedAmtCookies);
    }
  },

  render: function(){
    this.randomCustomer();

  //1. render to the DOM
  var parentElement = document.getElementById('cityCookie');
  //Shows everything within the getElement method within the console - console.log(parentElement);


  // When creating elements there is a pattern
  // Create element
  // give it content
  // append to the DOM
  var article = document.createElement('article');
  parentElement.appendChild(article); //Created Element and appended to the DOM which can be viewed in the browser developer window, the $0 shows it was created in Javascript not HTML

  // A little easier to make variable name similar to element created
  var h2 = document.createElement('h2');// h2 is an object
  h2.textContent = seattle.name;//So it has properties such as textContent
  article.appendChild(h2);

  var p = document.createElement('p');
  p.textContent = `${seattle.name} is an expensive city for cookies ${seattle.maxHours}`;
  article.appendChild(p);

  var ul = document.createElement('ul');
  article.appendChild(ul);

  //most relevant part of lab-06
  for(var i = 0; i<hoursOp.length; i++) {
    var li = document.createElement('li');
li.textContent = hoursOp[i];
ul.appendChild(li);
}
  };



