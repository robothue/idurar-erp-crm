// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const Admin = require('@/models/coreModels/Admin'); // Make sure this path is correct

// exports.register = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Check if the admin already exists
//     const existingAdmin = await Admin.findOne({ email });
//     if (existingAdmin) {
//       return res.status(400).json({ success: false, message: 'Admin already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new admin
//     const newAdmin = new Admin({ name, email, password: hashedPassword });
//     await newAdmin.save();

//     res.status(201).json({ success: true, message: 'Admin registered successfully' });
//   } catch (error) {
//     console.error('Registration Error:', error);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// };


const createAuthMiddleware = require('@/controllers/middlewaresControllers/createAuthMiddleware');
module.exports = createAuthMiddleware('Admin');
