let arr = [3, 8, 2, 5, 4, 10, -40, 7, 6, 16, 8]

// 8.arrayin tek elemeinitin indeksi

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        // console.log(i)
    }
}

// 9.arrayin tek  indeksli elementi


for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
        // console.log(arr[i])
    }
}


// 10.arrayin  max elementi


let max = arr[0]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}
// console.log(max)


// 11.arrayin  max elementi


let maxEven = arr[0]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        if (arr[i] > maxEven) {
            maxEven = arr[i]
        }

    }
}
// console.log(maxEven)



//12. Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.

let min = Infinity
let index;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] < min) {
        min = arr[i]
        index = i

    }

}
//console.log(index)



//13. Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin

let min2 = arr[0]
let minIndex = 0

for (let i = 0; i < arr.length; i++) {

    if (arr[i] < min2) {
        min2 = arr[i]
        minIndex = i
    }
}


let max2 = arr[0]
let maxIndex = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max2) {
        max2 = arr[i]
        maxIndex = i
    }
}

let holder = arr[minIndex]
arr[minIndex] = arr[maxIndex]
arr[maxIndex] = holder
//console.log(arr)






//14. Verilmiş array-in  cüt elementlərinin min elementi ilə tək elementlərinin max elementinin yerini dəyişən proqram tərtib edin





let minEven = arr[0]
let minEvenIndex = 0

for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 == 0) {
        if (arr[i] < minEven) {
            minEven = arr[i]
            minEvenIndex = i
        }

    }

}


let maxOdd = arr[0]
let maxOddIndex = 0

for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 != 0) {
        if (arr[i] > maxOdd) {
            maxOdd = arr[i]
            maxOddIndex = i
        }
    }

}

let holder2 = arr[minEvenIndex]
arr[minEvenIndex] = arr[maxOddIndex]
arr[maxOddIndex] = holder2
// console.log(arr)



//15. Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.
let found;
let n = 78
for (let i = 0; i < arr.length; i++) {

    if (arr[i] === n) {
        found = true
    }
}


// if (found) {
//     console.log(`${n} is in the array.`);
// } else {
//     console.log(`${n} is not in the array.`);
// }






//16. Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.

let arr1 = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", "eshedu", 182, 4]





let minArr1 = Infinity;
let maxArr1 = -Infinity;

let sum = 0;


for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === 'number' && !isNaN(arr1[i])) {
        if (arr1[i] < min) {
            min = arr1[i];
        }
        if (arr1[i] > max) {
            max = arr1[i];
        }
        sum += arr1[i];
    }
}

sum -= min + max;

// console.log("Sum of remaining elements:", sum);





//17. Verilmiş array-in bool tipinde olan elementin qonsu elementlerini ekrana cixaran proqram yazin


let indexOfBooleanBefore;
let indexOfBooleanAfter;


for (let i = 0; i < arr1.length; i++) {

    if (typeof arr1[i] == "boolean") {
        indexOfBooleanBefore = i - 1
        indexOfBooleanAfter = i + 1
    }
}

// console.log(arr1[indexOfBooleanBefore])
// console.log(arr1[indexOfBooleanAfter])



//18. Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın


let maxLength = ''


for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === 'string') {
        if (arr1[i].length > maxLength.length) {
            maxLength = arr1[i]
        }
    }

}
// console.log(maxLength)





//19. Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.




