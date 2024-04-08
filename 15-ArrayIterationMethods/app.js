//9

function iki(arr1, arr2, char) {

    arr1.push(...arr2)
    console.log(arr1)
    return arr1.join(char)
}

let num1 = [1, 2]
let num2 = [3, 4]

console.log(iki(num1, num2, "*"))


//10


let students = [{ name: "Ali", scores: [90, 85, 92] },
{ name: "Davud", scores: [100, 100, 100] },
{ name: "Mammal", scores: [75, 80, 85] },
{ name: "Camil", scores: [90, 95, 85] }]



students.forEach(element => {

    let sum = element.scores.reduce((acc, value) => {
        return acc + value
    }, 0)
    let average = sum / element.scores.length
    return console.log(average)
});



//11

const webTechs = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "JS",
    "Redux",
    "Node",
    "JS",
    "MongDB",
];

let filteredTechs = webTechs.filter(element => element.length > 4);

console.log(filteredTechs);


//12
const products = [
    {
        id: 1,
        title: "Smartphone",
        description: "A high-end smartphone with the latest features.",
        price: 799.99,
    },
    {
        id: 2,
        title: "Laptop",
        description: "Powerful laptop with a large screen and fast processor.",
        price: 1299.99,
    },
    {
        id: 3,
        title: "Coffee Maker",
        description: "An automatic coffee maker with a built-in grinder.",
        price: 99.99,
    },
    {
        id: 4,
        title: "Headphones",
        description: "Wireless over-ear headphones with noise-cancellation.",
        price: 199.99,
    },
    {
        id: 5,
        title: "Smart TV",
        description: "55-inch 4K Smart TV with streaming apps built-in.",
        price: 699.99,
    },
];

let totalAverage = products.reduce((acc, product) => {
    return acc + product.price
}, 0) / products.length;
console.log(totalAverage)



//13
let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];


let filteredCountries = countries.filter(element => {
    let lowerElement = element.toLowerCase()
    if (lowerElement[0] === "a" && lowerElement[lowerElement.length - 1] === "a") {
        console.log(lowerElement)
    }
})



//14
function findNumberOfDivisors(value) {
    let count = 0
    for (let i = 0; i <= value; i++) {
        if (value % i == 0) {
            count++
            console.log(i)
        }

    }
    return count
}

console.log(findNumberOfDivisors(15))

//15
let text = "senin salam aleyKum demeyinnen bildim ki"
function findSpaceCounts(strg) {
    let count = 0;
    for (let i = 0; i < strg.length; i++) {
        if (strg[i] === " ") {
            count++;
        }
    }
    return count;

}
console.log(findSpaceCounts(text)
)