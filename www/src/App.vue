<script setup>
import ProfileTitle from './components/ProfileTitle.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <img class="logo" src="./assets/coffcook.png" width="125" height="125" />
      <div>
        <ProfileTitle name="Maxwell K. Kang" desc="Senior Game Developer, Open Source Author, and a Gamer." />
        <nav>
          <RouterLink to="/">About</RouterLink> |
          <RouterLink to="/work">Work</RouterLink> |
          <RouterLink to="/games">Games</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <main>
    <hr /><br />
    <RouterView />
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

nav {
  margin: 1rem 0 0 0;
}

</style>
