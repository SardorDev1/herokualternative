const express = require("express")

const app = express()

const PORT = process.env.PORT || 8081

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


app.listen(PORT, () => {
    console.log(`Access in Port ${PORT}`);
})




