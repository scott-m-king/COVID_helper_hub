const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const Schema = mongoose.Schema;

const volunteerSeekerLoginSchema = new Schema(
  {
    username: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    password: { type: String },
    email: { type: String },
  },
  {
    timestamps: true,
  }
).plugin(findOrCreate);

// const VolunteerSeeker = mongoose.model(
//   "Volunteer_seekers",
//   volunteerSeekerLoginSchema
// );

// module.exports = {VolunteerSeeker};

module.exports = mongoose.model(
  "Volunteer_seekers",
  volunteerSeekerLoginSchema
);
