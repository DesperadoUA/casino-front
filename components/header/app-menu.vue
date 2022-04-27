<template>
    <nav class="menu">
        <ul>
            <li v-for="(item, index) in menu" :key="index">
                <NuxtLink :to="item.value_2" class="menu_item_link">{{item.value_1}}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
	export default {
		name: "app-menu",
		data(){
			return {
				value: []
			}
		},
		computed:{
			menu() {
				const settings = this.$store.getters['settings/getSettings']
				if(settings) {
                    const menu = settings.filter(item => item.key_id === 'header_menu_main')
                    this.value = menu.length ? menu[0].value : []
				}
				return this.value
			}
		}
	}
</script>

<style scoped>
   .menu {
       display: flex;
       align-items: center;
   }
   ul {
       margin: 0px;
       padding: 0px;
       display: flex;
   }
   ul li {
       list-style: none;
   }
   ul li a {
       position: relative;
       display: block;
       padding: 10px 15px;
       margin: 0 10px;
       text-transform: uppercase;
       text-decoration: none;
       color: var(--white);
       font-family: var(--font);
   }
   ul li a:before {
       content: '';
       position: absolute;
       top:0px;
       left: 0px;
       width: 100%;
       height: 100%;
       border-top:2px solid var(--orange);
       border-left:2px solid var(--orange);
       transform-origin: left;
       transition: 0.5s;
       box-sizing: border-box;
       border-radius: 4px;
    }
    ul li a:hover:before {
        width: 20px;
        height: 20px;
    }
    ul li a:after {
       content: '';
       position: absolute;
       bottom:0px;
       right: 0px;
       width: 100%;
       height: 100%;
       border-bottom:2px solid var(--orange);
       border-right:2px solid var(--orange);
       transform-origin: left;
       transition: 0.5s;
       box-sizing: border-box;
       border-radius: 4px;
    }
    ul li a:hover:after {
        width: 20px;
        height: 20px;
    }
</style>