const express = require("express")

const dotenv = require("dotenv")
const app = express()

dotenv.config({
    path:"./data/config.env"
})

app.get('/', (req, res) => {
    res.send("<h1>/post you get json</h1>")
})

app.get('/post', (req, res) => {
    res.json([
        {
            "name": "Sardor",
            "gender": "male",
            "isMarred": false,
        },
        {
            "name": "Abdurahm",
            "gender": "male",
            "isMarred": false,
        },
        {
            "name": "Marjona",
            "gender": "female",
            "isMarred": false,
        },
        {
            "name": "Abduraxmon",
            "gender": "male",
            "isMarred": false,
        }
    ])
})


app.listen(process.env.PORT, () => {
    console.log(`Access in Port ${process.env.PORT}`);
})




