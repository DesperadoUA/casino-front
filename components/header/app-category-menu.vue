<template>
    <section class="category_menu">
        <div :class="currentState" @click="changeState"></div>
        <div :class="overlayState"></div>
        <div :class="drawerState">
            <div class="container">
                <div class="wrapper_menu">
                    <div class="full-width">
                        <app_search />
                        <div class="wrapper_category_menu">
                            <app_block_menu />
                            <app_block_menu />
                            <app_block_menu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import app_search from './app-search'
import app_block_menu from './app-block-menu.vue'
export default {
        name: "app-category-menu",
        data(){
            return {
               close: true,
               statusDrawer: true
            }
        },
        components:{app_search, app_block_menu},
        methods: {
			changeState() {
                this.statusDrawer = !this.statusDrawer
                this.close = !this.close
            }
        },
        computed: {
            currentState() {
                const status = this.close ? '' : 'active'
                return `toggle ${status}`
            },
            overlayState(){
                const status = this.close ? '' : 'active'
                return `overlay ${status}`
            },
            drawerState() {
                const status = this.statusDrawer ? '' : 'activ_menu'
                return `drawer_menu ${status}`
            }
        }

    }
</script>
<style scoped>
    .toggle {
        position: absolute;
        top: 25px;
        right: 20px;
        width: 40px;
        height: 40px;
        background: var(--orange);
        border-radius: 50%;
        color: var(--black);
        cursor: pointer;
        z-index: 2;
    }
    .toggle:before {
        content: '+';
        position: absolute;
        top: 0px;
        left: 0px;
        font-size: 40px;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        transition: 0.5s;
        font-weight: bold;
        background: var(--orange);
    }
    .toggle.active:before {
        transform: rotate(405deg);
        background: var(--white);
        color: var(--black);
    }
    .overlay {
        position: fixed;
        top: 25px;
        right: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(27, 27, 27, 0.95);
        z-index: 1;
        transition: transform 0.5s;
    }
    .overlay.active {
        transform: scale(150, 150);
    }
    .drawer_menu {
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        transition: 1s;
        transform: translateX(100%) translateY(-100%);
    }
    .activ_menu {
       transform: translateX(0%) translateY(0%);
    }
    .show {
        opacity: 1;
    }
    .wrapper_menu {
        display: flex;
        justify-content: space-between;
        opacity: 0;
        align-items: center;
        width: 100%;
        height: 100vh;
        flex-wrap: wrap;
    }
    .activ_menu .wrapper_menu {
        transition: 1.5s;
        opacity: 1;
    }
    .wrapper_category_menu {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
</style>