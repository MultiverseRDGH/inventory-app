const express = require('express');
const { Items } = require('../models/Item');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');

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
    } else {
      res.send(item);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
});

router.post(
  '/',
  [
    check('title').trim().notEmpty().isString(),
    check('description').trim().notEmpty(),
    check('price').trim().isNumeric(),
    check('category').trim().notEmpty(),
    check('image').trim().notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

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
  }
);

router.put(
  '/:id',
  [
    check('title')
      .optional()
      .trim()
      .notEmpty()
      .isString()
      .isLength({ min: 2, max: 50 }),
    check('description').optional().trim().notEmpty(),
    check('price').optional().trim().isNumeric(),
    check('category').optional().trim().notEmpty(),
    check('image').optional().trim().notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    try {
      const id = req.params.id;

      await Items.update(req.body, { where: { id } });

      const item = await Items.findByPk(id);

      res.send(item);
    } catch (err) {
      console.error(err);
      res.status(500).send(alert({ error: err.message }));
    }
  }
);

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
