<template>
  <aside class="main_banner">
       <div class="container banner_container">
           <div class="card"  v-for="(item, index) in bonuses" :key="index">
               <div class="icon">
                   <img :src="item.src" 
                        width="100" 
                        height="100"  />
               </div>
               <div class="content">
                   <div class="card_title">{{item.value_1}}</div>
                   <div class="card_subtitle">{{item.value_2}}</div>
                   <div class="card_value">{{item.value_3}}</div>
                   <div class="card_desc">{{item.value_4}}</div>
                   <a :href="item.value_5" class="button-cta">{{getBonus}}</a>
               </div>
           </div>
       </div>
  </aside>
</template>

<script>
import TRANSLATE from '~/helpers/translate'
import config from '~/config'
    export default {
        name: "app_banner",
        data(){
            return {
                value: [],
                getBonus: TRANSLATE.GET_BONUS[config.LANG]
            }
        },
		computed:{
            bonuses() {
				const settings = this.$store.getters['settings/getSettings']
                if(settings) {
                    const menu = settings.filter(item => item.key_id === 'bonus_main_page')
                    this.value = menu.length ? menu[0].value : []
				}
				return this.value
			}
		}
    }
</script>

<style scoped>
    .main_banner {
        background: #3c2846;
        padding-top: 40px;
        padding-bottom: 40px;
        min-height: 510px;
    }
    .banner_container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .card {
        position: relative;
        width: 320px;
        height: 450px;
        background: #287bff;
        margin: 30px;
        border-radius: 20px;
        border-bottom-left-radius: 160px;
        border-bottom-right-radius: 160px;
        box-shadow: 0 15px 0 #fff, inset 0 -15px 0 rgba(255, 255, 255, 0.25), 0 45px 0 rgba(0, 0, 0, 0.15);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        -webkit-animation: fadein 1.5s; 
        -moz-animation: fadein 1.5s; 
        -ms-animation: fadein 1.5s; 
        -o-animation: fadein 1.5s;
        animation: fadein 1.5s;
    }
    .card::before {
        content: '';
        position: absolute;
        top: -140px;
        left: -40%;
        width: 100%;
        height: 120%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2));
        transform: rotate(35deg);
        pointer-events: none;
        filter:blur(5px);
    }
    .card:nth-child(1) {
        background: linear-gradient(to bottom, #ff2ae0, #645bf6);
    }
    .card:nth-child(2) {
        background: linear-gradient(to bottom, #ffec61, #f321d7);
    }
    .card:nth-child(3) {
        background: linear-gradient(to bottom, #24ff72, #9a4eff);
    }
    .icon {
        position: relative;
        width: 140px;
        height: 120px;
        background: #3c2846;
        border-bottom-left-radius: 100px;
        border-bottom-right-radius: 100px;
         box-shadow: 0 10px 0 rgba(0,0,0,0.1), inset 0 -8px 0 #fff;
         z-index: 5;
         display: flex;
         justify-content: center;
    }
    .icon::before {
        content:'';
        position: absolute;
        top:0px;
        left:-50px;
        width: 50px;
        height: 50px;
        background: transparent;
        border-top-right-radius: 50px;
        box-shadow: 15px -15px 0 15px #3c2846;
    }
    .icon::after {
        content:'';
        position: absolute;
        top:0px;
        right:-50px;
        width: 50px;
        height: 50px;
        background: transparent;
        border-top-left-radius: 50px;
        box-shadow: -15px -15px 0 15px #3c2846;
    }
    .icon img {
        position: relative;
        z-index:5;
        width: 100px;
        height: 100px;
    }
    .content {
        position: absolute;
        width: 100%;
        padding: 10px;
        padding-top: 140px;
        text-align: center;
        box-sizing: border-box;
    }
    .card_title {
        font-size: 28px;
        color: white;
        font-family: var(--font);
        margin-bottom: 20px;
    }
    .card_subtitle {
        font-size: 22px;
        color: white;
        font-family: var(--font);
        margin-bottom: 10px;
        font-weight: 900;
    }
    .card_desc {
        font-size: 18px;
        color: white;
        font-family: var(--font);
        margin-bottom: 30px;
        font-weight: 900;
    }
    .card_value {
        font-size: 32px;
        color: gold;
        font-family: var(--font);
        margin-bottom: 10px;
        font-weight: 900;
    }

    .card .button-cta {
        padding: 10px 25px;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        font-family: var(--font);
        font-size: 18px;
        border:none;
        text-decoration: none;
    }
    .card:nth-child(1) .button-cta{
        background: linear-gradient(to top, #ff2ae0, #645bf6);
    }
    .card:nth-child(2) .button-cta{
        background: linear-gradient(to top, #ffec61, #f321d7);
    }
    .card:nth-child(3) .button-cta{
        background: linear-gradient(to top, #24ff72, #9a4eff);
    }
    @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
</style>