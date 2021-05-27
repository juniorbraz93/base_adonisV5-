import Vendor from 'App/Models/Vendor'

export default class VendorsController {
  public async registerVender({ auth, response, request }) {
    const store = await auth.use('store').authenticate()

    if (store) {
      const body = request.only(['name', 'email', 'password'])

      const vendor = await Vendor.create(body)

      return response.status(200).send({
        data: vendor,
        message: 'Cadastro realizado com sucesso!',
      })
    }
  }

  public async loginVender({ auth, request }) {
    const { email, password } = request.only(['email', 'password'])

    const token = await auth.use('vendor').attempt(email, password, {
      expiresIn: '7days',
    })

    return token
  }

  public async show({}) {}

  public async update({}) {}

  public async delete({}) {}

  public async desative({}) {}
}
