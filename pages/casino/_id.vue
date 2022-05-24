<template>
    <main>
        <app_h1 
            :h1='data.body.h1' 
            :text='data.body.short_desc' />
        <app_breadcrumbs 
            :value="data.body.breadcrumbs" />
        <app_casino_top 
            :value="data.body" />
        <app_casino_characters 
            :posts='data.body.vendors'
            :title='ttlVendors'
        />
        <app_casino_characters 
            :posts='data.body.payments'
            :title='ttlPayments'
        />
        <app_bonus_loop 
           :posts='data.body.bonuses' 
           :title='ttlBonuses + data.body.title'
        />
        <app_content 
            :value='data.body.content' 
            bg='bg-strong-blue'
        />
        <app_faq 
           :value='data.body.faq'
           title='Faq' />
        <app_reviews 
            :value='data.body.reviews'
            :title='ttlReviews + data.body.title'
        />
    </main>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import app_content from '~/components/content/app-content'
    import app_breadcrumbs from '~/components/breadcrumbs/app_breadcrumbs'
    import app_h1 from '~/components/h1/app_h1'
    import app_faq from '~/components/faq/app_faq'
    import app_casino_top from '~/components/casino_top/app_casino_top'
    import app_bonus_loop from '~/components/bonus_loop/app_bonus_loop'
    import app_casino_characters from '~/components/casino_characters/app_casino_characters'
    import app_reviews from '~/components/reviews/app_reviews'
    import config from '~/config'
    import TRANSLATE from '~/helpers/translate'
    export default {
        name: "app_single_casino",
        components: {app_content, app_breadcrumbs, app_h1, app_faq, app_casino_top, app_bonus_loop, app_casino_characters, app_reviews},
        data: () => {
            return {
              ttlBonuses: TRANSLATE.CASINO_BONUSES[config.LANG],
              ttlVendors: TRANSLATE.VENDORS[config.LANG],
              ttlPayments: TRANSLATE.PAYMENTS[config.LANG],
              ttlReviews: TRANSLATE.CASINO_REVIEWS[config.LANG]
            }
        },
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('casino')
                                          .url(route.params.id)
                                          .get()
             if(response.data.confirm === 'error') {
                 error({ statusCode: 404, message: 'Post not found' })
             }
             else {
                const {data} = response
                data.body.currentUrl = config.BASE_URL + route.path
                data.body.breadcrumbs = [
                    {...config.ROOT_BREADCRUMBS[config.LANG]},
                    {...config.BREADCRUMBS_CASINOS[config.LANG]},
                    {title:data.body.title, permalink: ''},
                ]
                return {data}
              }
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