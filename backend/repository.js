const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: String
});
const User = mongoose.model('MyUser', usersSchema);

const fs = require('fs');
const {readJsonFromFile, writeJsonToFile} = require("./fs-utils");

const getUsers = (search) => {
    if(!search) {
        return User.find()
    } else {
        return User.find({name: new RegExp(search)})
    }
}

const getUser = (id) => {
    return User.find({_id: id})
}
const deleteUser = (id) => {
    return User.deleteOne({_id: id})
}

const updateUser = (id, name) => {
    return User.updateOne({_id: id}, {name: name})
}
const addUser = async (name) => {
    const user = new User({name});
    return user.save();
}

exports.getUsers = getUsers
exports.getUser = getUser
exports.addUser = addUser
exports.deleteUser = deleteUser
exports.updateUser = updateUser