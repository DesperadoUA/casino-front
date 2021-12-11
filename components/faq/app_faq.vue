<template>
    <section class="faq" itemscope itemtype="https://schema.org/FAQPage" v-if="value.length !== 0">
        <div class="container">
            <div class="faq_title">{{title}}</div>
        </div>
        <div class="container faq_wrapper">
             <div class='faq_row' 
                  itemscope 
                  itemprop='mainEntity' 
                  itemtype='https://schema.org/Question' 
                  v-for="(item, index) in value"
                  :key="index"
                  >
                  <div class='faq_question' 
                        @click="activate(item)"
                        :class="{faq_active: item.status === 'open'}"
                        >
                        <span itemprop='name'>{{item.question}}</span>
                        <span class='faq_close'></span>
                        </div>
                        <div class='faq_answer' 
                            :class="{fadeIn: item.status === 'open'}"
                            itemscope 
                            itemprop='acceptedAnswer' 
                            itemtype='https://schema.org/Answer' >
                            <span  itemprop='text' v-html="item.answer"></span>
                        </div> 
             </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "app_faq",
        props: ['value', 'title'],
        data(){
            return {
            }
        },
        methods: {
            activate(item) {
                item.status === 'close' ? item.status = 'open' : item.status = 'close'
            }
        }
    }
</script>
<style> 
    .faq {
        padding: 30px 0px;
        background: var(--light-black);
    }
    .faq_title {
        font-family: var(--font);
        font-size: 35px;
        padding-bottom: 20px;
        color: var(--white);
    }
    .faq_question {
        background: var(--middle-black);
        box-sizing: border-box;
        border-radius: 4px;
        padding: 5px 75px 5px 25px;
        margin-top: 15px;
        font-family: var(--font);
        font-style: normal;
        font-weight: bold;
        line-height: 36px;
        color: var(--white);
        position: relative;
        cursor: pointer;
        font-size: 16px;
    }
    .faq_answer {
        color: var(--white);
        font-family: var(--font);
        box-sizing: border-box;
        font: inherit;
        line-height: 22px;
        vertical-align: baseline;
        padding: 45px 65px;
        display: none;
        opacity: 0;
        transition: 0.7s;
    }
    .faq_answer a {
        color: var(--gold);
    }
    .faq_answer span {
        font-family: var(--font);
    }
    .faq_close {
        width: 12px;
        height: 6px;
        position: absolute;
        background: var(--faq_close);
        top: 20px;
        right: 25px;
        transition: 0.7s;
    }
    .fadeIn {
        display: block;
        opacity: 1;
    }
    .faq_active .faq_close {
        transform: rotate(180deg);
    }
    @media (min-width: 320px) and (max-width: 767px) {
        .faq_answer {
        padding: 15px;
    }
    }
</style>