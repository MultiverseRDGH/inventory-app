const express = require('express');
const { Items } = require('../models/Item');
const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
  try {
    const items = await Items.findAll();
    res.send(items);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await Items.findByPk(req.params.id);
    if (!item) {
      res.status(404).send('Item Not Found!');
    }
    res.send(item);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, price, category, image } = req.body;
    const newItem = await Items.create({
      title,
      description,
      price,
      category,
      image,
    });

    res.send(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    await Items.update(req.body, { where: { id } });
    ß;
    const item = await Items.findByPk(id);

    res.send(item);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const item = await Items.findByPk(id);

    if (!item) {
      res.status(404).send("Item Doesn't Exist!");
    }

    await Items.destroy({ where: { id } });

    res.send('Item Deleted!');
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
