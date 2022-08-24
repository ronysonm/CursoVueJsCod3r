new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: ''
    },
    methods: {
        mostrarAlerta() {
            alert('Alerta!')
        },
        exemplo1(event) {
            this.valor = event.target.value
        },
    }
})