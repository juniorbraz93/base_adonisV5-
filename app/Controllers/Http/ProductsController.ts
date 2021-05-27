import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({}) {}

  public async registerProduct({ response, request, auth }) {
    const store = await auth.use('store').authenticate()

    if (store) {
      const body = request.only([
        'name_product',
        'brand',
        'size',
        'quantity',
        'model',
        'price',
        'category',
        'bar_code',
        'ntf_numbering',
      ])

      const product = await Product.create(body)

      return response.status(200).send({
        data: product,
        message: 'Cadastro realizado com sucesso!',
      })
    }
  }

  public async show({ params, response }) {
    
  }

  public async update({}) {}

  public async delete({}) {}

  public async desative({}) {}
}
