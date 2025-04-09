import express from 'express';
const router = express.Router();
import { Filter } from 'bad-words';

let posts = [
    { id: 1, title: 'post-1' },
    { id: 2, title: 'post-2' },
    { id: 3, title: 'post-3' },
]

const filter = new Filter({placeHolder:'#@!'});

const profanityCheck = (string) => {
    console.log(filter.clean(`Woah, the word: ${string} is not cool man `))
}

// get all posts
router.get('/', (req, res) => {

    const limit = parseInt(req.query.limit);

    // not needed to chain in that status, but is a good practice, it can  
    if (!isNaN(limit) && limit > 0) {
        res.status(200).json(posts.slice(0, limit))
    } else {
        res.status(200).json(posts)
    }
})

// get single post
router.get('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({ msg: `a post with the id:${id} was not found` });
    }
    res.status(200).json(post)

})

// create new post
router.post('/', (req, res) => {

    const newPost = {
        id: posts.id + 1,
        title: req.body.title
    };

    if (!newPost.title) {
        return res.status(400).json({ message: 'please include a title' })
    }

    profanityCheck(newPost.title)
    res.status(201).json(newPost)

});

export default router;