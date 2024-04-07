let arr = [3, 8, 2, 5, 4, 10, 7, 6]

// 8.arrayin tek elemeinitin indeksi

for (let i = 0; i < arr.length; i ++) {
    if (arr[i] % 2 != 0) {
        console.log(i)
    }
}

// 9.arrayin tek  indeksli elementi


for (let i = 0; i < arr.length; i ++) {
    if (i % 2 != 0) {
        console.log(arr[i])
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
