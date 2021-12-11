<template>
  <header>
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
        <app_search />
      </div>
      <button @click="searchActivate" class="mobile_search">
        <svg class="search__icon" width="19" height="19" viewBox="0 0 345 344.6" xmlns="http://www.w3.org/2000/svg">
          <path d="M319.3,343.2c-1.6-0.7-21-19.4-43-41.5c-22-22.1-40.3-40.1-40.6-40.1c-0.3,0-4.4,2.5-9,5.6 c-15.4,10.2-32.8,17.5-51.7,21.7c-14.4,3.2-44.3,3.1-59.2-0.1c-28.9-6.3-52.2-19.2-73.6-40.6c-17.7-17.8-27.9-34.4-35.5-57.5 c-5.7-17.3-7.3-30-6.7-50.5c1-29.4,8.1-51.7,24.5-76.5c7.3-11,24.8-29.1,35.9-37C76.2,15.5,97.4,6.2,116.9,2 c12-2.6,44.8-2.7,56.9-0.1c29.9,6.4,53.5,19.1,75.1,40.7c21.4,21.3,34.6,45.9,40.6,75.8c2.7,13.2,2.4,43.3-0.5,56.5 c-4.3,19.3-11.4,36.4-21.6,51.6c-3.1,4.6-5.6,8.6-5.6,9s18.4,19.1,40.9,41.7c44.4,44.5,43.1,42.8,41.8,52.6 C343.1,340.6,329.5,347.8,319.3,343.2L319.3,343.2z M167.2,253c62-11.7,101.5-76.2,84.1-137.2c-11.9-41.6-46.6-72.3-89.2-78.7 c-12.3-1.9-20.2-1.9-32.6,0C105.7,40.7,85.3,51,68.2,68c-52.8,52.6-38.4,142,28.1,175.1C119.4,254.6,141.9,257.8,167.2,253 L167.2,253z"/>
        </svg>
      </button>
    </div>
  </header>
</template>
<script>
    import app_logo from './app-logo'
    import app_menu from './app-menu'
	import app_search from './app-search'
    export default {
        name: "app-header",
        data(){
            return {
                options: {},
				menuOpen: '',
                crossOpen: '',
				drawerOpen: ''
            }
        },
        components: {app_logo, app_menu, app_search},
        async mounted(){
          await this.$store.dispatch('options/setOptions')
          const options = this.$store.getters['options/getOptions']
          this.options = options
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
				console.log('Mobile search')
				this.$store.dispatch('common/setShowSearch', !this.$store.getters['common/getShowSearch'])
			}
        }
    }
</script>

<style>
    header{
      width: 100%;
      box-sizing: border-box;
      background: var(--strong-blue);
      padding-top: 5px;
      padding-bottom: 5px;
      position: fixed;
      top:0px;
      left:0px;
      z-index: 2;
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
  .mobile_search {
    display: none;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
    text-align: center;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    color: white;
    width: 40px;
    right: 60px;
    top: 35px;
    z-index: 1;
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
       .mobile_search {
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
      .mobile_search {
        display: block;
        right: 75px;
      }
    }
</style>