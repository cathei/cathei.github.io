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
      <h3>Tang</h3>
      The oldest of all and she is after blood!
    </CatsItem>
    <CatsItem :image="ImgCoffee">
      <h3>Coffee</h3>
      The owl-looking cat, wakes you up by biting your softest part.
    </CatsItem>
    <CatsItem :image="ImgCookie">
      <h3>Cookie</h3>
      The smart white cat who loves belly rub! Good at fetching ball.
    </CatsItem>
    <CatsItem :image="ImgAnchovy">
      <h3>Anchovy</h3>
      Scardie cat who hides very quick. But his fur is so soft!
    </CatsItem>
    <CatsItem :image="ImgPepper">
      <h3>Pepper</h3>
      Cat that purrs alot and craves attention. Always a baby.
    </CatsItem>
  </div>
</template>

<style scoped>
.gallery {
  justify-content: center;
}
</style>