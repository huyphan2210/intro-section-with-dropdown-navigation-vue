<script setup lang="ts">

</script>

<template>
    <img id="logo" src="./assets/images/logo.svg" alt="logo">
    <div class="headerSection">
        <div class="navigations">
          <nav>
            <a class="dropdown">
                Features
                <img src="./assets/images/icon-arrow-down.svg">
            </a>
            <a class="dropdown">
                Company
                <img src="./assets/images/icon-arrow-down.svg">
            </a>
            <a>Careers</a>
            <a>About</a>
          </nav>
        </div>
        <div class="auth">
            <button type="button">Login</button>
            <button type="button">Register</button>
        </div>
    </div>
</template>

<style scoped>
#logo {
    padding: 1rem;
}
.headerSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
    .navigations a {
        position: relative;
        margin-left: 1rem;
        margin-right: 1rem;
        color: var(--medium-gray);
        font-weight: 700;
    }
        .navigations a:hover {
            cursor: pointer;
            color: var(--almost-black);
        }
    .navigations a img {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
    }
    
        .navigations a:hover img {
            filter: brightness(0.02);
        }

    .auth button {
        padding: 1rem 2rem;
        font-family: Epilogue, sans-serif;
        border-radius: 1rem;
        background-color: transparent;
        color: var(--medium-gray);
        font-weight: 700;
        border-color: transparent;
    }
        .auth button:hover {
            color: var(--almost-black);
            cursor: pointer;
        }
    .auth button:last-child {
        border-color: var(--medium-gray);
    }
        .auth button:last-child:hover {
            border-color: var(--almost-black);
        }
</style>
