<template>
    <section class="cover_h1">
        <div class="container">
            <h1 v-html='h1' class='cover_h1_ttl'></h1>
            <div class="cover_h1_text" v-html='text' v-if="text"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "app-h1",
        props: {
            h1: {
        		type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            }
        },
        data(){
            return {
                
            }
        },
    }
</script>

<style>
  h1 {
      font-family: var(--font);
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      color: var(--white);
      text-align: left;
  }
  .cover_h1 {
      background: var(--gold-yellow-gradient);
      padding-top: 10px;
      padding-bottom: 30px;
  }
  .cover_h1_text {
      font-family: var(--font);
      font-style: italic;
      font-weight: bold;
      color: var(--white);
      width: 600px;
      max-width: 100%;
  }
  .cover_h1_ttl {
      margin-bottom: 30px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
      .cover_h1 {
        padding-top: 15px;
        padding-bottom: 10px; 
      }
  }
</style>