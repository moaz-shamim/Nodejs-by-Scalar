const express = require("express");
const { Category, validate } = require("../models/category.model");

const router = express.Router();

// const categories = [
//   { id: 1, name: "Web" },
//   { id: 2, name: "Mobile" },
//   { id: 3, name: "Photography" },
// ];

router.get("/api/categories", async (req, res) => {
  let categories = await Category.find();
  res.send(categories);
});

router.post("/api/categories", async (req, res) => {
  const { error } = validate(req.body);

  if (error) res.status(400).send(error.details[0].message);

  // const category = {
  //   id: categories.length + 1,
  //   name: req.body.name,
  // };
  const category = new Category({
    name: req.body.name,
  });
  await category.save();
  // categories.push(category);
  res.send(category);
});

/*
router.put("/api/categories/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);
  // const category = categories.find((c) => c.id === parseInt(req.params.id));
  let category = await Category.findById(req.params.id);
  if (!category)
    return res.status(404).send("The category with the given ID was not found");
  category.name = req.body.name;
  const updateCategory = await category.save();
  res.send(updateCategory);
});
*/

router.put("/api/categories/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );
  if (!category)
    return res
      .status(404)
      .send("The category with the given ID was not found.");
  res.send(category);
});

router.delete("/api/categories/:id", async (req, res) => {
  // const category = categories.find((c) => c.id === parseInt(req.params.id));
  const category = await Category.findByIdAndDelete(req.params.id);

  if (!category)
    return res.status(404).send("The category with the given ID was not found");
  // const index = categories.indexOf(category);
  // categories.splice(index, 1);
  res.send(category);
});

router.get("/api/categories/:id", async (req, res) => {
  // const category = categories.find((c) => c.id === parseInt(req.params.id));
  const category = await Category.findById(req.params.id);

  if (!category)
    return res.status(404).send("The category with the given ID was not found");
  res.send(category);
});

module.exports = router;
