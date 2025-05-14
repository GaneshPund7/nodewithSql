const  admindb = require('./admin.modal');

async function addAdmin(req, res){
    const {adminname, password, email}  = req.body;

    const addAdmin = admindb.create({adminname, password, email});
    res.status(200).json("Data added successfuly", addAdmin);
}


async function getAdmin(req, res){
const getData = admindb.findAll();
res.status(200).json("Data Found" , getData) 
}

module.exports = {addAdmin, getAdmin};