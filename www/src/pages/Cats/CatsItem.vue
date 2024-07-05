<script setup>
defineProps({
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="widgets">
    <img class="cat" :src="image"/>
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.widgets {
  justify-content: left;
  margin-bottom: 10px;
}

.cat {
  width: 640px;
  height: 480px;
}

.text {
  margin-left: 20px;
}
</style>