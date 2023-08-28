module.exports = mongoose => {

    const jobItemSchema = mongoose.Schema({
        jobDetail: String,
        id: String
    })

    const experienceSchema = mongoose.Schema({
        companyName: String,
        jobTitle: String,
        location: String,
        id: String,
        month: {
            start: String,
            end: String,
        },

        jobItems: [jobItemSchema]
    })

    //Resume Schema
    const schema = mongoose.Schema(
      {
        firstName: String,
        lastName: String,
        profession: String,
        experience: [experienceSchema]
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const UserResume = mongoose.model("user", schema);
    return UserResume;
  };