<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="contador">
    <div v-for="i in 10" :key="i">
      <app-contador />
    </div>
  </div>
</template>

<script>
import Contador from './Contador.vue'

export default {
  components: { 'app-contador': Contador }
};
</script>
