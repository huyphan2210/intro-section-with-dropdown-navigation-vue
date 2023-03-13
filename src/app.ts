import { createApp } from 'vue';
import './style.css';
import Main from './Main.vue';
import Header from './Header.vue';

createApp(Header).mount('header');
createApp(Main).mount('main');
