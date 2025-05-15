const  admindb = require('./admin.modal');

async function addAdmin(req, res){
    const {adminname, password, email}  = req.body;

    const addAdmin = await admindb.create({adminname, password, email});
    res.status(200).json({message:"Data added successfuly", data:addAdmin});
}


async function getAdmin(req, res){
    const { id } = req.body;
try{
    const getData = await admindb.findAll({ where: { id } });
res.status(200).json({message:"Data Found" ,data: getData}) 
}catch(error){
res.status(404).json({message:"Data Not Found", error:error}) 
    
}
}

module.exports = {addAdmin, getAdmin};