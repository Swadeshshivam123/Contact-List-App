//Importing monggose library
const mongoose = require("mongoose");

//Creating a schema for the contact list with attributes 'name' and 'phone' having below mentioned properties
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    require: true,
  },
});

//Creating Model with name 'Contact' for the schema(contactSchema)
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
