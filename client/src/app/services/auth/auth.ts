import api from '../api/api'

class AuthService {
    private _token: string = localStorage.getItem('token')

    isLoggedIn() {
        return !!this._token
    }

    login({ email, password }) {
        return api
            .post('auth/token', { email, password })
            .then(response => localStorage.setItem('token', response.data.token))
    }

    logout() {
        localStorage.removeItem('token')
    }
}

export default new AuthService()
