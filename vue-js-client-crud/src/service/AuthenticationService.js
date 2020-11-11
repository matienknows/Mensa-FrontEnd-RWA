import http from '../http-common'

class AuthenticationService {
    registerSuccesfulLogin(username) {
        console.log("AUTHENTICATED SERVICE")
        sessionStorage.setItem('authenticatedUser', username)
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) return false
        return true

    }
    setupAxiosInterceptors() {
        let username = 'user'
        let password = 'pass'
        let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);

        http.interceptors.request.use(
            (config) => {
                config.headers.authorization = basicAuthHeader
            }
        )
    }
}

export default new AuthenticationService();