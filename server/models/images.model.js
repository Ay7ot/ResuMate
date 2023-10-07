module.exports = (mongoose) => {
  //Image Schema
  const schema = mongoose.Schema(
    {
      imagePath: String,
      objectId: String
    },
    { timestamps: true } // Add timestamps for createdAt and updatedAt
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const images = mongoose.model("images", schema);
  return images;
};
