const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('./src/user/user.router');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/user', user)
const data ={
    name : "Sumit",
    age : 20,
    job: "software developer"
}

app.get('/', async (req, res)=>{
res.json(data);
})
app.listen(PORT, ()=>{console.log(`server is running on port ${PORT}`)});