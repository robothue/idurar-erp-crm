const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: false,
  },

  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  name: { type: String, required: true },
  surname: { type: String },
  photo: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: 'owner',
    enum: ['owner'],
  },
});

module.exports = mongoose.model('Admin', adminSchema);


// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const Schema = mongoose.Schema;

// const adminSchema = new Schema({
//   removed: { type: Boolean, default: false },
//   enabled: { type: Boolean, default: false },
//   email: { type: String, lowercase: true, trim: true, required: true, unique: true },
//   name: { type: String, required: true },
//   surname: { type: String },
//   password: { type: String, required: true },  // ✅ Add password field
//   photo: { type: String, trim: true },
//   created: { type: Date, default: Date.now },
//   role: { type: String, default: 'owner', enum: ['owner'] }
// });

// // Hash password before saving
// adminSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// module.exports = mongoose.model('Admin', adminSchema);
