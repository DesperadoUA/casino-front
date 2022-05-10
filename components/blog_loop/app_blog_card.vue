<template>
  <section class="blog_card_wrapper">
    <div class="container">
        <div class="row blog-row">
            <article class="blog_card_item"
            v-for="(item, index) in posts" :key="index"
            >
                <div class="blog-card blog-card-blog">
                    <div class="blog-card-image">
                        <NuxtLink :to="item.permalink"> 
                            <img class="img" :src="item.thumbnail" width="350" height="230"> 
                        </NuxtLink>
                    </div>
                    <div class="blog-table">
                        <NuxtLink class="blog-category blog-text-success" 
                            v-for="(itemCategory, indexCategory) in item.category" 
                            :key="indexCategory"
                            :to="itemCategory.permalink"
                            v-html="itemCategory.title"
                        >
                        </NuxtLink>
                        <div class="blog-card-caption">
                            <NuxtLink :to="item.permalink" v-html="item.title"></NuxtLink>
                        </div>
                        <p class="blog-card-description" v-html="item.short_desc"></p>
                    </div>
                </div>
            </article>
        </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "app_blog_loop",
        props: {
        	posts: {
        		type: Array,
                default: []
            }
        },
        data(){
            return {
                numberPostOnQuery: 8,
                postCurrentPage: 1
            }
        }
    }
</script>
<style scoped>
.blog_card_wrapper {
    padding-top: 30px;
    padding-bottom: 30px;
    background: var(--light-black);
}
.blog_card_item {
    width: 30%;
}
.blog-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.blog-card-blog {
    margin-top: 30px;
}
.blog-card {
    display: inline-block;
    position: relative;
    width: 100%;
    margin-bottom: 30px;
    border-radius: 6px;
    color: rgba(0, 0, 0, 0.87);
    background: black;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.blog-card .blog-card-image {
    height: 60%;
    position: relative;
    overflow: hidden;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: -30px;
    border-radius: 6px;
}
.blog-card .blog-card-image img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    pointer-events: none;
}
.blog-card .blog-table {
    padding: 15px 30px;
}
.blog-table {
    margin-bottom: 0px;
    background: black;
    border-radius:6px;
    box-shadow: 10px 8px 15px rgb(2 19 62 / 70%);
}
.blog-category {
    position: relative;
    line-height: 0;
    margin: 15px 0;
    padding: 4px;
}
.blog-text-success {
    color: var(--orange);
    font-size: 16px;
    text-decoration: none;
    font-family: var(--font);
}
.blog-card-blog .blog-card-caption {
    margin-top: 5px;
}
.blog-card-caption {
    font-weight: 700;
    font-family: var(--font);
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.blog-card-caption, .blog-card-caption a {
    color: var(--white);
    text-decoration: none;
    font-size: 20px;
    margin-bottom: 15px;
}

p {
    color: var(--gray);
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}
.blog-card .ftr {
    margin-top: 15px;
}

.blog-card .ftr div {
    display: inline-block;
}
@media (min-width: 320px) and (max-width: 767px) {
    .blog_card_item {
        width: 100%;
    }
}
</style>