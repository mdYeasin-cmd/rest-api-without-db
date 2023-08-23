let users = require('./../models/users.model');
const { v4: uuidv4 } = require('uuid');

// get all users
exports.getAllUsers = (req, res) => {
    res.status(200).json({
        users
    });
};

// create user
exports.createUser = (req, res) => {
    const user = {
        id: uuidv4(),
        name: req.body.name,
        email: req.body.email
    }
    users.push(user);
    res.status(201).send(users);
}

// update user
exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    const willUpdateUser = users.find(user => user.id === userId);
    willUpdateUser.name = name;
    willUpdateUser.email = email;
    res.status(200).json({
        users
    });
}

// delete user
exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    users = users.filter(user => user.id !== userId);
    res.status(200).json({
        users
    });
}

