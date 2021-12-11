<template>
  <section class="blog_card_wrapper">
      <div class="container">
         <div class="blog_card_item" v-for="item in currentPosts" :key="item.id">
             <div class="blog_card_item_left">
                 <div class="blog_card_item_img_wrapper">
                    <img :src="item.thumbnail" 
                         loading="lazy"
                         class="blog_card_item_thumbnail" 
                         width="320" 
                         height="190">
                 </div>
             </div>
             <div class="blog_card_item_right">
                 <div class="blog_card_item_title">
                     <NuxtLink no-prefetch :to="item.permalink" 
                               class="blog_card_item_permalink" v-html="item.title">
                     </NuxtLink>
                 </div>
                 <div class="blog_card_item_author">
                   <div class="blog_card_item_data">
                       <div>Автор обзора: <span>{{item.author}}</span></div>
                       <div>{{item.date | post_data}}</div>
                   </div>
                 </div>   
                 <div class="blog_card_item_excerpt">
                     {{item.excerpt}}
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
            }
        },
        data(){
            return {
                numberPostOnQuery: 8,
                postCurrentPage: 1
            }
        },
        computed: {
            currentPosts() {
                return this.posts.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        },
        filters:{
            post_data(item){
                return item.slice(0, -9)
            }
        },
        methods: {
            postShowMore(){
                this.postCurrentPage += 1
            }
        }
    }
</script>
<style>
  .casino_table_btn_wrapper {
     display: flex;
     justify-content: center;
     padding-top:40px;
     padding-bottom: 30px;
    }
    .blog_card_wrapper {
        padding-top:25px;
        padding-bottom:25px;
        background: var(--strong-blue);
    }
    .blog_card_item {
        padding: 10px;
        display: flex;
        background: var(--light-black);
        margin-bottom: 10px;
        border-radius: 10px;
        overflow: hidden;
    }
    .blog_card_item_left {
        width: 30%;
    }
    .blog_card_item_right {
       width: 70%;
    }
    .blog_card_item_img_wrapper {
        width: 320px;
        height: 190px;
    }
    .blog_card_item_img_wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
    .blog_card_item_permalink {
        font-family: var(--font-bold);
        font-style: normal;
        font-size: 18px;
        line-height: 22px;
        text-decoration: none;
        color: var(--white);
        margin-top: 10px;
        display: block;
    }
    .blog_card_item_title {
        margin-bottom: 15px;
    }
    .blog_card_item_author {
        font-family: var(--font);
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 124%;
        text-decoration: none;
        color: var(--light-blue);
        text-transform: uppercase;
        margin-bottom: 15px;
    }
    .blog_card_item_author span {
        color: var(--gold);
        display: inline-block;
        margin-right: 25px;
    }
    .blog_card_item_data {
        display: flex;
        justify-content: space-between;
    }
    .blog_card_item_excerpt {
        height: 60px;
        overflow: hidden;
        font-family: var(--font);
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 175%;
        color: var(--light-blue);
    }
     @media (min-width: 320px) and (max-width: 767px) {
         .blog_card_item {
             flex-wrap: wrap;
         }
         .blog_card_item_left {
             width: 100%;
         }
         .blog_card_item_right {
             margin-top: 20px;
             width: 100%;
         }
         .blog_card_item_img_wrapper {
             width: 100%;
         }
     }
     @media (min-width: 768px) and (max-width: 1200px) {
         .blog_card_item_left, .blog_card_item_right {
             width: 50%;
         }
         .blog_card_item_excerpt {
            height: auto;
         }
     }
</style>