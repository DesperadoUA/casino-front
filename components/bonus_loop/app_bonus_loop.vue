<template>
    <section :class="'bonus_loop '+bg">
        <div class="container">
            <app_sub_ttl :title="title" />
            <app_sub_content :text="text" />
            <div class="bonus_loop_row">
               <article class="bonus_loop_item"
               v-for="(item, index) in posts" :key="index"
               > 
                   <div class="bonus_item_left">
                       <figure>
                            <img :src="item.casino_thumbnail" width="244" class="bonus_item_thumbnail">
                            <figcaption>
                                <NuxtLink :to="item.casino_permalink" class="bonus_item_subtitle">{{item.casino}}</NuxtLink>
                            </figcaption>
                        </figure>
                   </div>
                   <div class="bonus_item_right">
                       <NuxtLink :to="item.permalink" class="bonus_item_title">{{item.title}}</NuxtLink>
                       <div class="bonus_item_value">{{item.value_bonus}}</div>
                       <div class="bonus_item_text">{{item.short_desc}}</div>
                        <footer class="bonus_footer">
                            <button class="cta_btn shadow" @click="refActivate(item)">{{get}}</button>
                            <NuxtLink :to="item.permalink" class="cta_btn shadow">{{review}}</NuxtLink>
                        </footer>
                   </div>
               </article>
            </div>
        </div>
    </section>
</template>

<script>
import config from '~/config'
import TRANSLATE from '~/helpers/translate'
import Helper from '~/helpers'
import app_sub_ttl from '~/components/sub_ttl/app_sub_ttl'
import app_sub_content from '~/components/sub_content/app_sub_content'
	export default {
		name: "app_bonus_loop",
        props: {
			posts: {
				type: Array,
                default: [],
            },
            title: {
				type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            },
            bg: {
        		type: String,
                default: ''
            }
        },
        components: {app_sub_ttl, app_sub_content},
        data(){
            return {
                goTo: TRANSLATE.GO_TO[config.LANG],
                review: TRANSLATE.REVIEW[config.LANG],
                get: TRANSLATE.GET[config.LANG],
            }
        },
		methods: {
			refActivate(item) {
                Helper.refActivate(item)
            }
		}
	}
</script>

<style scoped>
.bonus_loop {
    padding: 30px 0px;
    background: var(--light-black);
    overflow: hidden;
}
.bonus_loop_title {
    font-family: var(--font);
    color: var(--white);
    font-size: 28px;
    margin-bottom: 10px;
}
.bonus_loop_row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.bonus_loop_item {
    width: 45%;
    display: flex;
    background: var(--strong-blue);
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 10px 8px 15px rgb(2 19 62 / 70%);
}
.bonus_item_left {
    width: 45%;
    padding: 15px 10px;
}
.bonus_item_right {
    width: 55%;
    padding: 20px 10px 15px 0px;
}
.bonus_item_thumbnail {
    margin-top: 5px;
    margin-left: -25px;
    border-radius: 8px;
}
.bonus_item_subtitle {
    text-align: center;
    display: block;
    font-family: var(--font);
    color: var(--white);
    text-decoration: none;
    width: 220px;
    margin-top: 10px;
}
.bonus_item_title {
    font-family: var(--font);
    color: var(--white);
    font-size: 22px;
    text-decoration: none;
    margin-bottom: 10px;
    display: block;
}
.bonus_item_value {
    font-family: var(--font);
    color: var(--gold);
    font-size: 24px;
    text-decoration: none;
    margin-bottom: 10px;
}
.bonus_item_text {
    font-family: var(--font);
    color: var(--white);
    font-size: 14px;
    margin-bottom: 20px;
    font-style: italic;
}
.cta_btn {
    position: relative;
    width: 110px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-family: var(--font);
    color: var(--white);
    background: var(--light-black);
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
}
.bonus_footer {
    display: flex;
    justify-content: space-around;
    z-index: 1;
    position: relative;
    margin-top: 10px;
}
 @media (min-width: 320px) and (max-width: 767px) {
    .bonus_loop_item {
        width: 100%;
        flex-wrap: wrap;
    }
    .bonus_item_left, .bonus_item_right {
        width: 100%;
        text-align: center;
    }
    .bonus_item_thumbnail {
        margin-left: 0px;
    } 
    .bonus_item_subtitle {
        width: 100%;
    }
    .bonus_item_right {
        padding: 0px 10px 15px 10px;
    }
 }
</style>