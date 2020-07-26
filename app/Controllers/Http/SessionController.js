'use strict'

const User = use('App/Models/User')
const { validateAll } = use('Validator')

class SessionController {
    async store({request, response, auth}){
        const {email, password} = request.all()

        const rules = {
            email: 'required|email',
            password: 'required'
        }

        const validation = await validateAll(request.all(), rules)

        if (validation.fails()) {
            return validation.messages()
        }

        const token = await auth.attempt(email, password)

        return token
    }
}


module.exports = SessionController
