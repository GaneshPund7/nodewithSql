const {  Profile } = require('./profile.modal');
// const db = require('../user.modal');
const { User } = require('../user/user.modal');

async function createUserWithProfile(req, res) {
const { username, password, email } = req.body;
console.log(username, password, email)
  const user = await User.create({ 
     username:"Gansh", password:"Gasa", email:"gfsa"
     });

  const profile = await Profile.create({
    bio: 'Hello I am ganesh',
    userId: user.id
  });


  res.send("Data added successfuly")
}

 module.exports = { createUserWithProfile };
