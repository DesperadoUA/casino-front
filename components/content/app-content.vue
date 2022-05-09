<template>
  <section :class="'content '+bg">
      <div class="container cms" v-html="value"></div>
  </section>
</template>

<script>
import config from '~/config'
import TRANSLATE from '~/helpers/translate'
    export default {
        name: "app-content",
        props: {
        	value: {
        		type: String,
                default: ''
            },
            bg:{
        		type: String,
                default: ''
            }
        },
        data(){
            return {
                heading: TRANSLATE.CONTENT[config.LANG]
            }
        },
        mounted(){
            const main = document.querySelector('.cms')
            const menu = main.querySelector('.nav')
            if(menu) {
                const arrH = []
                const h = main.querySelectorAll('.heading')
                h.forEach(item => arrH.push(item))
               
                let str = `<div class="article_menu_heading">${this.heading}</div>
                           <ol class="article_menu">`
                if(arrH.length === 0) {
                    menu.remove()
                } else {
                    arrH.forEach( (item, index) => {
                        str += `<li class="${item.dataset.deep} article_menu_item">
                                <a href="#heading_${index}" class="article_menu_link">
                                    ${item.innerHTML}
                                </a>
                                </li>`
                    })
                    str += '</ol>'
                    menu.insertAdjacentHTML('afterBegin', str)
                    arrH.forEach((item, index) => {
                        item.setAttribute('id', `heading_${index}`)
                    })
                }
            }
        }
    }
</script>
<style>
.article_menu_heading {
    font-family: var(--font);
    color: var(--white);
    font-size: 24px;
}
.article_menu {
    position: relative;
    list-style: none;
    margin-left: 0px;
    display: inline-block;
}
.article_menu_item {
    position: relative;
    left: 0;
    margin: 2px 0;
    border-left: 2px solid var(--orange);
    transition: 0.5s;
    cursor: pointer;
}
.article_menu_item::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--orange);
    transform: scaleX(0);
    transition: 0.5s;
    transform-origin: left;
}
.article_menu_item:hover {
    left:10px;
}
.article_menu_item:hover::before {
    transform: scaleX(1);
}
.article_menu .article_menu_link {
    text-decoration: none;
    color: var(--white);
    display:inline-block;
    z-index: 1;
    transition: 0.5s;
}
.article_menu_link {
    position: relative;
    padding: 4px 8px;
}
</style>
