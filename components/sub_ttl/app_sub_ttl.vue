<template>
    <h2 class="sub_ttl" v-if="title!==''">{{title}}</h2>
</template>
<script>
 export default {
        name: "app_sub_ttl",
        props: {
            title: {
        		type: String,
                default: ''
            }
        } 
    }
</script>
<style scoped>
    .sub_ttl {
        font-family: var(--font);
        color: var(--white);
        font-size: 28px;
        margin-bottom: 10px;
    }
</style>