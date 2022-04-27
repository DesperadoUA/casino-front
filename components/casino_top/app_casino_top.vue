<template>
  <section class="casino_top">
      <div class="container">
          <div class="casino_top_wrapper">
              <div class="casino_top_thumbnail">
                     <img :src="value.thumbnail" 
                     loading="lazy"
                     class="casino_top_img" 
                     width="145"
                     height="110"/>
                 </div>
              <div class="casino_top_title">
                  <h1>{{value.h1}}</h1>
                  <div class="casino_top_license" v-if="value.licensed.length !== 0">
                      <img class="casino-card__license"
                           src="/img/license.png"
                           alt="">
                      <img v-for="(item, index) in value.licensed"
                           :src="item"
                           :key="index"
                           class="casino_card_license"
                      >
                      <span class="casino-card__license-txt" v-if="value.licensed.length !== 0">{{license}}</span>
                  </div>
                  <div class="casino_item_buttons_box casino_top_btn_wrapper">
                      <button class="btn_ref" @click="refActivate(value.ref)" >Перейти в казино</button>
                  </div>
              </div>
              <div class="casino_top_bonus" v-if="value.bonuses.length > 1">
                  <div class="casino_top_bonus_item">
                      <div class="casino_top_bonus_item_title">
                          {{value.bonuses[1].bonuses_title}}
                      </div>
                      <div class="casino_top_bonus_item_title color-gold font-bold">
                          {{value.bonuses[1].bonuses_value}}
                      </div>
                  </div>
              </div>
              <div class="casino_top_bonus" v-if="value.bonuses.length > 2">
                  <div class="casino_top_bonus_item">
                      <div class="casino_top_bonus_item_title">
                          {{value.bonuses[2].bonuses_title}}
                      </div>
                      <div class="casino_top_bonus_item_title color-gold font-bold">
                          {{value.bonuses[2].bonuses_value}}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
    export default {
        name: "app_casino_top",
        props: ['value'],
        data(){
            return {
				license: "Лицензия"
            }
        },
        methods: {
            refActivate(ref) {
               if(ref.length !== 0) {
                    const min = 0
                    const max = ref.length - 1
                    const random = Math.floor(Math.random() * (max - min + 1)) + min
                    window.open(ref[random].casino_ref, '_blank')
                } 
            }
        }
    }
</script>
<style> 
    .casino_top_list li {
        display: inline-block;
        color: var(--blue);
        padding: 3px 10px;
        border: 1px solid var(--gray);
        box-sizing: border-box;
        border-radius: 7px;
        margin-right: 5px;
        margin-top: 5px;
    }
    .casino_top_list li a {
        text-decoration: none;
        font-family: var(--font);
    }
    .casino_top_list .green {
      color: var(--green);
      border: 1px solid var(--green);
    }
    .casino_top_list a {
        color: var(--blue);
    }
    .casino_top_list .green a {
        color: var(--green);
    }
    .casino_top_currency_item img {
        margin-right: 15px;
    }
    .casino_top {
        padding-top: 30px;
        padding-bottom: 20px;
        background: var(--strong-blue);
    }
    .casino_top_wrapper {
        display: flex;
    }
    .casino_top_thumbnail {
        width: 145px;
        min-width: 145px;
        height: 110px;
    }
    .casino_top_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .casino_top_title {
        font-family: var(--font);
        font-style: normal;
        font-size: 22px;
        line-height: 30px;
        color: var(--white);
        padding-left: 22px;
        padding-right: 22px;
        width: 60%;
    }
    .btn_ref {
        width: 180px;
        height: 46px;
        background: var(--green);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
        box-shadow: inset 0px 0px 4px rgba(255, 255, 255, 0.25);
        border-radius: 10px;
        display: inline-block;
        text-align: center;
        font-family: var(--font);
        font-style: normal;
        font-size: 12px;
        color: var(--black);
        text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
        text-decoration: none;
        line-height: 46px;
        margin-bottom: 15px;
        cursor: pointer;
        text-transform: uppercase;
    }
    .casino_top_btn_wrapper {
        margin-top: 15px;
    }
    .casino_top_bonus {
        width: 15%;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
    }
    .casino_card_license {
        height: 25px;
    }
    .casino_top_license {
        margin-top: 20px;
    }
    .casino-card__license-txt {
        font-size: 12px;
    }
    .casino_top_bonus_item {
        padding-top: 5px;
        padding-bottom: 5px;
        border-left: 1px solid var(--white);
        border-right: 1px solid var(--white);
        text-align: center;
    }
    .casino_top_bonus_item_title {
        text-transform: uppercase;
        margin-bottom: 5px;
        font-family: var(--font);
        color: var(--light-blue);
    }
    @media (min-width: 320px) and (max-width: 767px) {
        .casino_top_wrapper {
            flex-wrap: wrap;
            justify-content: center;
        }
        .casino_top_title {
            width: 100%;
            text-align: center;
            margin-top: 20px;
        }
        .casino_top_title h1 {
            text-align: center;
        }
        .casino_top_bonus {
            width: 48%;
        }
    }
    @media (min-width: 768px) and (max-width: 1200px) {
        .casino_top_title {
            width: 75%;
            box-sizing: border-box;
            padding-right: 0px;
            display: flex;
            flex-wrap: wrap;
        }
        .casino_top_thumbnail {
            width: 25%;
        }
        .casino_top_wrapper {
            flex-wrap: wrap;
        }
        .casino_top_bonus {
            width: 48%;
        }
        .casino_top_title h1 {
            width: 100%;
        }
        .casino_top_license, .casino_item_buttons_box {
            width: 50%;
        }
    }
</style>