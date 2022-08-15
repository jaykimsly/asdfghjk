const express = require("express");
const Stock = require("../models/stock.models.js"); // new
const router = express.Router();

// Get all stocks
router.get("/stocks", async (req, res) => {
  const stocks = await Stock.find();
  res.send(stocks);
});

router.post("/stocks", async (req, res) => {
  const stock = new Stock({
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    price: req.body.price,
    quantity: req.body.quantity,
  });
  await stock.save();
  res.send(stock);
});

router.get("/stocks/:id", async (req, res) => {
  try {
    const stock = await Stock.findOne({ _id: req.params.id });
    res.send(stock);
  } catch {
    res.status(404);
    res.send({ error: "Stock doesn't exist!" });
  }
});

router.patch("/stocks/:id", async (req, res) => {
  try {
    const stock = await Stock.findOne({ _id: req.params.id });

    if (req.body.name) {
      stock.title = req.body.name;
    }

    if (req.body.price) {
      stock.content = req.body.price;
    }
    if (req.body.category) {
      stock.title = req.body.category;
    }

    if (req.body.image) {
      stock.content = req.body.image;
    }
    if (req.body.quantity) {
      stock.content = req.body.quantity;
    }

    await stock.save();
    res.send(stock);
  } catch {
    res.status(404);
    res.send({ error: "Stock doesn't exist!" });
  }
});

router.delete("/stocks/:id", async (req, res) => {
  try {
    await Stock.findOneAndRemove({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Stock doesn't exist!" });
  }
});

module.exports = router;
