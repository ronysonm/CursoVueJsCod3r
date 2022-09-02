<template>
  <div class="nome-completo">
    <h3> Nome Completo </h3>
    <span><strong>{{ nome }} {{ sobrenome }}</strong></span>
  </div>
</template>

<script>
export default {
    props: {
        nome: { 
            type: String,
            required: true
        },
        sobrenome: {
            type: String,
            required: true
        }
    }

}
</script>
