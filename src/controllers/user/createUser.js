import UserModel from '../../models/UserModel.js'

export default async (req, res) => {
  const user = new UserModel({
    username: req.body.username
  })

  const savedUser = await user.save()

  res.json({
    success: true, data: savedUser
  })
}
