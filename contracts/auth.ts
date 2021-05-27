/**
 * Contract source: https://git.io/JOdz5
 *
 * Feel free to let us know via PR, if you find something broken in this
 * file.
 */

import Admin from 'App/Models/Admin'
import Store from 'App/Models/Store'
import Vendor from 'App/Models/Vendor'

declare module '@ioc:Adonis/Addons/Auth' {
  /*
  |--------------------------------------------------------------------------
  | Providers
  |--------------------------------------------------------------------------
  |
  | The providers are used to fetch users. The Auth module comes pre-bundled
  | with two providers that are `Lucid` and `Database`. Both uses database
  | to fetch user details.
  |
  | You can also create and register your own custom providers.
  |
  */
  interface ProvidersList {
    /*
    |--------------------------------------------------------------------------
    | User Provider
    |--------------------------------------------------------------------------
    |
    | The following provider uses Lucid models as a driver for fetching user
    | details from the database for authentication.
    |
    | You can create multiple providers using the same underlying driver with
    | different Lucid models.
    |
    */
    user: {
      implementation: LucidProviderContract<typeof Admin>
      config: LucidProviderConfig<typeof Admin>
    }
    store: {
      implementation: LucidProviderContract<typeof Store>
      config: LucidProviderConfig<typeof Store>
    }
    vendor: {
      implementation: LucidProviderContract<typeof Vendor>
      config: LucidProviderConfig<typeof Vendor>
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Guards
  |--------------------------------------------------------------------------
  |
  | The guards are used for authenticating users using different drivers.
  | The auth module comes with 3 different guards.
  |
  | - SessionGuardContract
  | - BasicAuthGuardContract
  | - OATGuardContract ( Opaque access token )
  |
  | Every guard needs a provider for looking up users from the database.
  |
  */
  interface GuardsList {
    /*
    |--------------------------------------------------------------------------
    | OAT Guard
    |--------------------------------------------------------------------------
    |
    | OAT, stands for (Opaque access tokens) guard uses database backed tokens
    | to authenticate requests.
    |
    */
    api: {
      implementation: OATGuardContract<'user', 'api'>
      config: OATGuardConfig<'user'>
    }
    store: {
      implementation: OATGuardContract<'store', 'api'>
      config: OATGuardConfig<'store'>
    }
    vendor: {
      implementation: OATGuardContract<'vendor', 'api'>
      config: OATGuardConfig<'vendor'>
    }
  }
}
