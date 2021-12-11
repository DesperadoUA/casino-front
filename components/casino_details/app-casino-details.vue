<template>
    <section class="casino_details">
        <div class="container">
            <div class="casino_top_desc_row" v-if="value.category.length !== 0">
                <div class="casino_top_desc">Категории автоматов:</div>
                <div class="casino_top_desc_value">
                    <ul class="casino_top_list">
                        <li v-for="(item, index) in value.category"
                            :key="index" >
                            <span class="casino_top_list_item" v-html="item"></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="casino_top_desc_row" v-if="value.relative_payments.length !== 0">
                    <div class="casino_top_desc">Методы оплаты:</div>
                    <div class="casino_top_desc_value">
                        <ul class="casino_top_list">
                            <li v-for="(item, index) in value.relative_payments"
                                :key="index" class="bg-opacity-white border-none">
                                <NuxtLink no-prefetch :to="item.permalink" v-html="item.title"></NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            <div class="casino_top_desc_row" v-if="value.relative_pay_out.length !== 0">
                    <div class="casino_top_desc">Методы выплат:</div>
                    <div class="casino_top_desc_value">
                        <ul class="casino_top_list ">
                            <li v-for="(item, index) in value.relative_pay_out"
                                :key="index" class="green" >
                                <NuxtLink no-prefetch :to="item.permalink" v-html="item.title"></NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            <div class="casino_top_desc_row" v-if="value.relative_vendors.length !== 0">
                    <div class="casino_top_desc">Платформы:</div>
                    <div class="casino_top_desc_value">
                        <ul class="casino_top_list">
                            <li v-for="(item, index) in value.relative_vendors"
                                :key="index"
                                class="bg-opacity-white border-none"
                            >
                                <NuxtLink no-prefetch :to="item.permalink" v-html="item.title"></NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            <div class="casino_top_desc_row" v-if="value.currency.length !== 0">
                <div class="casino_top_desc">Игровые валюты:</div>
                <div class="casino_top_desc_value">
                    <ul class="casino_top_list">
                        <li v-for="(item, index) in value.currency"
                            :key="index" >
                            <span class="casino_top_list_item" v-html="item.casino_currency"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
	export default {
		name: "app-casino-details",
        props: {
			value: {
				type: Object,
                default: {}
            }
        },
        data:()=>{
			return{
				category: ['Игровые автоматы', 'Покер', 'Рулетка', 'Однорукие бандиты', 'Настольные игры',
                'кости', 'Аркадные игры']
            }
        }
	}
</script>

<style scoped>
.casino_details {
    padding: 20px 0px 40px 0px;
    background: var(--light-black);
}
    .casino_top_desc_row {
        display: flex;
        padding: 15px 0px;
        border-bottom: 1px solid var(--light-blue);
    }
    .casino_top_desc {
        min-width: 180px;
        font-family: var(--font);
        font-size: 14px;
        color: var(--light-blue);
    }
    .casino_top_list li {
        padding: 10px;
        display: inline-block;
        color: var(--white);
        font-family: var(--font);
        margin: 5px;
    }
    .casino_top_list li a {
        color: var(--white);
    }
@media (min-width: 320px) and (max-width: 767px) {
    .casino_top_desc_row {
        flex-wrap: wrap;
    }
    .casino_top_desc, .casino_top_list {
        width: 100%;
    }
}
</style>