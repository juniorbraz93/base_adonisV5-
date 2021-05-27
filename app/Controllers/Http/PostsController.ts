// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from 'App/Models/Post'

export default class PostsController {
  public async index({ response }) {
    const posts = await Post.all()

    return response.status(200).send({
      data: posts,
    })
  }

  public async store({ response, request }) {
    const body = request.only(['title', 'description'])

    const posts = await Post.create(body)

    return response.status(200).send({
      data: posts,
      message: 'Post realizado com sucesso!',
    })
  }

  // public async show({}) {}

  // public async update({}) {}

  // public async destroy({}) {}
}
