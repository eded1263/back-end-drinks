import User from 'App/Models/User'

export class UsersRepository {
  public findUser(name: string) {
    return User.findBy('name', name)
  }

  public async createUser(name: string) {
    return await User.create({ name })
  }
}
