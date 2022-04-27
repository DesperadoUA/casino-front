<template>
    <NuxtLink no-prefetch to="/" >
        <img :src="logo"
             class="logo"
             width="98"
             height="47"
             v-if="logo !== ''"
             >
    </NuxtLink>
</template>

<script>
	export default {
		name: "app-logo",
		data(){
			return {
				value: ''
			}
		},
		computed:{
			logo() {
                const options = this.$store.getters['options/getOptions']
				return options ? options.filter(item => item.key_id === 'logo')[0].value : ''
			}
		}
	}
</script>

<style scoped>

</style>