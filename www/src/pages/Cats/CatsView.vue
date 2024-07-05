<script setup>
import CatsItem from './CatsItem.vue'
import ImgTang from '@/assets/cats/tang.jpg'
import ImgCoffee from '@/assets/cats/coffee.jpg'
import ImgCookie from '@/assets/cats/cookie.jpg'
import ImgAnchovy from '@/assets/cats/anchovy.jpg'
import ImgPepper from '@/assets/cats/pepper.jpg'
</script>

<template>
  <div class="gallary">
    <CatsItem :image="ImgTang">
      <h2>Tang</h2>
      The oldest of all and she is after blood!
    </CatsItem>
    <CatsItem :image="ImgCoffee">
      <h2>Coffee</h2>
      The owl-looking cat, wakes you up by biting your softest part.
    </CatsItem>
    <CatsItem :image="ImgCookie">
      <h2>Cookie</h2>
      The smart white cat who loves belly rub! Good at fetching ball.
    </CatsItem>
    <CatsItem :image="ImgAnchovy">
      <h2>Anchovy</h2>
      Scardie cat who hides very quick. But his fur is so soft!
    </CatsItem>
    <CatsItem :image="ImgPepper">
      <h2>Pepper</h2>
      Cat that purrs alot and craves attention. Always a baby.
    </CatsItem>
  </div>
</template>

<style scoped>
.gallery {
  justify-content: center;
}
</style>