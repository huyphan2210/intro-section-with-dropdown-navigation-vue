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
  <div id="heroImg">
    <img id="desktop" src="./assets/images/image-hero-desktop.png" alt="Hero Desktop">
    <img id="mobile" src="./assets/images/image-hero-mobile.png" alt="Hero Mobile">
  </div>
</template>

<style scoped>
.heroSection {
  position: relative;
  z-index: -1;
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

  #heroImg {
    text-align: end;
    width: 100%;
  }

    #desktop {
      width: 80%;
      height: 100%;
    }

    #mobile {
      display: none;
      width: 100%;
    }

@media screen and (min-aspect-ratio: 1) and (max-width: 1280px) {
  .heroSection h1, .heroSection p, .heroSection button {
    margin-block: 2rem;
  }

  .heroSection button {
    margin-block-start: 0;
  }
  
  .companies {
    position: static;
  }
}

@media screen and (max-aspect-ratio: 1) {
  #desktop {
    display: none;
  }
  #mobile {
    display: block;
  }
  .heroSection {
    text-align: center;
  }
    .heroSection h1 {
      font-size: 2rem;
      margin-block: 2rem;
    }
    .heroSection p {
      margin-block: 2rem;
    }
    .heroSection button {
      margin-block-end: 3rem;
    }
    .companies {
      position: static;
      text-align: center;
    }
      .companies img {
        transform: scale(0.8);
      }

      @media screen and (min-width: 768px) {
        .companies {
          display: block;
        }
        .companies img {
          margin-right: 2rem;
        }
      }
}
</style>
