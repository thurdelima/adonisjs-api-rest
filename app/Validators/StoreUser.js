'use strict'

const Antl = use('Antl')

class StoreUser {
  get validateAll () {
    return true
  }
  
  get rules () {


    return {
      
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed'
    }
  }


  //para puxar mensagens q vc mesmo criou
  // get messages () {
  //   return Antl.list('validation')
  // }
}

module.exports = StoreUser
