import myPosts from '../posts/individualPosts.js'

const checkDuplicateUsername = (posts) => {
    return (req,res,next) => {

        const dupe = myPosts.some(post=> req.body.username === post.username);

        if(dupe){
            return res.status(400).json({msg:'nooopers names takeeen!'})
        }

        next();

    }
}

export default checkDuplicateUsername;