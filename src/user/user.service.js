async function getUsers(){
    try {
        const getUser = await db.user.find();
        res.status(200).json({ data: getUser, message: "User found" });
    } catch (error) {
        req.status(404).json({ error: error.message, message: "Data not found" });
    }
}
module.exports = getUsers;