const express = require("express")
const router = express.Router()

router.post('/', (request, response) => {
    const body = request.body
    createUser(response, request, body)
})

async function createUser(response, request, data) {
    const currentUser = request.app.locals.user 
    const checks = await currentUser.addNewUser(data)
    console.log(checks)
    if(checks) {
        request.session.username = data.username
    }
    response.send(JSON.stringify(checks))
}

module.exports = router