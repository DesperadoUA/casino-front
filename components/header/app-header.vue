<template>
  <header>
    <app_category_menu />
    <div class="container header_container">
      <app_logo />
      <div class="burger" @click="showMenu">
        <span class="burger_item"></span>
        <span class="burger_item"></span>
        <span class="burger_item"></span>
      </div>
      <div :class="'drawer '+drawerOpen" @click="closeMenu">
      </div>
      <div :class="'burger_close '+crossOpen" @click="closeMenu">
        &#10006;
      </div>
      <div :class="'header_right_part '+menuOpen">
      <app_menu />
      </div>
    </div>
  </header>
</template>
<script>
    import app_logo from './app-logo'
    import app_menu from './app-menu'
    import app_category_menu from './app-category-menu.vue'
    export default {
        name: "app-header",
        data(){
            return {
                settings: {},
				        menuOpen: '',
                crossOpen: '',
				        drawerOpen: ''
            }
        },
        components: {app_logo, app_menu, app_category_menu},
        async mounted(){
          await this.$store.dispatch('options/setOptions')
          await this.$store.dispatch('settings/setSettings')
          const settings = this.$store.getters['settings/getSettings']
          this.settings = settings
        },
        methods: {
			  showMenu(){
				    this.menuOpen = 'menu_show'
            this.crossOpen = 'show'
            this.drawerOpen = 'drawer_show'
			  },
        closeMenu() {
				    this.menuOpen = ''
				    this.crossOpen = ''
				    this.drawerOpen = ''
        },
			  searchActivate(){
				//this.$store.dispatch('common/setShowSearch', !this.$store.getters['common/getShowSearch'])
			  }
      }
    }
</script>

<style>
    header{
      width: 100%;
      height: 80px;
      box-sizing: border-box;
      background: var(--strong-blue);
      padding-top: 5px;
      padding-bottom: 5px;
      position: fixed;
      top:0px;
      left:0px;
      z-index: 7;
    }
  .header_container {
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
  }
  .header_right_part {
    display: flex;
  }
  .burger {
    display: none;
    height: 30px;
    margin-top: 10px;
    padding: 5px;
  }
  .burger_item {
    width: 20px;
    height: 3px;
    background: var(--white);
    margin: 5px 0px;
    display: block;
  }
  .menu_show {
    right: 0px!important;
  }
  .burger_close {
    position: fixed;
    z-index: 9;
    top:20px;
    right: -100%;
    width: 40px;
    height: 40px;
    color: white;
    font-size: 30px;
    transition: 0.7s;
  }
  .show {
    right: 25px;
  }
  .drawer_show {
    right: 0px!important;
  }
    .drawer {
      position: fixed;
      width: 100vw;
      height: 100vh;
      z-index: 2;
      background: rgba(0, 0, 0, 0.4);
      right: -110%;
      top:0;
    }
  @media (min-width: 320px) and (max-width: 767px) {
       .header_right_part {
         width: 260px;
         position: fixed;
         z-index: 3;
         right: -100%;
         top:0px;
         background: var(--strong-blue);
         height: 100vh;
         padding-top: 50px;
         padding-bottom: 20px;
         transition: 0.7s;
       }
       .burger {
         display: block;
       }
    }
    @media (min-width: 768px) and (max-width: 1200px) {
      .header_right_part {
        width: 260px;
        position: fixed;
        z-index: 3;
        right: -100%;
        top:0px;
        background: var(--strong-blue);
        height: 100vh;
        padding-top: 50px;
        padding-bottom: 20px;
        transition: 0.7s;
      }
      .burger {
        display: block;
      }
    }
</style>