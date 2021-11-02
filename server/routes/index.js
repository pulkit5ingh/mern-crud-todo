const express = require("express");
const router = express.Router();

// model
const TodoModel = require("../models/Todo");

// ok
router.get("/all_todos", async (req, res) => {
  let todos = await TodoModel.find({});

  if (todos) {
    res.json({ todos });
  } else {
    res.json({ message: "something went wrong !" });
  }
});

// ok
router.get("/todo/:id", async (req, res) => {
  const { id } = req.params;

  console.log(req.params);

  await TodoModel.findById({ _id: id }, (err, result) => {
    if (err) throw err;
    if (result) {
      res.json(result);
    } else {
      res.json({
        message: "There is no post in this id !",
      });
    }
  });
});

// ok

router.put("/update_todo", async (req, res) => {
  const { id } = req.body.id;

  const data = {
    title: req.body.title,
    description: req.body.description,
  };

  console.log(data);

  await Post.findByIdAndUpdate(
    { _id: id },
    data,
    { new: true, runValidators: true },
    (err, result) => {
      if (err) throw err;
      if (result) {
        res.json(result);
      } else {
        res.json({
          message: "There is no post in this id !",
        });
      }
    }
  );
});

//@ok

router.post("/add_todo", (req, res) => {
  const { title, description } = req.body;

  console.log(req.body);

  const newTodoModel = new TodoModel({
    title,
    description,
  });

  let saveData = newTodoModel.save();

  if (saveData) {
    res.json(newTodoModel);
    console.log(newTodoModel);
  } else {
    res.json("SOMETHING IS REALLY WRONG !!!");
  }
});

// ok

router.post("/delete_todo", async (req, res) => {
  console.log("DELETE", req.body);

  const { id } = req.body.id;

  await Post.findOneAndDelete({ id }, (err, result) => {
    if (err) throw err;
    if (result) {
      res.json({ msg: "Post Deleted Succesfully !" });
    } else {
      res.json({
        message: "There is no post in this id !",
      });
    }
  });
});

module.exports = router;
