<template>
    <section class="reviews"
             itemprop="review"
             itemscope itemtype="http://schema.org/Review">
        <div itemprop="itemReviewed"
             itemscope
             itemtype="https://schema.org/Organization">
            <meta itemprop="name" :content="title"/>
        </div>

        <div class="container">
            <h2 class="reviews__title" itemprop="name">{{title}}</h2>

            <article class="review-item" v-for="(item, index) in currentPosts"
                 :key="index">
                <div class="review-item__author" itemprop='author' itemscope='' itemtype='http://schema.org/Person'>
                    <span itemprop='name'>{{item.review_name}}</span>
                </div>
                <div class="review-item__rating">
                    <div class="star-rating">
                        <div class="star-rating__val" :style="'width: '+item.review_rating+'%;'">

                        </div>
                    </div>
                    <strong class="slot-item__stats-val">{{(item.review_rating/10).toFixed(1)}}/10</strong>
                </div>
                <div class="review-item__desc" itemprop='reviewBody'>
                    {{item.review_text}}
                </div>
            </article>

            <div class="show_more_wrapper" v-if="value.length > (numberPostOnQuery*postCurrentPage)">
                <button type="button" class="reviews__show-more btn-secondary shadow"  @click="postShowMore">
                    {{showMore}}
                </button>
            </div>
        </div>
    </section>
</template>

<script>
    import TRANSLATE from '~/helpers/translate.json'
    import config from '~/config'
    export default {
        name: "app_reviews",
        props: {
            value: {
                type: Array,
                default: []
            },
            title: {
                type: String,
                default: []
            },
        },
        data(){
            return {
                numberPostOnQuery: 5,
                postCurrentPage: 1,
                showMore: TRANSLATE.SHOW_MORE[config.LANG]
            }
        },
        computed: {
            currentPosts() {
                return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        },
        methods: {
            postShowMore(){
                this.postCurrentPage += 1
            }
        }
    }
</script>

<style lang="scss">
.reviews {
    background: var(--light-black);
    padding-top: 30px;
    padding-bottom: 30px;
}
.reviews__title {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 11px;
    color: var(--white);
    font-family: var(--font);
}
.review-item {
    background-color: var(--strong-blue);
    box-shadow: 0 4px 20px rgba(#02133e, .2);
    border-radius: 10px;
    color: var(--white);
    padding: 15px 35px 15px 15px;
    margin-bottom: 18px;
    @media (min-width: 992px) {
        padding: 22px 55px 22px 20px;
    }
}
.review-item__author {
    font-size: 15px;
    line-height: 1.2;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 6px;
    font-family: var(--font);
}
.slot-item__stats-val, .review-item__desc {
    color: var(--white);
    font-family: var(--font);
}
.review-item__desc {
    line-height: 20px;
}
.review-item__rating {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
    margin-left: -2px;
}
.reviews__show-more {
    position: relative;
    width: 200px;
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
.star-rating, .star-rating__val {
    background-image: url(/img/stars.png);
    background-repeat: no-repeat;
    height: 100%;
}
.star-rating {
    background-position: 0 -20px;
    width: 90px;
    height: 17px;
    margin-right: 10px;
}
.show_more_wrapper {
    display: flex;
    justify-content: center;
    z-index: 1;
    position: relative;
    padding-top: 25px;
} 
</style>