<template>
    <nav class="block_menu shadow">
        <div class="menu_title" v-if='title !== ""'>
            {{title}}
        </div>
        <ul>
            <li v-for="(item, index) in value" :key="index" class="block_menu_item">
                <NuxtLink :to="item.value_2">{{item.value_1}}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
        name: "app-block-menu",
        props: {
            title: {type: String, default: ''},
            value: {type: Array, default: []}
        },
        data(){
            return {
            
            }
        }
    }
</script>
<style scoped>
    .block_menu {
        width:360px;
        box-shadow: 0 15px 40px rgba(0, 0, 0,1);
        padding: 15px 0px 0px 0px;
    }
    .menu_title {
        color: white;
        font-size: 24px;
        font-family: var(--font);
        padding-bottom: 15px;
        padding-left: 15px;
        border-bottom: 1px solid var(--orange);
    }
    .block_menu_item {
        position: relative;
        list-style: none;
        font-size: 18px;
        padding: 15px;
        cursor: pointer;
        z-index: 2;
    }
    .block_menu_item:before {
        content: '';
        position: absolute;
        top:0px;
        left:0px;
        width: 100%;
        height: 100%;
        background: var(--orange);
        z-index: -1;
        transform: scaleY(0);
        transition: transform 0.5s;
        transform-origin: bottom;
    }
    .block_menu_item:hover:before {
        transform: scaleY(1);
        transition: transform 0.5s;
        transform-origin: top;
    }
    .block_menu_item a {
        color: var(--white);
        text-decoration: none;
        font-family: var(--font);
        display: block;
    }

</style>