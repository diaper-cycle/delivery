const { Schema, model, Mongoose } = require("mongoose");

const pickupLocationSchema = new Schema({
    locationName: String,
    address: {
        street: {
          type: String,
          required: true
        },
        houseNumber: {
          type: String,
          required: true
        },
        zip: {
          type: Number,
          required: true
        }
      },
    stock: {
      type: Number,
      required: true
    }
});

const PickupLocation = model("PickupLocation", pickupLocationSchema);

module.exports = PickupLocation;