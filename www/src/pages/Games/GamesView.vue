<script setup>
import ProfileSteam from '@/components/ProfileSteam.vue'
</script>

<template>
  <div class="widgets">
    <div>
      <ProfileSteam accountId="76561198097672226" vanityId="coffcook" />
    </div>
    <div class="text">
      <h3>Here's some game recommendations incase you're bored:</h3>
      <ul>
        <li><a target="_blank" href="https://store.steampowered.com/app/736260/">Baba is You</a></li>
        <li><a target="_blank" href="https://store.steampowered.com/app/368370/">Her Story</a></li>
        <li><a target="_blank" href="https://store.steampowered.com/app/1092790/">Inscryption</a></li>
        <li><a target="_blank" href="https://store.steampowered.com/app/319630/">Life is Strange</a></li>
        <li><a target="_blank" href="https://store.steampowered.com/app/221910/">Stanley Parable</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.text {
  margin-left: 20px;
}
</style>