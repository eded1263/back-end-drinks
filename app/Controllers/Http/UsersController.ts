import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UsersService } from 'App/services/UsersService'

export default class UsersController {
  private usersService: UsersService
  constructor() {
    this.usersService = new UsersService()
  }
  public async login({ auth, request }: HttpContextContract) {
    const user = await this.usersService.doLogin(request.input('name'))
    return await auth.use('api').generate(user)
  }
}
