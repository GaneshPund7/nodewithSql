const db = require('./user.modal');
const admindb = require('../admin/admin.modal');

// const sequelize = require('../../db');
async function getUser(req, res) {
    const {id } = req.params
        try {
            const getUser = await db.findAll({
                 attributes: ['username', 'email']
            });
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



module.exports = {getUser, addUser,}