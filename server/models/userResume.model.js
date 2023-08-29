module.exports = mongoose => {

  const jobItemSchema = mongoose.Schema({
    jobDetail: String,
    id: String
  })

  const skillsSchema = mongoose.Schema({
    skill: String,
    id: String
  })

  const languageSchema = mongoose.Schema({
    language: String,
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

  const educationSchema = mongoose.Schema({
    schoolName: String,
    degree: String,
    location: String,
    id: String,
    course: String,
    month: {
      start: String,
      end: String,
    }
  })

  //Resume Schema
  const schema = mongoose.Schema(
    {
      firstName: String,
      lastName: String,
      profession: String,
      phoneNumber: String,
      email: String,
      country: String,
      state: String,
      professionalSummary: String,
      experience: [experienceSchema],
      education: [educationSchema],
      skills: [skillsSchema],
      languages: [languageSchema]
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