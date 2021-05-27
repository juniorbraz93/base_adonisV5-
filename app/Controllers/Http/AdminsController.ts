// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Admin from 'App/Models/Admin'

export default class AdminsController {
  public async register({ response, request }) {
    const body = request.only(['name', 'email', 'password'])

    const admins = await Admin.create(body)

    return response.status(200).send({
      data: admins,
      message: 'Cadastro realizado com sucesso!',
    })
  }

  public async login({ request, auth }) {
    const { email, password } = request.only(['email', 'password'])

    const token = await auth.use('api').attempt(email, password, {
      expiresIn: '7days',
    })
    return token
  }

  public async show({ auth, response }) {
    const admins = await Admin.find(auth.user.id)

    if (admins) {
      return response.status(200).send({
        data: admins,
      })
    }
  }

  public async update({ auth, response, request }) {
    const admins = await Admin.find(auth.user.id)

    const body = request.only(['name', 'email', 'password'])

    if (admins) {
      admins.merge(body)
      admins.save()

      return response.status(200).send({
        data: admins,
        message: 'Atualização realizada com sucesso!',
      })
    }
  }
}
