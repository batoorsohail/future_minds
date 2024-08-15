const User = require('../modules/userModel')

const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)

    res.status(200).json({email})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const signupUser = async (req, res) => {
  const { user_name, email, password } = req.body

  try {
    const user = await User.signup(user_name, email, password)

    res.status(200).json({email})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { loginUser, signupUser }