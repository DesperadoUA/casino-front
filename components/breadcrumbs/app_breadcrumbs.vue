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

<style lang="scss" scoped>
.breadcrumbs {
    background-color: var(--light-black);
    padding-top: 25px;
    padding-bottom: 20px;
    @media (min-width: 992px) {
        padding-top: 25px;
    }
}
.breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}
.breadcrumb-item {
    font-size: 18px;
    line-height: 1.2;
    font-weight: 500;
    margin-right: 8px;
    color: var(--theme-cr-txt-cms);
    a {
        color: var(--btn-primary);
        text-decoration: none;
        display: inline-block;
        margin-right: 5px;
    }
}
</style>