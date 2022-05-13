<template>
  <div>
  </div>
</template>

<script>
    export default {
        name: "app_index_category_game",
        components: {},
        data: () => {
            return {
               data: {},
            }
        },
        async asyncData({route, error}) {
             error({ statusCode: 404, message: 'Post not found' })
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

<style scoped>
</style>