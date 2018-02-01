function authClient(authToken) {
    var config = {
        headers: {
            Authorization: 'Bearer ' + authToken
        }
    }
}

export {authClient}