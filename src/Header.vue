<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
const isFeaturesOpen = ref(false);
</script>

<template>
    <img id="logo" src="./assets/images/logo.svg" alt="Logo">
    <img @click="isMenuOpen = true" id="menu" src="./assets/images/icon-menu.svg" alt="Menu">
    <div @click="isMenuOpen = false" id="overlay" :style="isMenuOpen ? 'visibility: visible;' : ''"></div>
    <div class="headerSection" :style="isMenuOpen ? 'transform: translate(-100%)' : ''">
        <img @click="isMenuOpen = false" id="cross" src="./assets/images/icon-close-menu.svg" alt="Close Icon">
        <div class="navigations">
          <nav>
            <a class="dropdown" @click="isFeaturesOpen = !isFeaturesOpen">
                Features 
                <img src="./assets/images/icon-arrow-down.svg" alt="arrow">
            </a>
            <div class="options" :style="isFeaturesOpen ? 'visibility: visible;' : ''">
                    <div class="option">
                        <img src="./assets/images/icon-todo.svg" alt="Todo">
                        <span>Todo list</span>
                    </div>
                    <div class="option">
                        <img src="./assets/images/icon-calendar.svg" alt="Calendar">
                        <span>Calendar</span>
                    </div>
                    <div class="option">
                        <img src="./assets/images/icon-reminders.svg" alt="Reminders">
                        <span>Reminders</span>
                    </div>
                    <div class="option">
                        <img src="./assets/images/icon-planning.svg" alt="Planning">
                        <span>Planning</span>
                    </div>
                </div>
            <a class="dropdown">
                Company 
                <img src="./assets/images/icon-arrow-down.svg" alt="arrow">
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
#menu {
    display: none;
}
#overlay {
    position: fixed;
    visibility: hidden;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
.headerSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
    #cross {
        display: none;
    }
    .navigations nav {
        position: relative;
    }
    .navigations a {
        margin-left: 1rem;
        margin-right: 1rem;
        color: var(--medium-gray);
        font-weight: 700;
    }
        .navigations a:hover {
            cursor: pointer;
            color: var(--almost-black);
        }
            .navigations a:hover .options {
                color: var(--medium-gray);
            }
        .options {
            visibility: hidden;
            position: absolute;
            padding: 1rem;
            left: 0;
            top: 150%;
            border-radius: 0.5rem;
            box-shadow: 0.25rem 0.25rem 0.5rem #888;
            z-index: 3;
        }
            .option {
                display: grid;
                grid-template-columns: 30% 70%;
                font-weight: 400;
                margin-block-end: 0.5rem;
            }
                .option:hover {
                    cursor: pointer;
                }
                .option:last-child {
                    margin-block-end: 0;
                }
                .option img {
                    position: static !important;
                    transform: none !important;
                }
                .option span {
                    font-size: 0.8rem;
                    align-self: center;
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

@media screen and (max-aspect-ratio: 1) {
    #menu {
        display: block;
        height: 100%;
        padding: 1rem;
    }
    .headerSection {
        position: fixed;
        flex-direction: column;
        background-color: var(--almost-white);
        width: 50vw;
        height: 100vh;
        left: 100%;
        transition: 1s;
        z-index: 1;
        align-items: normal;
        padding: 2rem;
        justify-content: start;
    }
        #cross {
            display: block;
            position: absolute;
            right: 2rem;
            justify-self: end;
        }
        .navigations nav {
            display: flex;
            flex-direction: column;
            margin-block-start: 15vh;
        }
            .navigations nav a{
                margin-left: 0;
                margin-bottom: 2rem;
            }
                .navigations nav a img {
                    margin-left: 0.5rem;
                }
        .auth button {
            width: 100%;
        }
}
</style>
