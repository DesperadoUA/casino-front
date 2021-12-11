<template>
  <section class="main_banner">
            <div class="container banner_container">
                <div class="banner_wrapper">
                    <div class="banner_item"
                         v-for="(item, index) in banner" :key="index"
                         v-if="value !== null"
                    >
                        <div class="banner_item_box">
                            <div class="banner_item_box_left">
                                <img :src="item.main_banner_card_img"
                                     class="banner_item_thumbnail" />
                            </div>
                            <div class="banner_item_box_right">
                                <div class="banner_item_title">
                                    {{item.main_banner_card_title}}
                                </div>
                                <div class="banner_item_short_desc">
                                    {{item.main_banner_card_description}}
                                </div>
                                <a :href="item.main_banner_card_link" target="_blank"
                                   class="banner_item_permalink">
                                    <img src="/img/telega.png" class="banner_item_img">
                                    Подписаться
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </section>
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

<style>
    .main_banner {
        background:  linear-gradient(91.65deg, #F6CEB5 0%, #E1BDB9 12.97%, #AB8BC1 38.11%, #7B62C2 64.42%, #6642C0 86.94%, #603BBF 102.2%);
        height: 330px;
        display: flex;
        align-items: center;
        overflow: hidden;
    }
    .banner_item {
        width: 524px;
        height: 170px;
        padding: 0px 12px;
        min-width: 524px;
    }
    .banner_container {
        overflow: visible;
    }
    .banner_wrapper {
        margin-left: -200px;
    }
    .banner_wrapper {
        display: flex;
    }
    .banner_item_box {
        width: 100%;
        height: 100%;
        display: flex;
        background: var(--strong-blue);
        overflow: hidden;
        border-radius: 4px;
    }
    .banner_item_box_left, .banner_item_box_right {
        width: 50%;
    }
    .banner_item_thumbnail {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .banner_item_box_right {
        padding: 20px;
    }
    .banner_item_title {
        font-style: normal;
        font-weight: 900;
        font-size: 16px;
        line-height: 17px;
        color: var(--white);
        font-family: var(--font-bold);
    }
    .banner_item_short_desc {
        height: 65px;
        overflow: hidden;
        color: var(--light-blue);
        margin-top: 10px;
        font-size: 14px;
        font-family: var(--font);
    }
    .banner_item_permalink {
        display: block;
        padding: 10px;
        text-align: center;
        border-radius: 4px;
        border: 1px solid var(--blue);
        color: var(--white);
        text-decoration: none;
        margin-top: 5px;
        font-family: var(--font);
    }
    .banner_item_img {
        margin-right: 5px;
    }
    @media (min-width: 320px) and (max-width: 767px) {
        .main_banner {
            height: auto;
            padding: 50px 0px;
        }
        .banner_container {
            max-width: 100%;
            padding-left: 15px;
        }
        .banner_wrapper {
            overflow-x: scroll;
            margin-left: 0px;
            margin-right: 15px;
            box-sizing: border-box;
        }
        .banner_item {
            width: 250px;
            min-width: 250px;
            height: auto;
        }
        .banner_item_box {
            flex-wrap: wrap;
            border-radius: 10px;
            overflow: hidden;
        }
        .banner_item_box_left, .banner_item_box_right {
            width: 100%;
        }
        .banner_item_box_right {
            padding: 10px;
        }
    }
    @media (min-width: 768px) and (max-width: 1200px) {
        .main_banner {
            height: auto;
            padding: 50px 0px;
        }
        .banner_wrapper {
            overflow-x: scroll;
            margin-left: 0px;
        }
        .banner_item {
            width: 250px;
            min-width: 250px;
            height: auto;
        }
        .banner_item_box {
            flex-wrap: wrap;
            border-radius: 10px;
            overflow: hidden;
        }
        .banner_item_box_left, .banner_item_box_right {
            width: 100%;
        }
        .banner_item_box_right {
            padding: 10px;
        }
    }
</style>