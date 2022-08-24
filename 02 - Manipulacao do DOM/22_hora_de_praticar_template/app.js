new Vue({
  el: "#desafio",
  data: {
    nome: "Ronyson Martins",
    idade: 35,
    imgPath: "https://br.vuejs.org/images/logo.svg"
  },
  methods: {
    idadeTriplicada: function () {
      return this.idade * 3;
    },
    numeroAleatorio: function (min, max) {
        return Math.random(min, max)
    }
  },
});
