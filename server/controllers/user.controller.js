const db = require("../models");
const User = db.AllUsers;

// Create and Save a new User
exports.create = async (req, res) => {
    // const { firstName, lastName, profession, experience, skills, languages, education, country, state, phoneNumber, email } = req.body
    // await User.create({firstName, lastName, profession, experience, skills, languages, education, country, state, phoneNumber, email})
    // res.json({msg: `User ${firstName}  successfully created`})
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  
};

// Find a single User with an id
exports.findOne = async (req, res) => {
  const firebaseUser = req.user;
  console.log(firebaseUser); // Debugging line

  // Check if the user already exists in MongoDB
  try {
    const existingUser = await User.findOne({ firebaseUid: firebaseUser.uid });
  
    if (!existingUser) {
      // User doesn't exist in MongoDB, create a new user document
      const newUser = new User({
        firebaseUid: firebaseUser.uid,
        email: firebaseUser.email,
        // Add other user data as needed
      });
  
      await newUser.save();
    }
  
    // User created successfully
    res.status(200).json({ message: 'User created' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error creating user' });
  }
    
}

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