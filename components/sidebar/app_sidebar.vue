<template>
  <aside class="sidebar">
      <div class="sidebar_item">Автор обзора: <span class="color-gold">{{author}}</span></div>
      <div class="sidebar_item">{{date | dateSlice}}</div>
  </aside>
</template>
<script>
    export default {
        name: "app_sidebar",
        props: ['author', 'date'],
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
.sidebar {
    padding: 15px;
}
.sidebar_item {
   font-family: var(--font);
   font-style: normal;
   font-weight: 600;
   font-size: 12px;
   line-height: 150.7%;
   text-transform: uppercase;
   color: var(--light-blue);
   margin-bottom: 10px;
   border-bottom: 1px solid var(--gray);
   padding-bottom: 5px;
}
.sidebar_item span {
    color: var(--blue);
}
</style>