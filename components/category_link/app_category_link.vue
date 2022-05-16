<template>
    <div class="category-filter">
        <nav class="category-filter__container container">
            <NuxtLink class="category-filter-item"
                  v-for="(item, index) in value"
                  :key="index"
                  :to="item.permalink"
            >{{item.title}}
            </NuxtLink>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "app-category-link",
        props: {
            value: {
                type: Array,
                default: []
            },
        },
        data(){
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
.category-filter {
    background-color: var(--strong-blue);
    padding-top: 20px;
    @media (min-width: 992px) {
        padding: 10px 0px;
    }
    a {
        text-decoration: none;
        display: inline-block;
        margin: 10px 10px;
        white-space: nowrap;
    }
    a:before {
       content: '';
       position: absolute;
       top:0px;
       left: 0px;
       width: 100%;
       height: 100%;
       border-top:2px solid var(--orange);
       border-left:2px solid var(--orange);
       transform-origin: left;
       transition: 0.5s;
       box-sizing: border-box;
       border-radius: 4px;
    }
    a:hover:before {
        width: 20px;
        height: 20px;
    }
    a:after {
       content: '';
       position: absolute;
       bottom:0px;
       right: 0px;
       width: 100%;
       height: 100%;
       border-bottom:2px solid var(--orange);
       border-right:2px solid var(--orange);
       transform-origin: left;
       transition: 0.5s;
       box-sizing: border-box;
       border-radius: 4px;
    }
    a:hover:after {
        width: 20px;
        height: 20px;
    }
}
.category-filter__container {
    display: flex;
    @media (max-width: 991px) {
        margin-left: 0;
        margin-right: calc(var(--side-gutters) * -1);
        overflow-x: auto;
        margin-top: -12px;
        padding-top: 12px;
    }
    @media (min-width: 992px) {
        flex-wrap: wrap;
    }
}
.category-filter-item {
    position: relative;
    display: block;
    padding: 10px 15px;
    margin: 0 10px;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--white);
    font-family: var(--font);
}
</style>