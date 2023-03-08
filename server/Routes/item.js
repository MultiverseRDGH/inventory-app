const express = require('express');
const { Items } = require('../models/Item');
const router = express.Router();

router.get('/', async(req,res) => {
    const items = await Items.findAll()
    res.send(items);
})

module.exports = router