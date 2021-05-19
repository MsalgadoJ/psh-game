const db = require('../database/models')

const usersController = {

  getUsers: async (req, res) => {
    const users = await db.User.findAll()
    res.json(users)
  },

  createUser: async (req, res) => {
    const { iduser, nickname, profile_image, creation_date, score } = req.body
    await db.User.create({
      iduser,
      nickname,
      profile_image,
      creation_date,
      score
    })
    res.json({message: 'user created'})
  }
}

module.exports = usersController;