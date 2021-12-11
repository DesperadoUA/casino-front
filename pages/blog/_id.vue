<template>
  <main>
      <app_banner />
      <app_breadcrumb  :value="data.body.breadcrumbs" />
    <section class="bg-strong-blue">
        <div class="container blog_section">
            <div class="blog_section_left">
                <app_h1 :value="data.body.h1" />
                <app_thumbnail :value="data.body" />
                <app_content :value="data.body.content" />
            </div>
            <div class="blog_section_right">
                <app_sidebar :author="data.body.author"
                             :date="data.body.date"
                />
            </div>
        </div>
    </section>
  </main>
</template>

<script>
    import DAL_Page from '~/DAL/static_pages'
    import app_content from '~/components/content/app-content'
    import app_breadcrumb from '~/components/breadcrumb/app_breadcrumb'
    import app_sidebar from '~/components/sidebar/app_sidebar'
	import app_banner from '~/components/banner/app_banner_main'
    import app_h1 from '~/components/h1/app-h1'
    import app_thumbnail from '~/components/thumbnail/app_thumbnail'
    import config from '~/config/index'
    export default {
        name: "app_single_blog",
        components: {app_banner, app_content, app_breadcrumb, app_sidebar, app_h1, app_thumbnail},
        data: () => {
            return {
               data: {},
            }
        },
        async asyncData({route, error}) {
            const request = {
                type: 'blog',
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
               data.body.currentUrl = config.BASE_URL + route.path
			   data.body.breadcrumbs = [
				   {title: 'Онлайн казино', permalink: '/'},
				   {title: 'Блог', permalink: '/blog/'},
				   {title: data.body.title, permalink: ''}
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

<style>
   .blog_section {
       display: flex;
   }
   .blog_section .container {
       width: 100%;
       max-width: 100%;
   }
   .blog_section_left {
       width:918px;
   }
   .blog_section_right {
       flex-grow: 1;
   }
   @media (min-width: 320px) and (max-width: 767px) {
       .blog_section {
           flex-wrap: wrap;
       } 
       .blog_section_left, .blog_section_right {
           width: 100%;
       }
   }
   @media (min-width: 768px) and (max-width: 1200px) {
       .blog_section {
           flex-wrap: wrap;
       }
       .blog_section_left, .blog_section_right {
           width: 100%;
       }
   }
</style>