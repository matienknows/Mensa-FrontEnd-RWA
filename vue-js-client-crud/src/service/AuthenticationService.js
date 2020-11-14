import http from '../http-common'


class AuthenticationService {
    registerSuccesfulLogin(username, password) {
        //sessionStorage.setItem('authenticatedUser', username)
        //this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }
x
    startAuthentication(username, password) {
        console.log("AuthenticationService", username, password)
        //return http.get('/basicauth', {headers: {authorization: this.createBasicAuthToken(username, password)}});
        return http.get('/basicauth', {headers: {authorization: this.createBasicAuthToken(username, password)}});

    }

    createBasicAuthToken(username, password) {
        console.log("createdAuthenticationToken:", username, password)
        let userToken = 'Basic '  + window.btoa(username + ":" + password);
        sessionStorage.setItem('authenticatedUser', username )
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
                    console.log("Interceptor is called:", sessionStorage.getItem('authenticatedUser'))
                }
                return config
            }
        )
    }
}

export default new AuthenticationService();