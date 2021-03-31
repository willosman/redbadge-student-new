// "use strict";
// var number1;
// var name1;
// var stringExample;
// var boolExample;
// var numberExample;
// var unionStringNumber;
// unionStringNumber = 5;
// unionStringNumber = "5";
// stringExample = "Hello";
// //Type Inference
// var number2 = 5;
// var restaurant = {
//     name: "McDonalds",
//     dineIn: false,
//     foodItems: ["hamburgers", "fries", "apple pie"]
// };
// restaurant.foodItems.forEach(function (item) {
//     console.log(item.toUpperCase());
// });
// //write a function that takes 3 parameters
// function buySellStock(stockName, qty, action) {
//     var total = Number(qty) * 15;
//     var status = action === "sell-stock" ? "sold" : "bought";
//     return "You just " + status + " " + qty + " shares of " + stockName + " Stock for a total of $" + total;
// }
// buySellStock("Bank of America", 15, "sell-stock");
// var weather = {
//     temp: 55,
//     cloudConditions: "Cloudy",
//     next5dayTemp: [81, 74, 79, 81, 81]
// };
// console.log(weather.cloudConditions);
// let weather = {
//     temp: 78,
//     cloudConditions: 'overcast',
//     next5dayTemp: [81,74,79,81,81]
// };

let url = 'https://api.magicthegathering.io/v1/cards'

function fetchMTG() {
    fetch(url) 
    .then((res) => res.json())
    .then((json) => console.log(json.cards))
}

fetchMTG()
