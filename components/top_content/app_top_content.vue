<template>
  <section class="top_content content">
      <div class="container top_content_wrapper" v-if="value.thumbnail!=''">
            <div class="top_content_left">
                <img :src='value.thumbnail' 
                     loading="lazy"
                     width="145"
                     height="110"
                />
            </div>
            <div class="top_content_right">
                <h1 class="top_content_title" v-html="value.title"></h1>
            </div>
      </div>
  </section>
</template>

<script>
    export default {
        name: "app-top-content",
        props: ['value'],
        data(){
            return {
                
            }
        }
    }
</script>
<style scoped>
    .top_content {
        background: var(--strong-blue);
    }
.top_content_wrapper {
    display: flex;
}
.top_content_left {
    min-width: 20%;
   padding:10px;
}
.top_content_title {
    font-family: var(--font);
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    color: var(--white);
    width: 100%;
    margin-bottom: 10px;
}
.top_content_right {
    display: flex;
    align-items: center;
}
@media (min-width: 320px) and (max-width: 767px) {
    .top_content_wrapper {
        flex-wrap: wrap;
    }
    .top_content_left, .top_content_right {
        width: 100%;
    }
    .top_content_title {
        text-align: center;
    }
    .top_content_left {
        text-align: center;
    }
}
</style>