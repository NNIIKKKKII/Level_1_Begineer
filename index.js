import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended : true}));





app.get("/", (req,res)=>{
    res.sendFile("index.html");
})

app.post("/submit",(req, res)=>{
    res.send("<h1> We have Received your Information ! </h1>");
})















app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})