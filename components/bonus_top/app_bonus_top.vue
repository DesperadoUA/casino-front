<template>
  <section class="bonus_top">
      <div class="container">
          <div class="bonus_top_wrapper">
            <div class="bonus_top_thumbnail">
                <img :src='value.casino.thumbnail' :alt='value.casino.title'>
            </div>
            <div class="bonus_top_value">
                <div class="bonus_top_value_item">
                    {{bonusValue}}: <span>{{value.value_bonus}}</span>
                </div>
                <div class="bonus_top_value_item">
                    {{wager}}: <span>{{value.bonus_wager}}</span>
                </div>
            </div>
            <div class="bonus_top_btn">
                <NuxtLink :to='value.casino.permalink' class="bonus_top_btn_item shadow">{{casinoReview}}</NuxtLink>
                <button type="button" class="bonus_top_btn_item shadow" @click="refActivate(value)">{{getBonus}}</button>
            </div>
          </div>
      </div>
  </section>
</template>

<script>
import config from '~/config'
import TRANSLATE from '~/helpers/translate'
import Helper from '~/helpers'
    export default {
        name: "app_casino_top",
        props: {
            value: {
                type: Object,
                default: {}
            }
        },
        data(){
            return {
                getBonus: TRANSLATE.GET_BONUS[config.LANG],
                casinoReview: TRANSLATE.CASINO_REVIEW[config.LANG],
                bonusValue: TRANSLATE.BONUS_VALUE[config.LANG],
                wager: TRANSLATE.WAGER[config.LANG]
            }
        },
        mounted(){
            console.log(this.value)
        },
         methods: {
            refActivate(item) {
                Helper.refActivate(item)
            }
        },
    }
</script>
<style> 
.bonus_top {
    padding: 30px 0px;
    background: var(--strong-blue);
}
.bonus_top_wrapper {
    display: flex;
}
.bonus_top_thumbnail {
    width: 20%;
}
.bonus_top_value {
    width: 60%;
}
.bonus_top_btn {
    width: 20%;
    position: relative;
    z-index: 1;
}
.bonus_top_value_item {
    font-family: var(--font);
    color: var(--white);
    font-size: 20px;
    margin-bottom: 25px;
}
.bonus_top_value_item span {
    color: var(--orange);
}
.bonus_top_btn_item {
    width: 100%;
    height: 50px;
    border: none;
    font-family: var(--font);
    color: var(--gold);
    font-size: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    text-decoration: none;
}
@media (min-width: 320px) and (max-width: 767px) {
    .bonus_top_wrapper {
       flex-wrap: wrap;
    }
    .bonus_top_thumbnail {
       width: 100%;
       text-align: center;
       margin-bottom: 20px;
    }
    .bonus_top_value {
       width: 100%;
       text-align: center;
    }
    .bonus_top_btn {
       width: 100%;
    }
}
</style>