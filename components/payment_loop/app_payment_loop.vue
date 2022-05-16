<template>
    <section :class="'payment-loop '+bg">
        <div class="container">
            <div class="card-wrapper">
                <article class="card"
                v-for="(item, index) in posts" :key="index"
                >
                    <div class="image-wrapper">
                        <NuxtLink class="image-link" :to="item.permalink">
                            <img :src='item.thumbnail' :alt='item.title'>
                        </NuxtLink>
                    </div>
                <div class="text-box-wrapper">
                <div class="text-box">
                    <NuxtLink :to="item.permalink" class="heading">{{item.title}}</NuxtLink>
                    <p  class="text" v-html="item.short_desc">
                    </p>
                </div>
                </div>          
                <div class="button-wrapper">
                    <NuxtLink class="button" :to="item.permalink">
                        Read More
                    </NuxtLink>
                </div>
                </article>
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
			},
      bg: {
        type: String,
        default: ''
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
    background: var(--light-black);
}
.card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card {
  position: relative;
  max-width: 300px;
  background-color: var(--black);
  border-radius: 8px;
  overflow: hidden;
  padding-bottom: 10px;
  box-shadow: 10px 8px 15px rgb(2 19 62 / 70%);
  margin-bottom: 20px;
}

.image-wrapper {
  width: auto;
  height: 200px;
  overflow: hidden;
}

img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  transition: all 1s linear;
}

img:hover {
 -webkit-transform: scale3d(1.2, 1.2, 1);
  transform: scale3d(1.2, 1.2, 1);
}

.text-box-wrapper {
 padding: 20px 20px 10px 20px;
}

.heading {
  font-family: var(--font);
  line-height: 1;
  text-decoration: none;
  font-size: 20px;
  color: var(--white);
  margin-bottom: 15px;
  display: inline-block;
}

.heading::after {
  content: '';
  display: block;
  margin-top: 0.5em;
  width: 50px;
  height: 3px;
  background-color: var(--orange);
}

.text {
  font-family: var(--font);
  font-weight: 100;
  font-size: 12px;
  line-height: 2;
  color: var(--white);
}

.button {
  display: inline-block;
  margin-left: 10px;
  padding: 5px 10px;
  font-family: var(--font);
  font-size: 12px;
  font-weight: 700;
  color: var(--light-orange);
  text-decoration: none;
 
}

.button:hover {
  color: var(--orange);
  transition: linear 0.2s;
}
@media (min-width: 320px) and (max-width: 767px) {
    .card-wrapper {
       justify-content: center;
    }
}
</style>