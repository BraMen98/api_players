const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./routes/routers')
// const bodyParser = require('body-parser')

// app.use(bodyParser.json())
app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})

