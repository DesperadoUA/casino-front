<template>
  <aside class="main_banner">
       <div class="container banner_container">
           <div class="card">
               <div class="icon">
                   <img src="/img/60ab5dc288337.png" width="100" height="100"  />
               </div>
               <div class="content">
                   <div class="card_title">SlotoKing</div>
                   <div class="card_subtitle">Welcome bonus</div>
                   <div class="card_value">125 000 ₽</div>
                   <div class="card_desc">Единоразово при регистрации</div>
                   <button class="button-cta">Получить бонус</button>
               </div>
           </div>
           <div class="card">
               <div class="icon">
                   <img src="/img/60c9b6fe8df1a.png" width="100" height="100"  />
               </div>
               <div class="content">
                   <div class="card_title">Leo Vegas</div>
                   <div class="card_subtitle">Бонус "WEEKEND"</div>
                   <div class="card_value">50% + UP TO 30FS</div>
                   <div class="card_desc">Единоразово при регистрации</div>
                   <button class="button-cta">Получить бонус</button>
               </div>
           </div>
           <div class="card">
               <div class="icon">
                   <img src="/img/60c9dcf13bca3.png" width="100" height="100"  />
               </div>
               <div class="content">
                   <div class="card_title">Super Boss</div>
                   <div class="card_subtitle">Бонус "WEEKEND"</div>
                   <div class="card_value">50% + UP TO 30FS</div>
                   <div class="card_desc">Единоразово при регистрации</div>
                   <button class="button-cta">Получить бонус</button>
               </div>
           </div>
       </div>
  </aside>
</template>

<script>
    export default {
        name: "app_banner",
        data(){
            return {
                value: []
            }
        },
		computed:{
            banner() {
				const options = this.$store.getters['options/getOptions']
                if(options) {
					this.value = options.banner_card
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
</style>