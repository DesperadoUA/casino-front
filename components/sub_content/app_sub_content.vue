<template>
    <div class="content" v-html="text" v-if="text !== ''"></div>
</template>
<script>
 export default {
        name: "app_sub_content",
        props: {
            text: {
        		type: String,
                default: ''
            }
        } 
    }
</script>
<style scoped>
   
</style>