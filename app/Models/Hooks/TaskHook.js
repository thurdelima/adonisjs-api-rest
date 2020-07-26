'use strict'

const Mail = use('Mail')
const Helpers = use('Helpers')

const Kue = use('Kue')
const Job = use('App/Jobs/NewTaskMail')

const TaskHook = exports = module.exports = {}





TaskHook.sendNewTaskMail = async taskInstance => {

    
    //hook acionado quando cria ou altera uma task com user_id
    if(!taskInstance.user_id && !taskInstance.dirty.user_id)  {
        return
    }

    console.log('executou')

    const {email, username } = await taskInstance.user().fetch()
    const file = await taskInstance.file().fetch()
    const {title} = taskInstance

    Kue.dispatch(Job.key, {email, username, file, title}, {attemps: 3})
    //enviar email de uma nova ta

    


}
