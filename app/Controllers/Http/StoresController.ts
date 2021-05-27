// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Store from 'App/Models/Store'

export default class StoresController {
  public async registerStore({ response, request }) {
    const body = request.only(['fantasy_name', 'soci_reason', 'cnpj', 'phone', 'email', 'password'])

    const store = await Store.create(body)

    return response.status(200).send({
      data: store,
      message: 'Cadastro realizado com sucesso!',
    })
  }

  public async loginStore({ request, auth, response }) {
    const { email, password } = request.only(['email', 'password'])

    const store = await Store.query().where('email', email)

    if (store[0].desative !== 0) {
      const token = await auth.use('store').attempt(email, password, {
        expiresIn: '7days',
      })

      return token
    } else {
      return response.status(400).send({
        message: 'Conta desativada, Favor contatar o Administrador.',
      })
    }
  }

  public async showStore({ params, auth, response }) {
    const authStore = await auth.use('store').authenticate()

    if (authStore) {
      const store = await Store.findOrFail(params.id)

      return response.status(200).send({
        data: store,
      })
    }
  }

  public async updateStore({ params, auth, response, request }) {
    const authStore = await auth.use('store').authenticate()

    if (authStore) {
      const body = request.only(['fantasy_name', 'soci_reason', 'cnpj', 'phone'])

      const store = await Store.findOrFail(params.id)

      if (store) {
        store.merge(body)

        await store.save()

        return response.status(200).send({
          data: store,
          message: 'Atualização realizada com sucesso!',
        })
      }
    }
  }

  public async deleteStore({ params, response }) {
    const store = await Store.findOrFail(params.id)

    await store.delete()

    return response.status(200).send({
      message: 'Loja deletada do sistema.',
    })
  }

  public async desativeStore({ params, response, request }) {
    const store = await Store.findOrFail(params.id)

    const desative = request.only(['desative'])

    if (store) {
      store.merge(desative)
      await store.save()

      if (desative.desative === 0) {
        return response.status(200).send({
          message: 'Conta desativada',
        })
      } else {
        return response.status(200).send({
          message: 'Conta ativada',
        })
      }
    }
  }
}
