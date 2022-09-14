import Vue from 'vue'
import axios from 'axios'

//axios.defaults.baseURL = 'https://simples-teste2-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://simples-teste2-default-rtdb.firebaseio.com/',
            // headers: {
            //     "Autorization": "abc123"
            // }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            // if(config.method == 'post') {
            //     config.method = 'put'
            // }
            return config
        })

        // Vue.prototype.$http.interceptors.response.use(res => {
        //     const array = []
        //     for (let chave in res.data) {
        //         array.push({ id: chave, ...res.data[chave]})
        //     }

        //     res.data = array
        //     return res
        // })
    }
})