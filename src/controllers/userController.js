var users = []

exports.createUser = (req, res) => {
  const user = { ...req.body }
  users.push(user.username)

  console.log(users)

  res.json({
    success: true, data: user
  })
}
