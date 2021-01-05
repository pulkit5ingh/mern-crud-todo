const express = require('express');
const router = express.Router();

// model
const Post = require('../models/Post');

router.get('/all_posts', (req, res) => {

    Post.find({}, (err, result) => {
        if (err) throw err;
        if (result) {
            res.json(result)
        }
    })
})

router.get('/post/:id', (req, res) => {

    const { id } = req.params;

    console.log(req.params)

    Post.findById({ _id: id }, (err, result) => {
        if (err) throw err;
        if (result) {
            res.json(result);
        }
        else {
            res.json({
                message: "There is no post in this id !"
            })
        }
    })

})


router.get('/post/update/:id', (req, res) => {

    const { id } = req.params;

    console.log(req.params)

    Post.findById({ _id: id }, (err, result) => {
        if (err) throw err;
        if (result) {
            res.json(result);
        }
        else {
            res.json({
                message: "There is no post in this id !"
            })
        }
    })

})


router.put('/post/update/:id', (req, res) => {

    const { id } = req.params;

    const data = {
        title: req.body.title,
        description: req.body.description
    }

    console.log(data)

    Post.findByIdAndUpdate({ _id: id },
        data,
        { new: true, runValidators: true },
        (err, result) => {
            if (err) throw err;
            if (result) {
                res.json(result);
            }
            else {
                res.json({
                    message: "There is no post in this id !"
                })
            }
        })

})


router.post('/add_post', (req, res) => {

    const { title, description } = req.body;

    console.log(req.body);

    const newPost = new Post({
        title, description
    })

    newPost.save((err, result) => {
        if (err) throw err;
        if (result) {
            res.json(result);
            console.log(result)
        }
        else {
            res.json('SOMETHING IS REALLY WRONG !!!')
        }
    })

})

module.exports = router;