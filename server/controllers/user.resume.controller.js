const db = require("../models");
const User = db.resume;

// Create and Save a new User Resume
exports.create = async (req, res) => {
  const {
    firebaseUid,
    firstName,
    lastName,
    profession,
    workHistory,
    skills,
    languages,
    education,
    country,
    state,
    phoneNumber,
    email,
    professionalSummary,
    resumeName,
    objectId,
    imageUrl
  } = req.body;

  const userExists = await User.find({ objectId: objectId });

  if (userExists.length < 1) {
    await User.create({
      firebaseUid,
      firstName,
      lastName,
      profession,
      workHistory,
      skills,
      languages,
      education,
      country,
      state,
      phoneNumber,
      email,
      professionalSummary,
      resumeName,
      objectId,
      imageUrl
    });
    res.json({ msg: `User ${firstName} successfully created` });
  } else {
    res.json({ message: "Resume already exists on database" });
  }
};

// Retrieve all User Resume from the database.
exports.findAll = async (req, res) => {
  const { firebaseUid } = req.query;

  try {
    const resumes = await User.find({ firebaseUid: firebaseUid });

    res.status(200).send({ message: resumes });
  } catch (error) {
    console.log(error);
  }
};

// Find a single User Resume with an id
exports.findOne = (req, res) => {};

// Update a User by the id in the request
exports.update = (req, res) => {};

// Delete a User with the specified id in the request
exports.delete = async (req, res) => {
  const { objectId } = req.params
  console.log(objectId)
  try {
    // Use Mongoose to find and delete the item by the customId
    const deletedItem = await User.findOneAndRemove({ objectId });
  
    if (deletedItem) {
      res.status(200).json({ message: 'Item deleted successfully' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {};

// Find all published Users
exports.findAllPublished = (req, res) => {};
