import User from 'App/Models/User'
import { UsersRepository } from 'App/repositories/UsersRepository'

export class UsersService {
  private usersRepository: UsersRepository
  constructor() {
    this.usersRepository = new UsersRepository()
  }

  public async doLogin(name: string) {
    let user = await this.usersRepository.findUser(name)
    if (!user) {
      user = await this.usersRepository.createUser(name)
    }
    return user
  }

  public async getUserData(user: User) {
    return this.usersRepository.getUserProfile(user.id)
  }
}
