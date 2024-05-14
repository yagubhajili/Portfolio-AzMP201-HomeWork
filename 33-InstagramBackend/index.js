const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.use(bodyParser.json())

let arr = [
    {
        "id": "1",
        "userName": "yagubhjli",
        "name": "yagub",
        "surname": "hajiloi",
        "password": "yaqubbb",
        "email": "yaqub@gmail.com",
        "gender": "kiwi",
        "accountDate": "2024",
        "isAdmin": true,

    },
    {
        "id": "2",
        "userName": "gurban",
        "name": "gurban",
        "surname": "gurbanzada",
        "password": "123",
        "email": "mail.com",
        "gender": "kiwi",
        "accountDate": "2024",
        "isAdmin": true,

    },
    {
        "id": "5",
        "userName": "minaye1212",
        "name": "minaye",
        "surname": "sabanov",
        "password": "minaye1212",
        "email": "xala@gmail.com",
        "gender": "kadin",
        "accountDate": "2020",
        "isAdmin": false,

    },
    {
        "id": "6",
        "userName": "xatire",
        "name": "xatire",
        "surname": "eliyeva",
        "password": "xatireeliyeva",
        "email": "kadin@gmail.com",
        "gender": "kadin",
        "accountDate": "2021",
        "isAdmin": false,
    },
    {
        "id": "e13e",
        "userName": "dadassss",
        "name": "dadas",
        "surname": "dadaszade",
        "password": "dadas.123",
        "email": "dadas@gmail.com",
        "gender": "kiwi",
        "accountDate": "2024",
        "isAdmin": false,

    },
    {
        "id": "27ef",
        "userName": "malikabb",
        "name": "malik",
        "surname": "abasov",
        "password": "malik1222",
        "email": "abbasov@gmail",
        "gender": "kiwi",
        "accountDate": "2024",
        "isAdmin": false,

    }
]



app.get('/users', (req, res) => {
    res.send(arr)
})

app.get('/users/:id', (req, res) => {
    let foundUser = arr.find(elem => elem.id == req.params.id)
    res.send(foundUser)
})

app.delete('/users/:id', (req, res) => {
    let deleteUser = arr.filter(elem => elem.id != req.params.id)
    res.send(deleteUser)
})
app.post('/users/', (req, res) => {
    arr.push(req.body)
    res.send(arr)
})

app.put('/users/:id', (req, res) => {

    let elemIndex = arr.findIndex(el => el.id == req.params.id)
    arr[elemIndex] = { id: req.params.id, ...req.body }
    res.send(arr)

})

app.patch('/users/:id', (req, res) => {

    let elemIndex = arr.findIndex(el => el.id == req.params.id)
    let elem = arr.find(el => el.id == req.params.id)
    arr[elemIndex] = { ...elem, ...req.body }
    res.send(arr)

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})