const express = require('express')
const Post = require('./models/post')
const post = require('./models/post')
const router = express.Router()

// create
router.post('/posts', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    })
    await post.save()
    res.send(post)
})

// read (all)
router.get('/posts', async(req, res) => {
    const posts = await post.find()
    res.send(posts)
})

// read (one)
router.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id })
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!"})
    }
})

// update
router.patch('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id })

        if (req.body.title) {
            post.title = req.body.title
        }

        if (req.body.content) {
            post.content = req.body.content
        }

        await post.save()
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
})

// delete
router.delete('/posts/:id', async (req, res) => {
    try {
        await Post.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
})

module.exports = router