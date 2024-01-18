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
                            <app_block_menu :title="highestRating" :value="thirdMenu" :clickItemMenu="changeState"/>
                            <app_block_menu :title="popularCasinos" :value="firstMenu" :clickItemMenu="changeState"/>
                            <app_block_menu :title="newCasino" :value="secondMenu" :clickItemMenu="changeState"/>
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
import TRANSLATE from '~/helpers/translate'
import config from '~/config'
export default {
        name: "app-category-menu",
        data(){
            return {
               close: true,
               statusDrawer: true,
               popularCasinos: TRANSLATE.POPULAR_CASINOS[config.LANG],
               highestRating: TRANSLATE.HIGHEST_RATING[config.LANG],
               newCasino: TRANSLATE.NEW_CASINOS[config.LANG]
            }
        },
        components:{app_search, app_block_menu},
        methods: {
			changeState() {
                console.log('Change state');
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
            },
            firstMenu(){
                const settings = this.$store.getters['settings/getSettings']
				if(settings) {
                    const menu = settings.filter(item => item.key_id === 'header_menu_1')
                    return menu.length ? menu[0].value : []
				}
				return []
            },
            secondMenu(){
                const settings = this.$store.getters['settings/getSettings']
				if(settings) {
                    const menu = settings.filter(item => item.key_id === 'header_menu_2')
                    return menu.length ? menu[0].value : []
				}
				return []
            },
            thirdMenu(){
                const settings = this.$store.getters['settings/getSettings']
				if(settings) {
                    const menu = settings.filter(item => item.key_id === 'header_menu_3')
                    return menu.length ? menu[0].value : []
				}
				return []
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
    @media (min-width: 320px) and (max-width: 767px) {
        .wrapper_category_menu {
            flex-wrap: wrap;
        }
        .drawer_menu {
            overflow-y: scroll;
        }
        .block_menu {
            margin-bottom: 30px;
        }
    }
</style>