<script setup>
import ProfileTitle from './components/ProfileTitle.vue'
</script>

<template>
  <header>
    <div class="widgets">
      <div class="widget-image">
        <a href="/">
          <img class="logo" src="./assets/coffcook.png" width="125" height="125" />
        </a>
      </div>
      <div class="widget-text">
        <ProfileTitle name="Maxwell K. Kang" desc="Senior Game Developer, Open Source Author, and a Gamer." />
        <nav>
          <RouterLink to="/">About</RouterLink> |
          <RouterLink to="/work">Work</RouterLink> |
          <RouterLink to="/games">Games</RouterLink> |
          <RouterLink to="/cats">Cats</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <main>
    <hr />
    <br />
    <div class="view">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.3;
  margin: 2rem;
}

nav {
  margin: 1rem 0 0 0;
}

@media (max-width: 900px) {
  header {
    margin: 1.1rem;
    margin-bottom: 2rem;
  }

  .view  {
    margin-left: 1.1rem;
    margin-right: 1.1rem;
  }
}
</style>
