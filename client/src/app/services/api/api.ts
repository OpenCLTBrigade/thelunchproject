import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.API_URL
})

const token = localStorage.getItem('token')
const handleSuccess = response => response
const handleError = error => {
    console.error(error)
    return Promise.reject(error)
}

instance.defaults.headers.common['Authorization'] = token && `Bearer ${token}`
instance.interceptors.response.use(handleSuccess, handleError)

export default instance
