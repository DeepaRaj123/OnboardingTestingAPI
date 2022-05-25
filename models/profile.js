const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    DOB: {
      type: String,
      required: true
    },
    Gender: {
      type: String,
      required: true
    },
    PrimaryDescription: {
      type: String,
      required: true
    },
    SecondaryDescription: {
      type: String,
      required: false
    },
    Location: {
      type: String,
      required: false
    },
    Hobbies: [
      {
        type: String,
      required: false
      }
    ],
    Likes: {
      type: String,
      required: false
    },
    DisLikes: {
      type: String,
      required: false
    },
    EmploymentDetails: [
      {
      type: String,
      required: false
      }
    ],
  
  }
);

module.exports = mongoose.model('Profile', profileSchema);
