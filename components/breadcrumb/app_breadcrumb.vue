<template>
    <div class="breadcrumbs">
        <div class="container">
            <ul itemscope="itemscope" itemtype="https://schema.org/BreadcrumbList" class="breadcrumb-list">
                <li itemprop="itemListElement"
                    itemscope="itemscope"
                    itemtype="https://schema.org/ListItem"
                    class="breadcrumb-item"
                    v-for="(item, index) in value"
                    :key="index"
                >
                    <span itemtype="https://schema.org/Thing" v-if="item.permalink === ''"
                          itemscope="itemscope" itemprop="item" :id="index === 0 ? 'homePage' : 'single' "
                          class="nuxt-link-active">
                          <span itemprop="name">{{item.title}}</span>
                    </span>
                    <NuxtLink v-else :to="item.permalink"
                              itemtype="https://schema.org/Thing"
                              itemscope="itemscope" itemprop="item" :id="index === 0 ? 'homePage' : 'single' "
                              class="nuxt-link-active"><span itemprop="name">{{item.title}}
                    </span>
                    </NuxtLink>
                    <span v-if="value.length !== (index+1)">/</span>
                    <meta itemprop="position" :content="++index">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
	export default {
		name: "app_breadcrumbs",
		props: {
			value: {
				type: Array,
				default: []
			},
		},
		data() {
			return {
			}
		},
		mounted() {
		}
	}
</script>
<style> 
    .breadcrumbs {
        background: var(--strong-blue);
        padding-top: 30px;
        padding-bottom: 20px;
        color: var(--white);
        font-family: var(--font);
        font-size: 15px;
    }
    .breadcrumbs a {
        color: var(--gold);
        text-decoration: none;
    }
    .breadcrumb-list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }
    .breadcrumb-item {
        margin-right: 8px;
    }
</style>