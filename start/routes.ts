/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('register', 'AdminsController.register')
Route.post('login', 'AdminsController.login')

// ROTAS DE FUNCINALIDADES DO ADMINISTRADOR DO SISTEMA

Route.get('show', 'AdminsController.show').middleware('auth')
Route.get('edit', 'AdminsController.update').middleware('auth')
// Route.get('desative', 'AdminsController.update').middleware('auth')

// ROTAS DE FUNCIONALIDADE DA LOJA

Route.post('register_store', 'StoresController.registerStore').middleware('auth')
Route.post('login_store', 'StoresController.loginStore')
Route.get('show_store/:id', 'StoresController.showStore')
Route.put('update_store/:id', 'StoresController.updateStore')
Route.delete('delete_store/:id', 'StoresController.deleteStore').middleware('auth')
Route.put('desative_store/:id', 'StoresController.desativeStore').middleware('auth')

// Rotas de teste (DELTETAR ANTES DE SUBIR O PROJETO PARA PRODUÇÃO)

Route.post('posts', 'PostsController.store').middleware('auth')
Route.get('posts', 'PostsController.index').middleware('auth')

// Rotas de Produtos

Route.post('product', 'ProductsController.registerProduct')
