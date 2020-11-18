import http from '../http-common'

class AuthenticationService {
    registerSuccesfulLogin(username, password) {
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    startAuthentication(username, password) {
        return http.get('/basicauth', {headers: {authorization: this.createBasicAuthToken(username, password)}});

    }

    createBasicAuthToken(username, password) {
        let userToken = 'Basic ' + window.btoa(username + ":" + password);
        sessionStorage.setItem('authenticatedUser', username)
        return userToken
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) return false
        return true
    }

    setupAxiosInterceptors(userToken) {
        http.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.Authorization = userToken
                }
                return config
            }
        )
    }
}

export default new AuthenticationService();