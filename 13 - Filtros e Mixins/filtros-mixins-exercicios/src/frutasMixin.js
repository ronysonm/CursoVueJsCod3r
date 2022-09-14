export default {
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    },
    data() {
        return {
            fruta: '',
            frutas: ['banana', 'maça', 'laranja']
        }
    }
}