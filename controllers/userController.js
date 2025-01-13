const User = require('../models/user');
const jwt = require('jsonwebtoken');

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) res.status(200).json(user);
  else res.status(404).json({ message: 'User not found' });
};

const createUser = async (req, res) => {
  const { name, email, mobile, password } = req.body;
  const user = await User.create({ name, email, mobile, password });
  res.status(201).json({ ...user._doc, token: generateToken(user._id) });
};

const updateUser = async (req, res) => {
  const { name, email, mobile } = req.body;
  const user = await User.findById(req.params.id);
  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
    user.mobile = mobile || user.mobile;
    await user.save();
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove();
    res.status(200).json({ message: 'User removed' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
