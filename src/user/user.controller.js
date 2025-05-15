const db = require('./user.modal');
const admindb = require('../admin/admin.modal');
const { Op } = require('sequelize');
const sequelize = require('sequelize');
// const sequelize = require('../../db');
async function getUser(req, res) {
    const {id , from , to} = req.query;
    try {
            const fromdata = from || 1;
            const todata = to || 10;

            let limit = todata - fromdata + 1
             let offSet = fromdata - 1;

                // const getUser = await db.findAll({
                //      attributes: ['username', 'email']
                // });
            
            // const getUser = await db.findAll({ where: { id }})

         const queryoption = {
            attributes: ['username', 'email']
         }
         queryoption.limit = limit;
         queryoption.offSet = offSet;

            const getUser = await db.findAll(queryoption)
            const totalPages = await db.count(queryoption)
            console.log(totalPages)
            
            

            res.status(200).json({ data: getUser, message: "User found" });
        } catch (error) {
            res.status(404).json({ error: error.message, message: "Data not found" });
        }
}

async function addUser(req, res) {
    const { username, password, email } = req.body;
    try {
        const createUser = await db.create({username, password, email});
        res.status(200).json({ data: createUser, message: "User added" });
    } catch (error) {
        res.status(404).json({ error: error.message, message: "User not added" });
    }
}
// Find by diffent opraters

// async function getUserById (req, res){
// const { id} = req.params
// const getUserById = await db.findAll({
    // where:{ [Op.eq] : [{id: 3}]}
//    where:{ [Op.and]: [{ id: 12 }, {username:'ram'}]}
//    where:{[Op.or]: [{id: 10}, {username:'rm'}]}
//    where: {
//     id: {[Op.like] : '%ram'}
//    }
// });
// res.json(getUserById)
// }


// Find by primary key

// async function getUserById (req, res){
//     const getUserById = await db.findByPk(3);
//     res.json(getUserById)
//     }

    async function getUserById (req, res){
        const getUserById = await db.findAll({
            where:{ 
                username: {[Op.eq] : '%ram'}
            }
        });
        res.json(getUserById)
        }   

        async function getUserById (req, res){
            const getUsers = db.findAll({
                attributes: {
                  include: [[sequelize.fn('COUNT', sequelize.col('username')), 'nmanes']]
                }
              });
              
                res.json(getUsers)
                }


// async function getUsers(req, res){
// try{
//     // const getUser= await db.findAll({
//         const [user, created] = await db.findOrCreate({
//             where: { username: 'ram' },
//             defaults: {
//               job: 'Technical Lead JavaScript',
//             },
//           });
//     // });
//     res.status(200).json({message: "data found", data: getUser, user: user, created:created})
// }catch(error){
//     res.status(404).json({message: "Data not found", error: error})
// } 

async function getUsers(req, res){
    try{
        const getUser= await db.findAll({
            // where: {
            //     username: {
            //       [Op.like]: 'ram%',
            //     },
            //   },
            //   offset: 10,
            //   limit: 2,
            });
        res.status(200).json({message: "data found", data: getUser})
    }catch(error){
        res.status(404).json({message: "Data not found", error: error})
    } 
}


module.exports = {getUser, addUser, getUserById, getUsers}