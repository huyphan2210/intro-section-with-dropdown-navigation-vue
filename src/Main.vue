<script setup lang="ts">

</script>

<template>
  <div class="heroSection">
    <h1>Make remote work</h1>
    <p>
      Get your team in sync, no matter your location. Streamline processes, 
    create team rituals, and watch productivity soar.
    </p>
    <button type="button">Learn more</button>
    <div class="companies">
      <img src="./assets/images/client-databiz.svg" alt="databiz">
      <img src="./assets/images/client-audiophile.svg" alt="audio phile">
      <img src="./assets/images/client-meet.svg" alt="meet">
      <img src="./assets/images/client-maker.svg" alt="maker">
    </div>
  </div>
  <div id="heroDesktop">
    <img src="./assets/images/image-hero-desktop.png" alt="Hero Desktop">
  </div>
</template>

<style scoped>
.heroSection {
  position: relative;
}
  .heroSection h1 {
    font-size: 5rem;
    font-weight: 700;
    margin-block: 4rem;
  }

  .heroSection p {
    color: var(--medium-gray);
    line-height: 2rem;
    font-weight: 700;
    margin-block: 4rem;
  }

  .heroSection button {
    font-family: Epilogue, sans-serif;
    font-weight: 700;
    border-radius: 1rem;
    color: var(--almost-white);
    padding: 1rem 2rem;
    background-color: var(--almost-black);
  }
    .heroSection button:hover {
      cursor: pointer;
      background-color: transparent;
      color: var(--almost-black);
    }

  .companies {
    position: absolute;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    bottom: 0;
  }

  #heroDesktop {
    text-align: end;
    width: 100%;
  }

  #heroDesktop img {
    width: 80%;
  }
</style>
