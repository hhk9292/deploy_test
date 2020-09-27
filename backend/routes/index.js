const express = require('express')
const router = express.Router()

const main = require('./main')
const users = require('./users')

router.use('/', main)
router.use('/users', users)

module.exports = router