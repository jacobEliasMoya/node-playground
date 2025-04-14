import express from 'express';
import profanityCheck from '../middleware/profanityCheck.js';
import {v4 as uuidv4} from 'uuid';
import posts from './individualPosts.js';
import checkDuplicateUsername from '../middleware/checkDuplicateUsername.js'

const router = express.Router();

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
router.get('/:id',(req, res) => {

    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({ msg: `a post with the id:${id} was not found` });
    }
    res.status(200).json()

})

// create new post
router.post('/', profanityCheck,checkDuplicateUsername(posts), (req, res) => {

    const newPost = {
        id: uuidv4(),
        username: req.body.username
    };

    if(newPost.username){
        posts.push(newPost)
    } 

    res.status(200).json(posts);
    
});

export default router;