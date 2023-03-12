var users = []

export default function createUser(req, res) {
  const user = { ...req.body }
  users.push(user.username)

  console.log(users)

  res.json({
    success: true, data: user
  })
}
