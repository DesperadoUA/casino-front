<template>
    <main>
        <app_h1 
            :h1='data.body.h1' 
            :text='data.body.short_desc' />
        <app_breadcrumbs 
            :value='data.body.breadcrumbs' />
        <app_bonus_top 
            :value='data.body'/>
        <app_content 
            :value='data.body.content' 
            bg='bg-strong-blue'
        />
        <app_bonus_loop 
            :posts='data.body.bonuses'
            :title='ttlBonuses + data.body.casino.title'
            bg='bg-strong-black' />
    </main>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import app_content from '~/components/content/app-content'
    import app_breadcrumbs from '~/components/breadcrumbs/app_breadcrumbs'
    import app_h1 from '~/components/h1/app_h1'
    import app_bonus_top from '~/components/bonus_top/app_bonus_top'
    import app_bonus_loop from '~/components/bonus_loop/app_bonus_loop'
    import config from '~/config/index'
    import TRANSLATE from '~/helpers/translate'
    export default {
        name: "app_single_bonus",
        components: {app_content, app_breadcrumbs, app_h1, app_bonus_top, app_bonus_loop},
        data: () => {
            return {
                ttlBonuses: TRANSLATE.OTHER_BONUSES_FROM[config.LANG]
            }
        },
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('bonus')
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
                    {...config.BREADCRUMBS_BONUSES[config.LANG]},
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