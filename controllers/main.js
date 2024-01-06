//TODO: 1. check username and password in the request body in post login request,if exist create the token and send it to the client
//TODO: 2. setup authentication so that only authenticated users can access the dashboard route

const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

const login = async (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password);
  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400);
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(200).json({
    status: 'success',
    message: 'user created',
    token,
  });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100); // 0-99
  res.status(200).json({
    status: 'success',
    message: 'You did it!',
    secret: `Here's your authorized data: your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
