<script setup>
import Title from './components/Title.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <div class="wrapper">
    <img class="logo" src="./assets/coffcook.png" width="125" height="125" />
      <Title name="Maxwell K. Kang" desc="Senior Game Developer, Open Source Author, and a Gamer." />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.3;
  margin: 2rem;
}

.logo {
  display: block;
  margin: 0 2rem 0 0;
}

.wrapper {
  display: flex;
  place-items: center;
  justify-content: center;
}

</style>
