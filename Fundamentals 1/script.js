// years of experience
let yearsOfExperience = new Date().getFullYear() - 2005;
console.log(yearsOfExperience)
document.querySelector("header > h2 > span").innerHTML = yearsOfExperience;
// Discounts
let discount = 25;
// Display discount rate
document.querySelector("body > main > section > div > article:nth-child(1) > a > span > span").innerHTML = discount;
document.querySelector("body > main > section > div > article:nth-child(2) > a > span > span").innerHTML = discount;
document.querySelector("body > main > section > div > article:nth-child(3) > a > span > span").innerHTML = discount;


// prices
let prices = [500,400,350 ]

// Discount rates 
let discountPriceWOD = prices[0] - (prices[0] * discount / 100);
console.log(discountPriceWOD) 
let discountPriceSOA = prices[1] - (prices[1] * discount / 100);
console.log(discountPriceSOA) 
let discountPriceMOA = prices[2] - (prices[2] * discount / 100);
console.log(discountPriceMOA) 

// New Discounts on prices

document.querySelector("#WOD").innerHTML = discountPriceWOD;
document.querySelector('#SOA').innerHTML = discountPriceSOA;
document.querySelector('#MOA').innerHTML = discountPriceMOA;

// Full package price

let fullPrice = discountPriceMOA + discountPriceSOA + discountPriceWOD;
document.querySelector('#fullPrice').innerHTML = fullPrice;

// Landing Page

let strYear = new Date().getFullYear() - 15;
let currYear = new Date().getFullYear();

document.querySelector('#startYr').innerHTML = strYear;
document.querySelector('#currYear').innerHTML = currYear;