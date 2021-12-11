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
				if(options) {
					this.value = options.logo
				}
				return this.value
			}
		}
	}
</script>

<style scoped>

</style>