<template>
  <section :class="'content '+bg">
      <div class="container" v-html="value">
      </div>
  </section>
</template>

<script>
    export default {
        name: "app-content",
        props: {
        	value: {
        		type: String,
                default: ''
            },
            bg:{
        		type: String,
                default: ''
            }
        },
        data(){
            return {
                
            }
        },
        mounted(){
            
        }
    }
</script>
