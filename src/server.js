require('dotenv').config()

const express = require('express')

const routes = require('./routes')

const app = express()

const port = process.env.SERVER_PORT


app.use(express.json())

app.use(routes)

app.listen(port, ()=> console.log(`server running in port ${port}...`))