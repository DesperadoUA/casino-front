<template>
  <main>
       <app_category_link 
           :value="data.body.category" 
           v-if="data.body.category.length" 
        />
      <app_game_loop  
           :posts='data.body.games'
           bg='bg-strong-black'
      />
      <app_content 
           :value='data.body.content' 
           bg='bg-strong-blue'
       />
       <app_faq 
           :value='data.body.faq'
           title='Faq'
       />
  </main>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import app_content from '~/components/content/app-content'
    import app_faq from '~/components/faq/app_faq'
    import app_game_loop from '~/components/game_loop/app_game_loop'
    import app_category_link from '~/components/category_link/app_category_link'
    import config from '~/config'
export default {
    name: 'game-page',
    data: () => {
        return {}
    },
    components: {app_content, app_faq, app_game_loop, app_category_link},
    async asyncData({store, route}) {
        const request = new DAL_Builder()
        const response = await request.postType('pages')
                                      .url('game')
                                      .get() 
        const {data} = response
        data.body.currentUrl = config.BASE_URL
        return {data}
    },
    head() {
        return {
            title: this.data.body.meta_title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.data.body.description
                },
            ],
            link: [
                { rel: 'canonical', href: this.data.body.currentUrl}
            ]
        }
    }
}
</script>

<style>

</style>
