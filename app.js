const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Kết nối tới MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

// // API để lấy danh sách người dùng
// app.get('/api/users', async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });

// API để thêm người dùng
// app.post('/api/users', async (req, res) => {
//   const newUser = new User({ name: req.body.name });
//   await newUser.save();
//   res.json(newUser);
// });

const PORT = process.env.PORT || 4000;
app.get('/api/health', async (req,res) => {
  return res.json("good")
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
