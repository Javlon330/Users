const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Users')
    .then(() => {
        console.log('MongoDBga ulanish muvaffaqiyatli bajarildi...')
    })
    .catch((err) => {
        console.error('MongoDBga ulanishga nosozlik yuz berdi...')
    })

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number,
    email: String,
    tel: String
});

const User = mongoose.model("User", userSchema);

async function addUser(){
    const user = new User({
       firstname: 'Yogor',
       lastname: 'Ruzimov',
       age: 31,
       email: "yodgor@gmail.com",
       tel: '131313'
    })
    const addedUser = await user.save();
    // console.log(addUser);
}

async function getUser() {
    const user = await User
    .find({age: {$gt: 18, $lte: 22}})   
    .sort({firstname: 1})
    console.log(user)
}
getUser();
// addUser();