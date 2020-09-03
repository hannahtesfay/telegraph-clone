const express = require('express');
const { show, create } = require('./db/index.js');

const router = express.Router();

router.get('/:id', (req, res) => {
    show(req.params.id)
        .then(postQuery => {
            const post = { id: postQuery.id, title: postQuery.title, pseudonym: postQuery.pseudonym, blogBody: postQuery.blogBody }
            res.json({ post })
        })
        .catch(err => res.status(500).end())
})

router.post('/', (req, res) => {
    const newPost = { title: req.body.title, pseudonym: req.body.pseudonym, blogBody: req.body.blogBody }
    create(newPost)
        .then(result => {
            const post = { id: result.ops[0]._id, title: result.ops[0].title, pseudonym: result.ops[0].pseudoynm, blogBody: result.ops[0].blogBody }
            res.status(201).json(post)
        })
        .catch(err => res.status(500).end())
})

module.exports = router;