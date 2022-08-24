new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classe2: true,
		classe3: true,
		inputClass: '',
		classe4: '',
		inputBool: '',
		cor5 : '',
		estilo5: {
			width: '100px',
			height: '100px'
		},
		width: '0'

	},
	methods: {
		iniciarEfeito() {
			setInterval(() => { this.classe1 = this.classe1 == 'destaque' 
											? 'encolher' : 'destaque'
										
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 1
				this.width = `${valor}%`
				if (valor >= 100) clearInterval(temporizador)
			}, 50)

		},
		setPerigo (event){
			if (event.target.value == 'true') {
				this.classe2 = true
			} else if(event.target.value == 'false') {
				this.classe2 = false
			}
		}
	}
})
