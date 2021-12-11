<template>
  <section :class="'content casino_table_wrapper '+bg">
      <div class="container casino_table_container">
          <h2 v-if="title" class="casino_table_title">{{title}}</h2>
          <div class="casino_item" v-for="item in currentPosts" :key="item.id">
              <div class="casino_item_thumbnail">
                  <img :src="item.thumbnail" loading="lazy" width="200" height="100" @click="refActivate(item)" />
              </div>
              <div class="casino_item_rating casino_item_column ">
                  <div class="casino_item_column_wrapper">
                      <div class="casino_item_title">{{item.title}}</div>
                      <div class="casino_item_bonus"
                           v-if="item.bonuses.length != 0"
                      >
                          {{item.bonuses[0].bonuses_title}}:
                          <span class="color-gold">
                               {{item.bonuses[0].bonuses_value}}
                          </span>
                      </div>
                      <div class="casino_item_short_desc">{{item.short_desc}}</div>
                  </div>
              </div>
              <div class="casino_item_packet casino_item_column ">
                  <div v-if="item.bonuses.length > 1" class="casino_item_packet_item">
                    <div class="casino_item_title_packet">{{item.bonuses[1].bonuses_title}}</div>
                    <div class="casino_item_title_packet color-gold">{{item.bonuses[1].bonuses_value}}</div>
                  </div>
              </div>
              <div class="casino_item_weiger casino_item_column ">
                  <div v-if="item.bonuses.length >= 2" class="casino_item_packet_item">
                    <div class="casino_item_title_packet">{{item.bonuses[2].bonuses_title}}</div>
                    <div class="casino_item_title_packet color-gold">{{item.bonuses[2].bonuses_value}}</div>
                  </div>
              </div>
              <div class="casino_item_buttons casino_item_column ">
                  <div class="casino_item_buttons_box">
                    <button class="btn_ref" @click="refActivate(item)">Перейти в казино</button>
                      <div class="casino_item_button_licensed">
                          <img src="/img/license.png" v-if="item.licensed.length !== 0" />
                          <img v-for="(itemLicensed, indexLicensed) in item.licensed"
                               :key="indexLicensed"
                               :src="itemLicensed"
                               class="casino_item_licensed"
                          />
                          <NuxtLink :to="item.permalink" class="casino_item_permalink">Обзор</NuxtLink>
                      </div>
                  </div>
              </div>
          </div>  
          <div class="casino_table_btn_wrapper" v-if="posts.length > (numberPostOnQuery*postCurrentPage)">
              <button class="btn_review" @click="postShowMore">Загрузить еще</button>
          </div>
      </div>
  </section>
</template>

<script>
    export default {
        name: "app_casino_loop",
        props: {
        	posts: {
        		type: Array,
                default: []
            },
            title: {
        		type: String,
                default: undefined
            },
            bg: {
        		type: String,
                default: ''
            }
        },
        data(){
            return {
                numberPostOnQuery: 7,
                postCurrentPage: 1,
            }
        },
        computed: {
            currentPosts() {
               return this.posts.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        },
        methods: {
            refActivate(item) {
                if(item.ref.length !== 0) {
                    const min = 0
                    const max = item.ref.length - 1
                    const random = Math.floor(Math.random() * (max - min + 1)) + min
                    window.open(item.ref[random].casino_ref, '_blank')
                } 
            },
            postShowMore(){
                this.postCurrentPage += 1
            }
        }
    }
</script>

<style scoped>

.btn_ref {
    width: 167px;
    height: 37px;
    background: var(--green);
    border: 1px solid var(--white-opacity-max);
    box-sizing: border-box;
    box-shadow: inset 0px 0px 4px rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    display: inline-block;
    text-align: center;
    font-family: var(--font-bold);
    font-style: normal;
    font-size: 12px;
    line-height: 37px;
    text-align: center;
    color: var(--light-black);
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    margin-bottom: 15px;
    cursor: pointer;
    text-transform: uppercase;
}


 .casino_item {
     background: var(--light-black);
     box-sizing: border-box;
     border-radius: 15px;
     margin-top: 10px;
     margin-bottom: 10px;
     display: flex;
     overflow: hidden;
 }

 .casino_item_thumbnail {
     position: relative;
     width: 14%;
     text-align: center;
     box-sizing: border-box;
     cursor: pointer;
 }
 .casino_item_thumbnail img {
     margin-top: 10px;
     margin-bottom: 5px;
 }

 .casino_item_rating {
     width:36%;
     box-sizing: border-box;
     min-width: 36%;
 }
 .casino_item_packet {
     width: 16%;
      min-width: 16%;
     box-sizing: border-box;
 }
 .casino_item_packet_item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 170px;
     min-width: 170px;
    box-sizing: border-box;
     padding: 5px;
 }
 .casino_item_weiger {
     width: 16%;
      min-width: 16%;
     box-sizing: border-box;
 }
 .casino_item_buttons {
     width: 15%;
     background: var(--middle-black);
 }
 .casino_item_buttons_box {
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
 }
 .casino_item_column {
     padding: 10px 25px;
     display: flex;
     align-items: center;
     flex-wrap: wrap;
 }
 .casino_item_title {
    font-family: var(--font-bold);
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    color: var(--white);
    width: 100%;
    margin-bottom: 10px;
 }
.casino_item_title_packet
 {
    width: 100%;
    font-family: var(--font-semi);
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: var(--light-blue);
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
 }
 .casino_item_bonus {
    font-family: var(--font-semi);
     color: var(--white);
     font-size: 18px;
     margin-bottom: 10px;
 }
 .casino_item_thumbnail img {
         width: 100%;
         object-fit: contain;
     }
 .casino_table_title {
    text-align: left;
     color: var(--white);
     font-family: var(--font);
     font-size: 32px;
 }
 .casino_item_short_desc {
     font-family: var(--font);
     color: var(--light-blue);
     font-size: 12px;
 }
 .casino_item_button_licensed {
     width: 100%;
     text-align: center;
 }
 .casino_item_button_licensed img {
     margin: 0px 3px;
 }
.casino_item_button_licensed a {
    text-transform: uppercase;
    color: var(--light-blue);
    text-decoration: none;
    font-family: var(--font);
    font-size: 14px;
}
.casino_item_licensed {
    height: 15px;
}
 @media (min-width: 320px) and (max-width: 767px) {
    .casino_table_title {
        text-align: center;
        font-size: 26px;
    }
    .casino_item {
        flex-wrap: wrap;
        margin-bottom: 20px;
    }
    .casino_item_thumbnail {
        width: 100%;
    }
    .casino_item_rating {
        width: 100%;
        text-align: center;
        border-bottom: 1px solid var(--white-opacity-max);
    }
    .casino_item_short_desc {
        display: none;
    }
    .casino_item_packet {
        width: 50%;
        padding: 10px;
        border-bottom-left-radius: 10px;
    }
    .casino_item_packet_item {
        min-width: auto;
        width: 100%;
    }
    .casino_item_bonus {
        width: 100%;
    }
    .casino_item_column_wrapper {
        width: 100%;
    }
    .casino_item_bonus span {
        width: 100%;
        display: block;
    }
    .casino_item_weiger {
        width: 50%;
        padding: 10px;
    }
    .casino_item_buttons {
        width: 100%;
        padding: 0px;
    }
    .casino_item_buttons_box {
        flex-direction: column-reverse;
        width: 100%;
    }
    .btn_ref {
        width: 100%;
        margin-bottom: 0px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }
    .casino_item_button_licensed {
        padding: 10px;
    }
 }
 @media (min-width: 768px) and (max-width: 1200px) {
     .casino_table_title {
         width: 100%;
     }
     .casino_item {
         flex-wrap: wrap;
         margin-bottom: 20px;
         width: 48%;
     }
     .casino_item_thumbnail {
         width: 100%;
     }
     .casino_item_rating {
         width: 100%;
         text-align: center;
         border-bottom: 1px solid var(--white-opacity-max);
     }
     .casino_item_short_desc {
         display: none;
     }
     .casino_item_packet {
         width: 50%;
         padding: 10px;
         border-bottom-left-radius: 10px;
     }
     .casino_item_packet_item {
         min-width: auto;
         width: 100%;
     }
     .casino_item_weiger {
         width: 50%;
         padding: 10px;
     }
     .casino_item_buttons {
         width: 100%;
         padding: 0px;
     }
     .casino_item_buttons_box {
         flex-direction: column-reverse;
         width: 100%;
     }
     .btn_ref {
         width: 100%;
         margin-bottom: 0px;
         border-top-left-radius: 0px;
         border-top-right-radius: 0px;
     }
     .casino_item_button_licensed {
         padding: 10px;
     }
     .casino_table_container {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
     }
     .casino_table_btn_wrapper {
         width: 100%;
     }
 }
</style>