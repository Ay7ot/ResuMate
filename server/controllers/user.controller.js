const db = require("../models");
const User = db.users;

// Create and Save a new User
exports.create = async (req, res) => {
    const { firstName, lastName, profession, experience} = req.body
    await User.create({firstName, lastName, profession, experience})
    res.json({msg: `User ${firstName} successfully created`})
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  
};

// Find a single User with an id
exports.findOne = (req, res) => {
  
};

// Update a User by the id in the request
exports.update = (req, res) => {
  
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Users
exports.findAllPublished = (req, res) => {
  
};