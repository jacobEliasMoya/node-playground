import express from 'express';
import path from 'path';
import posts from './routes/posts/posts.js';
const port = process.env.PORT || 8000

const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/api/posts/',posts)


app.listen(8001,()=> console.log(`servers working on port ${port}`))

// so key points for me here
// path utlity for filepaths, also using __dirname = current working directory .. using path.join(stuff), create the path without having backslashes and whatnot, seems useful

// ahhh so app.get w/ a form using get, will run the req.send npm