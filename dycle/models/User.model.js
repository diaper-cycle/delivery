const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    unique: true, 
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: String, 
  lastname: String,
  address: String
});

const User = model("User", userSchema);

module.exports = User;


