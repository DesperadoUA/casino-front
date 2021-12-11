<template>
  <section class="bonus_card_wrapper" v-if="value.length !== 0" >
      <div class="container">
          <div class="bonus_card_container">
            <div class="bonus_item"
                 v-for="(item, i) in value"
                 :key="i"
                 @click="refActivate(item)"
            >
             {{item.title}}
            </div>
          </div>
      </div>
  </section>
</template>

<script>
    export default {
        name: "app_bonuses_loop",
        props: ['value'],
        methods: {
            refActivate(item) {
            	console.log(item)
                if(item.ref.length !== 0) {
                    const min = 0
                    const max = item.ref.length - 1
                    const random = Math.floor(Math.random() * (max - min + 1)) + min
                    window.open(item.ref[random].casino_ref, '_blank')
                } 
            }
        }
    }
</script>
<style>

  .bonus_item {
     background: var(--white);
     box-sizing: border-box;
     border-radius: 15px;
     display: flex;
     flex-wrap: wrap;
      background: var(--middle-black);
      color: var(--gold);
      padding: 15px;
      margin: 5px;
      font-family: var(--font);
      font-size: 15px;
      cursor: pointer;
  }
 .bonus_card_wrapper {
     padding: 10px 0px;
     background: var(--strong-blue);
 }
 .bonus_card_container {
     display: flex;
     flex-wrap: wrap;
 }

 @media (min-width: 320px) and (max-width: 767px) {
    .bonus_item {
        width: 100%;
        justify-content: center;
    }
 }
</style>