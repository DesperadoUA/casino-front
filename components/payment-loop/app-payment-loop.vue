<template>
    <section class="payment-loop">
        <div class="container">
            <h2 v-if="title" class="payment_table_title">{{title}}</h2>
            <div class="payment_item_wrapper">
                <div class="payment_item" v-for="item in currentPosts" :key="item.id">
                    <NuxtLink :to="item.permalink" class="payment_item_link">
                        <img :src="item.thumbnail" class="payment_item_img">
                    </NuxtLink>
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
		name: "app-payment-loop",
		props: {
			posts: {
				type: Array,
				default: []
			},
			title: {
				type: String,
				default: undefined
			}
		},
		data(){
			return {
				numberPostOnQuery: 24,
				postCurrentPage: 1,
			}
		},
		computed: {
			currentPosts() {
				return this.posts.slice(0, this.numberPostOnQuery * this.postCurrentPage)
			}
		},
		methods: {
			postShowMore(){
				this.postCurrentPage += 1
			}
		}
	}
</script>

<style scoped>
    .payment-loop {
        padding-top: 30px;
        padding-bottom: 30px;
        background: var(--strong-blue);
    }
    .payment_item {
        margin-bottom: 20px;
        width: 185px;
        height: 120px;
        border-radius: 10px;
        overflow: hidden;
    }
    .payment_item_link {
        width: 155px;
        height: 110px;
    }
    .payment_item_link img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .payment_item_wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .payment_table_title {
        text-align: left;
        color: var(--white);
        font-family: var(--font);
        font-size: 32px;
    }
    @media (min-width: 320px) and (max-width: 767px) {
        .payment_item {
            width: 48%;
        }
    }
</style>