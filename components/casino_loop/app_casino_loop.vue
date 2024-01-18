<template>
  <section :class="'casino_table_wrapper '+bg" >
      <div class="container casino_table_container">
          <app_sub_ttl :title="title" />
          <app_sub_content :text="text" />
          <div class="casino_table_row">
            <article class="casino_table_item"
                v-for="(item, index) in posts" :key="index"
            >
               <div class="card">
                    <div class="face face1">
                        <figure>
                            <img :src="item.thumbnail" width="244" height="171">
                            <figcaption>
                                <NuxtLink :to="item.permalink">{{casinoReview}} {{item.title}}</NuxtLink>
                            </figcaption>
                        </figure>
                        <div class="casino_table_item_box">
                            <div class="casino_table_item_box_title">
                                {{welcomeBonus}}:
                            </div>
                            <div class="casino_table_item_box_value">
                                {{item.welcome_bonus}}
                            </div>
                        </div>
                        <div class="casino_table_item_box white_border_top">
                            <div class="casino_table_item_box_title">
                                {{freespins}}:
                            </div>
                            <div class="casino_table_item_box_value">
                                {{item.freespins}}
                            </div>
                        </div>
                        <div class="casino_table_item_rating_wrapper">
                            <div class="item_rating">
                                <div class="item_rating_wrapper">
                                    <div class="item_progress" :style="`width:${item.rating}%`"></div>
                                </div>
                            </div>
                            <div class="item_rating_value">
                                {{item.rating}}/100
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <table>
                                <caption>{{characteristicsGamingHall}}</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">{{meaning}}</th>
                                        <th scope="col">{{description}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                      <td>{{yearFoundation}}</td>
                                      <td>{{item.year}}</td>
                                    </tr>
                                    <tr>
                                      <td>{{minDeposit}}</td>
                                      <td>{{item.min_deposit}}</td>
                                    </tr>
                                    <tr>
                                      <td>{{minPay}}</td>
                                      <td>{{item.min_payments}}</td>
                                    </tr>
                                    <tr>
                                      <td>{{license}}</td>
                                      <td>{{item.license}}</td>
                                    </tr>
                                    <tr>
                                      <td>{{withdrawalPeriod}}</td>
                                      <td>{{item.withdrawal}}</td>
                                    </tr>
                                    <tr>
                                      <td>{{numberGames}}</td>
                                      <td>{{item.number_games}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <footer class="casino_footer">
                            <button class="cta_btn shadow" @click="refActivate(item)">{{goTo}}</button>
                            <NuxtLink :to="item.permalink" class="cta_btn shadow">{{review}}</NuxtLink>
                        </footer>
                    </div>
               </div>
            </article>
          </div>
      </div>
  </section>
</template>

<script>
import config from '~/config'
import TRANSLATE from '~/helpers/translate'
import Helper from '~/helpers'
import app_sub_ttl from '~/components/sub_ttl/app_sub_ttl'
import app_sub_content from '~/components/sub_content/app_sub_content'
    export default {
        name: "app_casino_loop",
        props: {
        	posts: {
        		type: Array,
                default: []
            },
            title: {
        		type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            },
            bg: {
        		type: String,
                default: ''
            }
        },
        components: {app_sub_ttl, app_sub_content},
        data(){
            return {
                casinoReview: TRANSLATE.CASINO_REVIEW[config.LANG],
                welcomeBonus: TRANSLATE.WELCOME_BONUS[config.LANG],
                freespins: TRANSLATE.FREESPINS[config.LANG],
                characteristicsGamingHall: TRANSLATE.CHARACTERISTICS_GAMING_HALL[config.LANG],
                meaning: TRANSLATE.MEANING[config.LANG],
                description: TRANSLATE.DESCRIPTION[config.LANG],
                yearFoundation: TRANSLATE.YEAR_FOUNDATION[config.LANG],
                minDeposit: TRANSLATE.MIN_DEPOSIT[config.LANG],
                minPay: TRANSLATE.MIN_PAY[config.LANG],
                license: TRANSLATE.LICENSE[config.LANG],
                withdrawalPeriod: TRANSLATE.WITHDRAWAL_PERIOD[config.LANG],
                numberGames: TRANSLATE.NUMBER_GAMES[config.LANG],
                goTo: TRANSLATE.GO_TO[config.LANG],
                review: TRANSLATE.REVIEW[config.LANG]
            }
        },
        methods: {
            refActivate(item) {
                Helper.refActivate(item)
            }
        },
        
    }
</script>

<style scoped>
.casino_table_wrapper {
    background: var(--strong-blue);
    padding-top: 30px;
    padding-bottom: 30px;
}
.casino_table_title {
    font-family: var(--font);
    color: var(--white);
    font-size: 28px;
    margin-bottom: 10px;
}
.casino_table_row {
    display: flex;
    flex-wrap: wrap;
}
.casino_table_item {
    display: flex;
    justify-content: center;
    width: 33%;
}
.casino_table_item:nth-child(3n+1) {
    justify-content: flex-start;
}
.casino_table_item:nth-child(3n+3) {
    justify-content: flex-end;
}
.card {
    position: relative;
    width: 300px;
    height: 350px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.card .face {
    position: absolute;
    width: 100%;
    height: 100%;
}
.card .face.face1 {
    top:0;
    left:0;
    transition-property: left, z-index, transform;
    transition-delay: 0s, .5s, .5s;
    transition-duration: .5s, .0s, .5s;
    z-index: 2;
    transform: translate(-10px, -10px);
    background: white;
    text-align: center;
     border-radius: 10px;
     overflow: hidden;
}
.card:hover .face.face1 {
    transition-property: transform, z-index, left;
    transition-delay: 0s, .5s, .5s;
    transition-duration: .5s, .0s, .5s;
    transform: translate(170px, -10px);
    z-index: 1;
    left:-160px;
}
.card .face.face1 img {
    width: 100%;
}
.card .face.face1 a {
    color: var(--black);
    text-decoration: none;
    font-family: var(--font);
    font-size: 20px;
    display: block;
    padding: 10px;
    font-weight: bold;
}
.card .face.face2 {
    top:0;
    left:0;
    transition-property: left, z-index, transform;
    transition-delay: 0s, .5s, .5s;
    transition-duration: .5s, .0s, .5s;
    z-index: 1;
    background: black;
    border-radius: 10px;
}
.card:hover .face.face2 {
    transition-property: transform, z-index, left;
    transition-delay: 0s, .5s, .5s;
    transition-duration: .5s, .0s, .5s;
    transform: translate(-160px, -10px);
    z-index: 2;
    left: 160px;
}

.card .face.face2 .content {
    padding: 10px 10px 5px 10px;
    box-sizing: border-box;
}
.casino_table_item_box {
    display: flex;
    align-items: center;
    background: var(--fiolet);
}
.white_border_top {
    border-top: 2px solid white;
}
.casino_table_item_box_title, .casino_table_item_box_value {
    padding: 10px;
    width: 50%;
    text-align: center;
    font-family: var(--font);
}
.face caption {
    font-family: var(--font);
    white-space: nowrap;
    text-align: center;
    border-bottom: 1px solid var(--gold);
    display: block;
}
.face td {
    font-size: 14px;
    padding: 5px;
    border-bottom: 1px solid var(--gold);
    border-left: 1px solid var(--gold);
}
.face tr:last-child td {
    border-bottom: none;
}
.face td:nth-child(1) {
    width: 40%;
    border-left: none;
}
.face td:nth-child(2) {
    width: 60%;
    text-align: right;
}
.face table {
    border-radius: 2px;
    border: 2px solid var(--gold);
}
.face thead {
    width: 100%;
    font-size: 12px;
    display: none;
    box-sizing: border-box;
}
.face tbody {
    display: block;
}
.face tr {
    display: flex;
}
.face th {
    background: transparent;
    height: auto;
    font-family: var(--font);
    color: var(--light-blue);
    text-transform: uppercase;
    padding: 5px;
    font-size: 12px;
    border-bottom: 1px solid var(--gold);
    display: block;
}
.face th:nth-child(1) {
    border-right: 1px solid var(--gold);
    width: 40%;
}
.face th:nth-child(2) {
    width: 60%;
}
.casino_table_item_box_title {
    font-size: 14px;
    color:var(--white);
    font-weight: bold;
    position: relative;
}
.casino_table_item_box_title::after {
    content:'';
    width: 2px;
    background: white;
    height:80%;
    top:10%;
    right:0;
    position: absolute;
}
.casino_table_item_box_value  {
    font-size: 20px;
    color: var(--gold);
    font-weight: bold;
}
.casino_table_item_rating_wrapper {
    display: flex;
    position: relative;
    padding: 10px;
    background: linear-gradient(#616161 0%, #333 10%, #222);
    transition: 0.5s;
    align-items: center;
}
.casino_table_item_rating_wrapper:before {
    content: '';
    position: absolute;
    top:0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.1);
    z-index: 10;
}
.item_rating {
    width: 75%;
}
.item_rating_value {
    width: 25%;
    font-family: var(--font);
    color:var(--white);
    display: flex;
    line-height: 20px;
    justify-content: flex-end;
}
.item_rating_wrapper {
    height: 20px;
    border-radius: 10px;
    background: #151515;
    box-shadow: inset 0 0 10px #000;
    overflow: hidden;
    position: relative;
}
.item_progress {
    position:absolute;
    top:0;
    left:0;
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(45deg, #ffee54, #ff00ca);
    box-shadow: inset 0 0 2px #000;
    animation: animate 2s ease-in-out forwards;
}
@keyframes animate {
    from {
        width: 0;
    }
}

.cta_btn {
    position: relative;
    width: 110px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-family: var(--font);
    color: var(--white);
    background: var(--light-black);
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
}
.casino_footer {
    padding: 15px 15px;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    background: transparent;
}
@media (min-width: 320px) and (max-width: 767px) {
    .casino_table_container {
        overflow: hidden;
    }
    .casino_table_item {
        width: 100%;
        margin-left: 20px;
    }
    .casino_table_item:nth-child(3n+1) {
    justify-content: center;
    }
    .casino_table_item:nth-child(3n+3) {
        justify-content: center;
    }
}
</style>