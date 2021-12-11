<template>
  <main>
    <app_banner />
    <app_breadcrumb  :value="data.body.breadcrumbs" />
    <app_top_content :value="data.body" />
    <app_content :value="data.body.content" bg="bg-strong-blue"/>
    <app_casino_loop :posts="data.body.casino"  bg="bg-strong-black"/>
    <app_faq         :value="data.body.faq"
                     :title="data.body.faq_title"
                     />
  </main>
</template>

<script>
    import DAL_Page from '~/DAL/static_pages'
    import app_breadcrumb from '~/components/breadcrumb/app_breadcrumb'
    import app_casino_loop from '~/components/casino_loop/app_casino_loop'
    import app_top_content from '~/components/top_content/app_top_content'
    import app_faq from '~/components/faq/app_faq'
	import app_banner from '~/components/banner/app_banner_main'
	import app_content from '~/components/content/app-content'
    import config from '~/config/index'
    export default {
        name: "app_single_payment",
        components: {app_breadcrumb, app_casino_loop, app_faq, app_top_content, app_banner, app_content},
        data: () => {
            return {
               data: {},
            }
        },
        async asyncData({route, req, error}) {
             const request = {
                type: 'payment',
                url: route.params.id
            }
           const response = await DAL_Page.getData(request)
           if(response.data.status === '404') {
               error({ statusCode: 404, message: 'Post not found' })
           } 
           else { 
               const body = response.data  
               const data = body
               data.body = data.body
               const faq = []
               data.body.faq.forEach(element => {
                  faq.push({
                    status: 'close',
                    answer: element.answer,
                    question: element.question
                 })
               });
              data.body.faq = faq
              data.body.currentUrl = config.BASE_URL + route.path
               data.body.breadcrumbs = [
				   {title:'Онлайн казино', permalink: '/'},
				   {title: 'Платежные системы', permalink: '/payments/'},
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
                    content: this.data.body.meta_description
                },
                {
                    hid: 'classification',
                    name: 'classification',
                    content: this.data.body.meta.classification
                },
                {
                    hid: 'distribution',
                    name: 'distribution',
                    content: this.data.body.meta.distribution
                },
                {
                    hid: 'author',
                    name: 'author',
                    content: this.data.body.meta.author
                },
                {
                    hid: 'creator',
                    name: 'creator',
                    content: this.data.body.meta.creator
                },
                {
                    hid: 'copyright',
                    name: 'copyright',
                    content: this.data.body.meta.copyright
                },
                {
                    hid: 'publisher',
                    name: 'publisher',
                    content: this.data.body.meta.publisher
                },
                {
                    hid: 'geo.placename',
                    name: 'geo.placename',
                    content: this.data.body.meta.placename
                },
                {
                    hid: 'geo.position',
                    name: 'geo.position',
                    content: this.data.body.meta.position
                },
                {
                    hid: 'geo.region',
                    name: 'geo.region',
                    content: this.data.body.meta.region
                },
                {
                    hid: 'ICBM',
                    name: 'ICBM',
                    content: this.data.body.meta.ICBM
                },
                 {
                    hid: 'robots',
                    name: 'robots',
                    content: this.data.body.meta.robots
                },
                                                               // og //
                {
                    hid: 'og:locale',
                    property: 'og:locale',
                    content: 'ru-UA'
                },
                {
                    hid: 'og:type',
                    property: 'og:type',
                    content: 'article'
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.data.body.meta_title
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.data.body.meta_description
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: this.data.body.currentUrl,
                },
                {
                    hid: 'og:article:section',
                    property: 'og:article:section',
                    content: this.data.body.h1,
                },
                {
                    hid: 'og:article:published_time',
                    property: 'og:article:published_time',
                    content: this.data.body.date,
                },
                {
                    hid: 'og:article:modified_time',
                    property: 'og:article:modified_time',
                    content: this.data.body.date_modified,
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: this.data.body.thumbnail,
                },
                // end og //
                // twitter //
                {
                    hid: 'twitter:card',
                    name: 'twitter:card',
                    content: 'summary'
                },
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: this.data.body.meta_title,
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: this.data.body.meta_description,
                },
                {
                    hid: 'twitter:image',
                    name: 'twitter:image',
                    content: this.data.body.thumbnail,
                },
                {
                    hid: 'twitter:url',
                    name: 'twitter:url',
                    content: this.data.body.currentUrl,
                },
                // end twitter //

            ],
             link: [
                   { rel: 'canonical', href: this.data.body.currentUrl}
                ]
        }
    }
    }
</script>

<style scoped>

</style>