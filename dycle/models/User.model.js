const { Schema, model, Mongoose } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
<<<<<<< HEAD
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
=======
  password: String
>>>>>>> 28f4384b57bc3dc2731cf94911020a51906cd808
});

const User = model("User", userSchema);

module.exports = User;


