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
    <div class="widget-image">
      <img class="cat" :src="image"/>
    </div>
    <div class="widget-text">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.widgets {
  justify-content: left;
  margin-bottom: 1rem;
}

.cat {
  width: 640px;
  height: 480px;
  object-fit: contain
}

@media (max-width: 900px) {
  .cat {
    width: 100%;
    height: 100%;
  }

  .widgets {
    margin-bottom: 2rem;
  }
}

</style>