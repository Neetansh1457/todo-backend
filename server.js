const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require("./routes/ToDoRoute")

require('dotenv').config()

const app = express()
const port = process.env.port || 8000

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`Connected to MongoDB`))
    .catch((error) => console.log(error))

    app.use(routes)

app.listen(port, (req ,res) => console.log(`Listening on port: ${port}`))

