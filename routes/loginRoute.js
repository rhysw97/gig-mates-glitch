const express = require("express")
const router = express.Router()

//app.use('/login', loginRoute )
router.post('/', (request, response) => {
    const body = request.body
    waitForLoginDetails(body, response, request);
});

//waits for login details and checks they have been accepted. Sends True or false back to user
async function waitForLoginDetails(data, response, request) {
    console.log('login data', data)
    const currentUser = request.app.locals.user 
    const loginData = await currentUser.checkLoginDetails(data);
    console.log(loginData)
    if(loginData.accepted) {
        request.session.username = loginData.username
        const data = {
            username: loginData.username,
            loggedin: true
        }
        console.log('data', data)

        response.send(data)
    } else {
        response.send({loggedin:false})
    }  
}

router.post('/logout', (request, response) => {
    request.session.destroy();
})

module.exports = router