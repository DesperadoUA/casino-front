<template>
    <section class="vendor-loop">
        <div class="container">
            <h2 v-if="title" class="vendor_table_title">{{title}}</h2>
            <div class="vendor_item_wrapper">
                <div class="vendor_item" v-for="item in currentPosts" :key="item.id">
                    <NuxtLink :to="item.permalink" class="vendor_item_link">
                        <img :src="item.thumbnail" class="vendor_item_img">
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
		name: "app-vendor-loop",
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
    .vendor-loop {
        padding-top: 30px;
        padding-bottom: 30px;
        background: var(--strong-blue);
    }
    .vendor_item {
        margin-bottom: 20px;
        width: 185px;
        height: 120px;
        border-radius: 10px;
        overflow: hidden;
    }
    .vendor_item_link {
        width: 155px;
        height: 110px;
    }
    .vendor_item_link img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .vendor_item_wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .vendor_table_title {
        text-align: left;
        color: var(--white);
        font-family: var(--font);
        font-size: 32px;
    }
    @media (min-width: 320px) and (max-width: 767px) {
        .vendor_item {
            width: 48%;
        }
    }
</style>