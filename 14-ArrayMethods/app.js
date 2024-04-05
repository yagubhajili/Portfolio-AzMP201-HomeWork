let students = [
    {
        id: 1,
        name: "Nurane",
        surname: "Ismayilzade",
        age: 21,
        hobbies: ["music", "walking", "watchingfilm"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "cavid" },
            { id: 4, name: "alisa" },
        ],
        loginDetail: { username: "nurana21", password: "nunu123" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 88,
        salaryAZN: 144,
    },
    {
        id: 2,
        name: "Gizilgul",
        surname: "Allahverdiyeva",
        age: 20,
        hobbies: ["book", "writing code"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "babaxan" },
            { id: 4, name: "gulshen" },
        ],
        loginDetail: { username: "allahverdieva1", password: "salam123" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: false,
        avgPoint: 70,
        salaryAZN: 100,
    },
    {
        id: 3,
        name: "Xanim",
        surname: "Nuriyeva",
        age: 21,
        hobbies: ["book", "music"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "hikmet" },
            { id: 4, name: "gulsen" },
        ],
        loginDetail: { username: "xanim123", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 80,
        salaryAZN: 145,
    },
    {
        id: 4,
        name: "Minaya",
        surname: "Binnetova",
        age: 21,
        hobbies: ["book", "gaming", "movie", "music"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "anar" },
        ],
        loginDetail: { username: "binnetova", password: "hello123" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 90,
        salaryAZN: 142,
    },
    {
        id: 5,
        name: "Sabina",
        surname: "Hatamli",
        age: 21,
        hobbies: ["shopping", "listen to music"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "Mirvari" },
        ],
        loginDetail: { username: "sebine123", password: "salam123" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: false,
        avgPoint: 81,
        salaryAZN: 146,
    },

    {
        id: 6,
        name: "Ləman",
        surname: "Şamilova",
        age: 20,
        hobbies: [
            "watching movies",
            "reading books",
            "painting",
            " walking",
            " listen to music",
        ],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
        ],
        loginDetail: { username: "lemanshamilova", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 85.8,
        salaryAZN: 145,
    },
    {
        id: 7,
        name: "Narmin",
        surname: "Musayeva",
        age: 21,
        hobbies: ["book", "gaming", "painting", "walking"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "fidan" },
            { id: 4, name: "Irada" },
        ],
        loginDetail: {
            username: "narmin0",
            password: "narmin01",
        },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 80,
        salaryAZN: 196,
    },

    {
        id: 8,
        name: "Fatima",
        surname: "Akhundzada",
        age: 20,
        hobbies: ["drawing", "sleeping"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "Valida" },
        ],
        loginDetail: { username: "aynur123", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: false,
        avgPoint: 76,
        salaryAZN: 100,
    },
    {
        id: 9,
        name: "Elmir",
        surname: "Huseynov",
        age: 21,
        hobbies: ["book", "ice skating", "Tennis", "Karting"],
        student: true,
        teacher: [
            { id: 1, name: "Gurban" },
            { id: 2, name: "Hajar" },
            { id: 3, name: "Morad" },
            { id: 4, name: "Fikrat" },
        ],
        loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
        gender: "man",
        boyfriendGirlfriend: false,
        fail: true,
        avgPoint: 76,
        salaryAZN: 120,
    },
    {
        id: 10,
        name: "Fidan",
        surname: "Rehimli",
        age: 21,
        hobbies: ["book", "gaming"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "Turan" },
        ],
        loginDetail: { username: "fidan123", password: "fidanrahimli" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: true,
        avgPoint: 75,
        salaryAZN: 98,
    },
    {
        id: 11,
        name: "Aynur",
        surname: "Aynurova",
        age: 20,
        hobbies: ["book", "gaming"],
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
        ],
        loginDetail: { username: "aynur123", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: true,
        avgPoint: 81,
        salaryAZN: 120,
    },

    {
        id: 12,
        name: "Elman",
        surname: "Muradov",
        age: 20,
        hobbies: [
            "book",
            "gaming",
            "sking",
            "wrestling",
            "swiming",
            "arguing about philosophy",
            "solving sudoku",
            "hiking",
            "walking",
        ],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "jale" },
            { id: 4, name: "akhmed" },
        ],
        loginDetail: { username: "elman17", password: "elman12345" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: true,
        avgPoint: 76,
        salaryAZN: 100,
    },
]



function hamisi(arr) {
    let element;
    for (let i = 0; i < arr.length; i++) {
        element = arr[i]
        console.log(element)

    }

}

// hamisi(students)




function adlar(arr) {
    let element;
    for (let i = 0; i < arr.length; i++) {
        element = arr[i]
        console.log("ad:" + element.name + " soya: " + element.surname)



    }

}

adlar(students)



function kesr(arr) {
    let element;
    for (let i = 0; i < arr.length; i++) {
        element = arr[i]
        if (element.fail) {
            console.log(element.name)
        }


    }

}

// kesr(students)


function hobby(arr) {
    let element;
    let x = ''
    for (let i = 0; i < arr.length; i++) {
        element = arr[i]
        if (element.hobbies.length > x.length) {
            x = element.hobbies


        }


    }
    console.log("ad:" + element.name + " soya: " + element.surname + " hobbies: " + element.hobbies)

}

// hobby(students)


function ortalama(arr) {
    let element;
    let maxPoint;
    let maxPoint2;

    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        element = arr[i]
        if (element.avgPoint > max) {
            max = element.avgPoint
            maxPoint = element


        }

    }
    console.log("ad:" + maxPoint.name + " soyad: " + maxPoint.surname)

    console.log(max)

}
// ortalama(students)


function parol(arr) {
    let element;
    let maxPoint;


    let max = '';

    for (let i = 0; i < arr.length; i++) {
        element = arr[i]
        if (element.loginDetail.password.length > max.length) {
            max = element.loginDetail.password
            maxPoint = element
        }

    }
    console.log("ad:" + maxPoint.name + " soyad: " + maxPoint.surname)
}
// parol(students)


function sevgili(arr) {
    let element;
    for (let i = 0; i < arr.length; i++) {
        element = arr[i]
        if (element.boyfriendGirlfriend) {
            console.log(element.name + " " + element.loginDetail.username)
        }


    }

}
// sevgili(students)

function dollar(arr) {
    let element;
    for (let i = 0; i < arr.length; i++) {
        element = arr[i]
        console.log(`${element.salaryAZN} $`)
    }
}

// dollar(students)


function capitalizeTeachersName(students) {
    for (let student of students) {
        let box = ''
        for (let teacher of student.teacher) {
            teacher.name = teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1);
            box += teacher.name
        }
        // box = box.join(" ")
        console.log(box)
    }
}

// capitalizeTeachersName(students);
let nums = [1, 73, 99, 20]

//1. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function getElement(arr, n = 1) {

    let newArr;

    for (let i = 0; i < arr.length; i++) {

        newArr = arr.slice(0, n)
    }
    console.log(newArr)

}

// getElement(nums)

//2. Write a simple JavaScript function to join all elements of the following array into a string.

function joinArrayToString(arr, n) {
    return arr.join(`${n}`);
}





// console.log(joinArrayToString(nums, '/'));






//3. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
let text = "The Quick Brown Fox"

function convert(strg) {
    let newStrg = ''
    for (let i = 0; i < strg.length; i++) {
        let char = strg[i];
        if (char === char.toUpperCase()) {
            newStrg += char.toLowerCase()

        } else {
            newStrg += char.toUpperCase()
        }

    }
    console.log(newStrg)

}
// console.log(convert(text))




//4. Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, zero, null.










//5. Write a method that returns a duplicate-free array.
let array = ['a', 2, 'd', 2, 'a', 14, 14, 's', false]
function removeDuplicates(arr) {
    return arr.filter((element, index) => {
        return arr.indexOf(element) === index;
    });
}



// console.log(removeDuplicates(array)); 







//6. Write a function that compares two arrays and returns true if they are identical.


function arraysIdentical(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// console.log(arraysIdentical([1, 2, 3, 4], [1, 2, 4]))



//7. Bir string ve bir char qebul eden bir function yazın.Əgər daxil olunmuş char string-də varsa char-ın yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin. Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.
function sumIndicesOfString(str, char) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            sum += i;
        }

    }
    return sum;
}


console.log(sumIndicesOfString("salam", "a")); 
