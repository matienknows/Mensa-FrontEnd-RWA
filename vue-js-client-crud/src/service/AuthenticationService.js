import http from '../http-common'
//import store from '../store/index'


class AuthenticationService {
    registerSuccesfulLogin(username, password) {
        console.log("calling setupAxiosIntecptor")
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    startAuthentication(username, password) {
        return http.get('/basicauth', {headers: {authorization: this.createBasicAuthToken(username, password)}});

    }

    createBasicAuthToken(username, password) {
        let token = 'Basic ' + window.btoa(username + ":" + password);
        localStorage.setItem('token', token)
        //sessionStorage.setItem('authenticatedUser', username)
        return token
    }

    logout() {
        localStorage.removeItem('token');
        sessionStorage.clear()
    }

    isUserLoggedIn() {
        let token = localStorage.getItem('token');
        if (token === null) return false
        return true
    }

    setupAxiosInterceptors(userToken) {
        http.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.Authorization = userToken
                    console.log(userToken)
                }
                return config
            }
        )
    }
}

export default new AuthenticationService();