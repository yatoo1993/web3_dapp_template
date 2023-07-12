import Axios from "axios"
const axios = Axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
        Language: window.localStorage.getItem('i18nextLng') ?? 'en',
    },

})

axios.interceptors.request.use(config => {
    if (config.headers) {
        const lang =  window.localStorage.getItem('i18nextLng') ?? 'en'
        config.headers['Language'] = lang
        const token = window.localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
    }
    return config
}, err => Promise.reject(err))
axios.interceptors.response.use(config => {
    // if(config.status > 300){
    //     return Promise.reject(config)
    // }
    return config
}, err => {
    if (err.response.status === 401) {
        window.localStorage.removeItem('token')
        window.location.href = '/login'
        return Promise.reject(err)
    } else {
        const errData = err.response.data
        const isPost = err.response.config.method === 'post'
        if (errData && isPost && errData.message)
        return Promise.reject(err)
    }
})

export default axios