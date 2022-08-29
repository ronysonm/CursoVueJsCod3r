<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="incrementar">+</button>
    <button @click="subtrair">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    incrementar() {
      this.contador++;
    },
    subtrair() {
      this.contador--;
    },
  },
};
</script>

<style>
.contador span {
  border-bottom: 1px solid #ccc;
  height: 30px;
  padding: 5px 25px;
}

.contador button{
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: violet;
}
</style>
