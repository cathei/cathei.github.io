<script setup>
import ProfileSteam from '@/components/ProfileSteam.vue'
</script>

<template>
  <div class="widgets">
    <div class="widget-image">
      <ProfileSteam accountId="76561198097672226" vanityId="coffcook" />
    </div>
    <div class="widget-text">
      <h2>Recommendations</h2>
      <p>Here're some game recommendations incase you're bored:</p>
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
</style>