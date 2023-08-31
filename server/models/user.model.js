module.exports = mongoose => {

  //User Schema
  const schema = mongoose.Schema(
    {
      firebaseUid: {
        type: String,
        required: true,
        unique: true, // Ensures Firebase UIDs are unique
      },
      email: {
        type: String,
        required: true,
        unique: true, // Ensures emails are unique
      },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const newUser = mongoose.model("newUser", schema);
  return newUser;
};