'use strict'

const User = use('App/Models/User')
const { validateAll } = use('Validator')

class UserController {

    async store({ request }) {

        const rules = {
            username: 'required|unique:users',
            email: 'required|email|unique:users',
            password: 'required|confirmed'
        }

        const validation = await validateAll(request.all(), rules)

        if (validation.fails()) {
            return validation.messages()
        }

        const data = request.only(['username', 'email', 'password'])

        const user = await User.create(data)

        return user
    }
}

module.exports = UserController
