// form.model.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  // Other form fields...
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
    