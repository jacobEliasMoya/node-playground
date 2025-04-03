const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000

const app = express();

// setup static folder :thinking face: lol
// app.use(express.static(path.join(__dirname,'public')))

// app.get('/',(req,res) => {
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });

// app.get('/about',(req,res) => {
//     res.sendFile(path.join(__dirname,'public','about.html'));
// });

// app.get('/search',(req,res) => {
//     res.send(`searched for: ${req.query.term} `);
// });

let posts = [ 
    {id:1, title:'post-1'},
    {id:2, title:'post-2'},
    {id:3, title:'post-3'},
]

// get all posts
app.get('/api/posts',(req,res)=>{
    res.json(posts)
})

// get single posts
app.get('/api/posts/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    res.json(posts.filter((post) => post.id === id ));
})

app.listen(8001,()=> console.log(`servers working on port ${port}`))

// so key points for me here
// path utlity for filepaths, also using __dirname = current working directory .. using path.join(stuff), create the path without having backslashes and whatnot, seems useful

// ahhh so app.get w/ a form using get, will run the req.send npm