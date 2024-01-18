<template>
    <main>
        <app_h1 
            :h1='data.body.h1' 
            :text='data.body.short_desc' />
        <app_breadcrumbs 
           :value="data.body.breadcrumbs" />
        <app_casino_loop 
           :posts='data.body.casinos'
            bg='bg-strong-black'
        />
        <app_content 
            :value='data.body.content' 
            bg='bg-strong-blue'
        />
    </main>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import app_content from '~/components/content/app-content'
    import app_breadcrumbs from '~/components/breadcrumbs/app_breadcrumbs'
    import app_h1 from '~/components/h1/app_h1'
    import app_casino_loop from '~/components/casino_loop/app_casino_loop'
    import config from '~/config/index'
    export default {
        name: "app_single_payment",
        components: {app_content, app_breadcrumbs, app_h1, app_casino_loop},
        data: () => {
            return {
               data: {},
            }
        },
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('payment')
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
                    {...config.BREADCRUMBS_PAYMENTS[config.LANG]},
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