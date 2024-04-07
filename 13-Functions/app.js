// 21. 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.


function sum(a, b,) {
    return a + b
}

function multiplication(a, b) {
    return a * b
}

function substraction(a, b) {
    return a - b
}

function division(a, b) {
    return a / b
}




//22. Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.







//23. Sadəcə ölkə adlarının olduğu array-ı return edən funksiya yazın
// let country = []



//28. Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran proqram yazın.



let array = [1, 5, 87, 1, 35, 88]
let powerArray = []

for (let i = 0; i < array.length; i++) {
    array[i] = array[i] ** 2
    powerArray.push(array[i])
}
// console.log(powerArray)



//29. Array-in müsbət elementlərinin cəmini tapan funksiya yazın. Əgər array-in bütün elementləri     mənfidirsə geriyə 0 qaytarsın.

// let array = [1, -34, 5, 87, -589, -21, 1, 35, 88, -3]
let minusArray = [-5, -3, -543]
function sumOfPositive(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }

    }
    return sum
}
// console.log(sumOfPositive(array));
// console.log(sumOfPositive(minusArray));


//30. Array-in median və ədədi ortasını obyekt tərkibində return edən funksiya yazın. Median- ən kiçik     element ilə ən böyük elementin ədədi ortasıdır.

// let array = [1, -34, 5, 87, -589, -21, 1, 35, 88, -3]



function MedianAndAverage(arr) {
    let Maxvalue = arr[0]
    let Minvalue = arr[0]
    let count = 0;
    let sum = 0;
    let max;
    let min;
    let objArray = []
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        count++
        sum += arr[i]
        if (arr[i] > Maxvalue) {
            Maxvalue = arr[i]
            max = arr[i]
            continue
        }
        if (arr[i] < Minvalue) {
            Minvalue = arr[i]
            min = arr[i]
            continue
        }
    }
    console.log(sum)
    console.log(count)
    let median = (max + min) / 2;
    let average = sum / count;
    obj.median = median;
    obj.average = average;
    objArray.push(obj)
    return obj
}


// console.log(MedianAndAverage(array))







//31. Hər hansı bir cümlədə istənilən  baş hərflə olan simvolları birləşdirib qaytaran funksiya         yazın. "My name is Gurban" - "MniG"
let text = "My name is Yaqub"
function writeFirstLetters(str) {
    let words = str.split(" ");

    let firstLetters = "";


    for (let i = 0; i < words.length; i++) {
        let firstLetter = words[i][0];
        firstLetters += firstLetter;
    }

    return firstLetters;
}


// console.log(writeFirstLetters(text))




//32. Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o         qısaldılmır. İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı     yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. Məsələn qurban-q4n, stəkan-s4n, javascript-    j8t

//let text = "My name is Yaqub elhemdurillah"


function reduction(strg) {

    let words = strg.split(" ");

    let newWord = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 4) {
            newWord.push(words[i].charAt(0) + (words[i].length - 2) + words[i][words[i].length - 1])
        } else {
            newWord.push(words[i])
        }

    }
    return newWord
}
// console.log(reduction(text))




//33. İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var. Ən az yaşı olan     ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array şəklində qaytaran funksiya     yazın. Məsələn - [13,67,54]

let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 },
    { name: "David", age: 35 }
];


function ageReturner(arr) {
    let minAge = Infinity;
    let maxAge = -Infinity;
    let min;
    let max;
    let array = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age < minAge) {
            minAge = arr[i].age
            min = arr[i].age
        }
        if (arr[i].age > maxAge) {
            maxAge = arr[i].age
            max = arr[i].age

        }

    }
    array.push(min)
    array.push(max)
    array.push(min - max)
    console.log(array)
}

// ageReturner(people)





//34. N faktorialı hesaplayan funksiya yazın.


function factorial(x) {
    let multiple = 1;


    for (let i = 2; i <= x; i++) {
        multiple *= i

    }
    return multiple
}
// console.log(factorial(5))