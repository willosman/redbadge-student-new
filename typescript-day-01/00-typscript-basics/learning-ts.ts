let number1;
let name1;
let stringExample : string;
let boolExample : boolean;
let numberExample: number;
let unionStringNumber: number | string;
unionStringNumber = 5;
unionStringNumber = "5";

stringExample = "Hello"

//Type Inference

let number2 = 5;

let restaurant = {
    name: "McDonalds",
    dineIn: false,
    foodItems: ["hamburgers", "fries", "apple pie"]
};

restaurant.foodItems.forEach( (item) => {
    console.log(item.toUpperCase())
});

//write a function that takes 3 parameters

function buySellStock(stockName: string, qty: number | string, action: "sell-stock" | "buy-stock") {
    let total = Number(qty) * 15
    let status = action === "sell-stock" ? "sold" : "bought"

    return `You just ${status} ${qty} shares of ${stockName} Stock for a total of $${total}`
}


buySellStock("Bank of America", 15, "sell-stock");

interface IWeather{
    temp: number,
    cloudConditions: string,
    next5dayTemp: number[];
}

let weather: IWeather = {
    temp: 55,
    cloudConditions: "Cloudy",
    next5dayTemp: [81,74,79,81,81]
}

console.log(weather.cloudConditions)

// let weather = {
//     temp: 78,
//     cloudConditions: 'overcast',
//     next5dayTemp: [81,74,79,81,81]
// };