<template>
  <main>
      <app_vendor_loop 
           :posts='data.body.posts'
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
    import app_vendor_loop from '~/components/vendor_loop/app_vendor_loop'
    import config from '~/config'
export default {
    name: 'vendor-category-page',
    data: () => {
        return {}
    },
    components: {app_content, app_faq, app_vendor_loop},
    async asyncData({route, error}) {
        const request = new DAL_Builder()
        const response = await request.postType('vendors')
                                      .url(route.params.id)
                                      .get() 
        if(response.data.confirm === 'error') {
                 error({ statusCode: 404, message: 'Post not found' })
        }
        else {
                 const body = response.data.body
                 const data = {body}
                 data.body.currentUrl = config.BASE_URL + route.path
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
