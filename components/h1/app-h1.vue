<template>
<section class="cover_h1">
    <div class="container">
        <h1>{{value}}</h1>
    </div>
</section>
</template>

<script>
    export default {
        name: "app-h1",
        props: ['value'],
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
      background: var(--strong-blue);
      padding-top: 10px;
      padding-bottom: 30px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
      .cover_h1 {
        padding-top: 15px;
        padding-bottom: 10px; 
      }
  }
</style>