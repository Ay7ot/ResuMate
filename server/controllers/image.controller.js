const db = require("../models");
const Image = db.images;

exports.create = async (req, res) => {

  console.log(req.body);
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  console.log(req.file);

  const { objectId } = req.params;
  console.log(objectId);
  try {
    // Save the image path in the MongoDB database
    await Image.create({
      imagePath: req.file.path,
      objectId: objectId,
    });

    res.status(200).send("File uploaded and image path saved.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error: " + error.message);
  }
};
