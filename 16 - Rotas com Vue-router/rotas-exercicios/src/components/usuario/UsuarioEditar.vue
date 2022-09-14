<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <p><strong>Editar: </strong> {{ id }}</p>
    <p><strong>Editar: </strong> {{ $route.params.id }}</p><br>
    <p><strong>Completo: </strong>{{ $route.query.completo ? 'Sim': 'Não' }}</p>
    <p><strong>Lingua: </strong>{{ $route.query.lingua }}</p>

  </div>
</template>

<script>
export default {
    props: ['id']

}
</script>

<style>

</style>