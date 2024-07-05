<script setup>
defineProps({
  accountId: {
    type: String,
    required: true
  },
  vanityId: {
    type: String,
    required: true
  }
})
</script>

<template>
  <iframe class="steam" :src="'https://gamer2810.github.io/steam-miniprofile/?accountId=' + accountId + '&vanityId=' + vanityId + '&interactive=true'" scrolling="no" allowfullscreen></iframe>
</template>

<style scoped>
.steam {
  border: 0px #ffffff none;
  margin: 0px;
  width: 328px;
  height: 210px;
}
</style>
