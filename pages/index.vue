<template>
  <main>
      <app_banner />
      <app_casino_loop 
           :posts='data.body.casinos' 
           :title='onlinecasinoUkraine' 
           :text='textCasino'
           bg='bg-strong-black'
      />
      <app_bonus_loop 
           :posts='data.body.bonuses' 
           :title='topBonuses'
           :text='textBonus'
      />
      <app_game_loop  
           :posts='data.body.games'
           :title='popularSlots'
           :text='textGame'
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
    import app_casino_loop from '~/components/casino_loop/app_casino_loop'
    import app_game_loop from '~/components/game_loop/app_game_loop'
    import app_banner from '~/components/banner/app_banner_main'
    import app_bonus_loop from '~/components/bonus_loop/app_bonus_loop'
    import app_faq from '~/components/faq/app_faq'
    import config from '~/config'
    import TRANSLATE from '~/helpers/translate'
export default {
    name: "main-page",
    data: () => {
        return {
            onlinecasinoUkraine: TRANSLATE.ONLINE_CASINO_UKRAINE[config.LANG],
            popularSlots: TRANSLATE.POPULAR_SLOTS[config.LANG],
            topBonuses: TRANSLATE.TOP_BONUSES[config.LANG],
            casinoText: '',
            gameText: '',
            bonusText: ''
        }
    },
    computed:{
		textCasino() {
			const settings = this.$store.getters['settings/getSettings']
			if(settings) {
                const text = settings.filter(item => item.key_id === 'main_page_casino_text')
                this.casinoText = text.length ? text[0].value : ''
			}
			return this.casinoText
		},
        textGame() {
			const settings = this.$store.getters['settings/getSettings']
			if(settings) {
                const text = settings.filter(item => item.key_id === 'main_page_game_text')
                this.gameText = text.length ? text[0].value : ''
			}
			return this.gameText
		},
        textBonus() {
			const settings = this.$store.getters['settings/getSettings']
			if(settings) {
                const text = settings.filter(item => item.key_id === 'main_page_bonus_text')
                this.bonusText = text.length ? text[0].value : ''
			}
			return this.bonusText
		},
	},
    components: {app_content, app_casino_loop, app_banner, app_game_loop, app_bonus_loop, app_faq},
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
