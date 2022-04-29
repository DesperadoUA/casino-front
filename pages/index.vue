<template>
  <main>
      <app_banner />
      <app_casino_loop :posts="data.body.casinos" title="Онлайн казино Украины" bg="bg-strong-black"/>
      <!--<app_top_bonuses :value="data.body.bonuses" title="Топ бонусы" v-if="data.body.bonuses.length !== 0" /> -->
      <app_game_loop  :posts="[]"/>
      <app_content :value="data.body.content" bg="bg-strong-blue"/>
  </main>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import app_content from '~/components/content/app-content'
    import app_casino_loop from '~/components/casino_loop/app_casino_loop'
    import app_game_loop from '~/components/game_loop/app_game_loop'
    import app_banner from '~/components/banner/app_banner_main'
    import app_blog_card from '~/components/blog_card/app_blog_card'
    import app_top_bonuses from '~/components/top-bonuses/app_top_bonuses'
    import config from '~/config/index'
export default {
    name: "main-page",
    data: () => {
        return {
        }
    },
    components: {app_content, app_casino_loop, app_banner, app_blog_card, app_top_bonuses, app_game_loop},
    async asyncData({store, route}) {
        const request = new DAL_Builder()
        const response = await request.postType('pages')
                                      .url('main')
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
