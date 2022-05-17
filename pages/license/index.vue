<template>
  <main>
      <app_breadcrumbs 
           :value="data.body.breadcrumbs" />
      <app_category_link 
           :value="data.body.category" 
           v-if="data.body.category.length" 
        />
      <app_license_loop
           :posts='data.body.licenses'
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
    import app_license_loop from '~/components/license_loop/app_license_loop'
    import app_category_link from '~/components/category_link/app_category_link'
    import app_breadcrumbs from '~/components/breadcrumbs/app_breadcrumbs'
    import config from '~/config'
export default {
    name: 'license-page',
    data: () => {
        return {}
    },
    components: {app_content, app_faq, app_license_loop, app_category_link, app_breadcrumbs},
    async asyncData({store, route}) {
        const request = new DAL_Builder()
        const response = await request.postType('pages')
                                      .url('license')
                                      .get() 
        if(response.data.confirm === 'error') {
            error({ statusCode: 404, message: 'Post not found' })
        }
        else {
            const body = response.data.body;
            const data = {body};
            data.body.currentUrl = config.BASE_URL + route.path
            data.body.breadcrumbs = [
                {...config.ROOT_BREADCRUMBS[config.LANG]},
                {title:data.body.title, permalink: ''}
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
