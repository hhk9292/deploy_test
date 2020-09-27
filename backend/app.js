const express = require('express')
const app = express()
const PORT = 3000

// routes
const routes = require('./routes')

app.use('/', routes)

app.listen(PORT, () => {
    console.log('listening on PORT 3000')
})

