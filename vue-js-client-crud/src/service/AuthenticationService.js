import http from '../http-common'
import router from "@/router";


class AuthenticationService {
    registerSuccesfulLogin(username, password) {
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    startAuthentication(username, password) {
        if(this.isUserLoggedIn()) {
            return router.replace({name: 'meal'})
        }
        return http.get('/basicauth', {headers: {authorization: this.createBasicAuthToken(username, password)}});
    }

    createBasicAuthToken(username, password) {
        let token = 'Basic ' + window.btoa(username + ":" + password);
        localStorage.setItem('token', token)
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

    setupAxiosInterceptors(token) {
        http.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.Authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService();