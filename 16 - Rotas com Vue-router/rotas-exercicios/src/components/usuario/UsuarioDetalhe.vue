<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr>
    <p><strong>Código: </strong>{{ id }}</p>
    <router-link tag="button" primario :to="`/usuario/${$route.params.id}/editar`">Editar</router-link><br>
    <router-link tag="button" primario :to="{ name: 'editarUsuario', params: {id }, query: { completo: false, lingua: 'pt' } }">Editar</router-link>
  </div>
</template>

<script>
export default {
    props: ['id'],
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch:{
    //     $route(to, from) {
    //         this.id = to.params.id
    //     }
    // },
}
</script>

<style>

</style>