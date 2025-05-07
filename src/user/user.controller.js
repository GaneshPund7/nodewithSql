const User = require('./user.modal');
async function getUser(req, res) {
        try {
            const getUser = await User.find();
            res.status(200).json({ data: getUser, message: "User found" });
        } catch (error) {
            req.status(404).json({ error: error.message, message: "Data not found" });
        }
}

async function addUser(req, res) {
    const { username, password, email } = req.body;
    try {
        const createUser = await User.create(username, password, email);
        res.status(200).json({ data: createUser, message: "User added" });
    } catch (error) {
        res.status(404).json({ error: error.message, message: "User not added" });
    }
}

module.exports = {getUser, addUser}