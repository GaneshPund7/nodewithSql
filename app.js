const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('./src/user/user.router');
const admin = require('./src/admin/admin.route');
const User = require('./src/user/user.modal');
const Admin = require('./src/admin/admin.modal');
// const sequelize = require('sequelize');
const PORT = process.env.PORT || 3000;


User.sync({force: true});
Admin.sync({force: true});
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/user', user);
// app.use('/admin', admin);
const data ={
    name : "Sumit",
    age : 20,
    job: "software developer"
}

app.get('/', async (req, res)=>{
res.json(data);
})
app.listen(PORT, ()=>{console.log(`server is running on port ${PORT}`)});