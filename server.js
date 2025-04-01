const express = require('express');
const path = require('path');

const app = express();

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/about',(req,res) => {
    res.sendFile(path.join(__dirname,'public','about.html'));
});

app.get('/search',(req,res) => {
    res.send(`searched for: ${req.query.term} `);
});

app.listen(8001,()=> console.log('servers working on port 8001'))



// so key points for me here
// path utlity for filepaths, also using __dirname = current working directory .. using path.join(stuff), create the path without having backslashes and whatnot, seems useful

// ahhh so app.get w/ a form using get, will run the req.send 