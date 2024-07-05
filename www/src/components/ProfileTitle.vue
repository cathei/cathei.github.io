<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <h1 class="blue">{{ name }}</h1>
    <h3>{{ desc }}</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

h1, h3 {
  text-align: left;
}

</style>
