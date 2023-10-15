const db = require("../models");
const Image = db.images;

exports.create = async (req, res) => {

  // console.log(req.body.path);
  // if (!req.file) {
  //   return res.status(400).send("No file uploaded.");
  // }

  const { objectId } = req.params;
  
  try {
    // Save the image path in the MongoDB database
    await Image.create({
      imagePath: req.body.path,
      objectId: objectId,
    });

    res.status(200).send("File uploaded and image path saved.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error: " + error.message);
  }
};

exports.find = async (req, res) => {
  const { objectId } = req.params;
  try {
    const image = await Image.find({ objectId: objectId });
    res.status(200).send({ message: image });
  } catch (error) {
    console.log(error);
  }
}
