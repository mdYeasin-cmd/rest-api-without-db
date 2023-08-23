const { v4: uuidv4 } = require('uuid');

const users = [
    {
        id: uuidv4(),
        name: "Anisul Islam",
        email: "anisulislam@gmail.com"
    },
    {
        id: uuidv4(),
        name: "Rakibul Islam",
        email: "rakibulislam@gmail.com"
    }
];

module.exports = users;