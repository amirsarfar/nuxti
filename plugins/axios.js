export default function ({ $axios, store }, inject) {
    const dynaApi = $axios.create({
        baseUrl: 'http://127.0.0.1:8800/dyna/api/v1/'
    })

    // dynaApi.setBaseUrl()

    // const token = store.state.currentUser.token
    // dynaApi.setToken(token, 'Bearer')

    // dynaApi.onResponse((response) => {
    //     if (response.status === 404) {
    //         console.log('Oh no it returned a 404')
    //     }
    // })

    inject('dynaApi', dynaApi)
}
