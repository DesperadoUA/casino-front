<template>
    <section class="license-loop">
       <div class="container">
           <div class="row license-row">
               <article class="card"
               v-for="(item, index) in posts" :key="index"
               >
                   <div class="imgBx">
                       <NuxtLink :to='item.permalink'>
                            <img :src="item.thumbnail" />
                       </NuxtLink>
                   </div>
                   <div class="card-content">
                       <NuxtLink :to="item.permalink" class="ttl" v-html="item.title"></NuxtLink>
                       <p class="short_desc" v-html="item.short_desc"></p>
                   </div>
               </article>
           </div>
       </div>
    </section>
</template>

<script>
	export default {
		name: "app-license-loop",
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
		}
	}
</script>

<style scoped>
.license-loop {
    padding-top: 30px;
    padding-bottom: 30px;
    background: var(--light-black);
}
.license-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card {
    max-width: 300px;
    height: 195px;
    position: relative;
    background: var(--black);
    margin: 15px 10px;
    padding: 20px 25px;
    display: flex;
    flex-direction: column;
    box-shadow: 10px 8px 15px rgb(2 19 62 / 70%);
    transition:0.3s;
    overflow: hidden;
    border-radius: 6px;
}
.card:hover {
    height: 290px;
}
.imgBx {
    position: relative;
    cursor: pointer;
}
.imgBx img {
    max-width: 100%;
    width: 300px;
    height: 195px;
    object-fit: cover;
    border-radius: 4px;
}
.card-content {
    padding-top: 20px;
}
.ttl, .short_desc {
    font-family: var(--font);
    color: var(--white);
}
.ttl {
    margin-bottom: 15px;
    display: inline-block;
    text-decoration: none;
    font-size: 18px;
}
@media (min-width: 320px) and (max-width: 767px) {
    .card-wrapper {
       justify-content: center;
    }
}
</style>