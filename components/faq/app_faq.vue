<template>
    <section class="faq" itemscope itemtype="https://schema.org/FAQPage" v-if="currentValue.length !== 0">
        <div class="container">
            <h2 class="faq_title">{{ title }}</h2>
        </div>
        <div class="container faq_wrapper">
            <div class='faq_row'
                 itemscope
                 itemprop='mainEntity'
                 itemtype='https://schema.org/Question'
                 v-for="(item, index) in currentValue"
                 :key="index"
            >
                <div class='faq_question'
                     @click="activate(item)"
                     :class="{faq_active: item.status === 'open'}"
                >
                    <span itemprop='name'>{{ item.question }}</span>
                    <span class='faq_close'></span>
                </div>
                <div class='faq_answer'
                     :class="{fadeIn: item.status === 'open'}"
                     itemscope
                     itemprop='acceptedAnswer'
                     itemtype='https://schema.org/Answer'>
                    <span itemprop='text' v-html="item.answer" class="faq_answer_item"></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "app_faq",
        props: {
            'value': Array,
            'title': String
        },
        data(){
            return {
                currentValue: []
            }
        },
        methods: {
            activate(item) {
                item.status === 'close' ? item.status = 'open' : item.status = 'close'
            }
        },
        mounted() {
            const faq = []
            this.value.forEach(element => {
                faq.push({
                    status: 'close',
                    answer: element.value_2,
                    question: element.value_1
                })
            })
            this.currentValue = faq
        }
    }
</script>
<style lang="scss">
.faq {
    padding: 30px 0;
    background-color: var(--middle-blue);
}
.faq_title {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 11px;
    color: var(--white);
    font-family: var(--font);
}
.faq_question {
    transition: 0.7s;
    background-color: var(--strong-blue);
    font-family: var(--font);
    border-radius: 10px;
    padding: 5px 75px 5px 25px;
    margin-top: 2px;
    font-style: normal;
    font-weight: bold;
    line-height: 36px;
    color: var(--white);
    position: relative;
    cursor: pointer;
    font-size: 16px;
    @media (min-width: 992px) {
        &:hover {
            opacity: .85;
        }
    }
}
.faq_answer {
    font-family: var(--font);
    line-height: 22px;
    vertical-align: baseline;
    padding: 10px 45px;
    display: none;
    opacity: 0;
    transition: 0.7s;
    background: var(--middle-black);
    margin-top: 5px;
    border-radius: 8px;
}
.faq_answer span {
    padding: 15px 20px;
    font-family: var(--font);
    color: var(--white);
    box-sizing: border-box;
    display: block;
}
.faq_close {
        width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    right: 34px;
    transition: var(--transition-default);
    border: solid var(--theme-cr-2);
    border-width: 0 2px 2px 0;
    border-radius: 2px;
    transform: rotate(45deg) translateY(-50%) translateY(-3px);
}
.fadeIn {
    display: block;
    opacity: 1;
}
.faq_active .faq_close {
    transform: rotate(45deg) translateY(-50%) translate(2px,-1px) scale(-1);
}
.faq_answer_item {
    border-left: 2px solid var(--orange);
}
@media (min-width: 320px) and (max-width: 767px) {
    .faq_answer {
        padding: 15px;
    }
}
</style>