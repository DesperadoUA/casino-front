<template v-if="value.thumbnail" >
    <div class="article-media">
          <img :src="value.thumbnail" :alt="value.title" class="article-media__img">
    </div>
</template>
<script>
    export default {
        name: "app_sidebar",
        props: {
            value: {
                type: Object,
                default: {}
            }
        },
        data(){
            return {
                
            }
        },
        filters: {
            dateSlice(item) {
                return item.slice(0, 10)
            }
        }
    }
</script>

<style>
.article-media {
    margin-bottom: 24px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}
.article-media img {
    border-radius: 10px;
    width: 100%;
}
</style>