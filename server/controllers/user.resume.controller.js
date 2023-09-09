const db = require("../models");
const User = db.users;

// Create and Save a new User Resume
exports.create = async (req, res) => {
    const { firebaseUid, firstName, lastName, profession, experience, skills, languages, education, country, state, phoneNumber, email } = req.body
    await User.create({firebaseUid, firstName, lastName, profession, experience, skills, languages, education, country, state, phoneNumber, email})
    res.json({msg: `User ${firstName}  successfully created`})
};

// Retrieve all User Resume from the database.
exports.findAll = async (req, res) => {
    const { firebaseUid } = req.query
    
    try {
        const resumes =  await User.find({firebaseUid: firebaseUid})
        
        res.status(200).send({ message: resumes });
    } catch (error){
        console.log(error)
    }

};

// Find a single User Resume with an id
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