<template>
    <section class="top_bonuses">
        <div class="container top_bonuses_container">
            <h2 class="top_bonuses_title" v-if="title">{{title}}</h2>
            <div class="top_bonuses_wrapper">
                <div class="top_bonuses_item"
                    v-for="(item, index) in value" :key="index"
                >
                    <div class="top_bonuses_item_thumbnail">
                        <NuxtLink :to="item.permalink">
                            <img :src="item.thumbnail" loading="lazy" width="145" height="110">
                        </NuxtLink>
                    </div>
                    <div class="top_bonuses_item_title">
                        {{item.title}}
                    </div>
                    <div class="top_bonuses_item_bonus_value">
                        {{item.sub_title}} : <span class="color-gold">{{item.value}}</span>
                    </div>
                    <div class="top_bonuses_item_short_desc">
                        {{item.short_desc}}
                    </div>
                    <button class="top_bonuses_item_button" @click="refActivate(item)">
                        Получить бонус
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
	export default {
		name: "app_top_bonuses",
        props: {
			value: {
				type: Array,
                default: [],
            },
            title: {
				type: String,
                default: undefined
            }
        },
		methods: {
			refActivate(item) {
				if(item.ref.length !== 0) {
					window.open(item.ref[0], '_blank')
				}
			}
		}
	}
</script>

<style scoped>
.top_bonuses {
    padding: 30px 0px;
    background: var(--light-black);
    overflow: hidden;
}
    .top_bonuses_title {
        font-family: var(--font);
        color: var(--white);
        margin-bottom: 22px;
        font-size: 28px;
    }
    .top_bonuses_item {
        width: 270px;
        background: var(--strong-blue);
        border-radius: 10px;
        overflow: hidden;
    }
    .top_bonuses_wrapper {
        display: flex;
        justify-content: space-between;
    }
    .top_bonuses_item_thumbnail {
        padding: 10px;
        text-align: center;
    }
    .top_bonuses_item_title {
        padding: 0px 5px 15px;
        font-family: var(--font);
        font-size: 16px;
        color: var(--white);
        text-align: center;
        background: var(--strong-blue);
    }
    .top_bonuses_item_bonus_value {
        text-align: center;
        background: var(--fiolet);
        padding: 15px 10px 5px 10px;
        color: var(--white);
        font-family: var(--font);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .top_bonuses_item_bonus_value span {
        display: block;
        font-weight: bolder;
    }
    .top_bonuses_item_short_desc {
        background: var(--fiolet);
        padding: 5px 15px;
        color: var(--white);
        font-family: var(--font);
        font-size: 12px;
        height: 95px;
        overflow: hidden;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        z-index: 2;
        position: relative;
    }
    .top_bonuses_item_button {
        width: 100%;
        padding: 25px 15px 15px 15px;
        background: var(--green);
        font-family: var(--font);
        text-transform: uppercase;
        border: none;
        font-weight: bold;
        position: relative;
        z-index: 1;
        margin-top: -10px;
        cursor: pointer;
    }
    @media (min-width: 320px) and (max-width: 767px) {
        .top_bonuses_title {
            text-align: center;
            font-size: 28px;
        }
        .top_bonuses_wrapper {
            overflow-x: scroll;
            margin-right: 30px;
            box-sizing: border-box;
        }
        .top_bonuses_item {
            min-width: 270px;
            margin-right: 20px;
        }
        .top_bonuses_item:last-child {
            margin-right: 0px;
        }
        .top_bonuses_container {
            max-width: 100%;
            padding-left: 15px;
        }
    }
    @media (min-width: 768px) and (max-width: 1200px) {
        .top_bonuses_wrapper {
            overflow-x: scroll;
        }
        .top_bonuses_item {
            min-width: 270px;
            margin-right: 20px;
        }
        .top_bonuses_item:last-child {
            margin-right: 0px;
        }
    }
</style>