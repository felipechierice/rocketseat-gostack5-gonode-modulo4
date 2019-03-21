'use strict'

const User = use('App/Models/User')
const Database = use('Database')

class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])
    const addresses = request.input('addresses')

    const tsx = Database.beginTransaction()

    const user = await User.create(data, tsx)
    await user.addresses().createMany(addresses, tsx)

    await tsx.commit()

    return user
  }
}

module.exports = UserController
