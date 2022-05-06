<template>
  <section class="game_table_wrapper">
      <div class="container game_table_container">
          <h2 class="game_table_title" v-if="title!==''">{{title}}</h2>
          <div class="content" v-html="text"></div>
          <div class="game_table_row">
              <article class="card" v-for="(item, index) in posts" :key="index">
                 <div class="imgBx">
                    <figure class="imgBx_wrapper">
                        <img :src='item.thumbnail' />
                    </figure>
                    <div class="game_table_item_rating_wrapper">
                        <div class="item_rating">
                            <div class="item_rating_wrapper">
                                <div class="item_progress" :style="`width:${item.rating}%`"></div>
                            </div>
                        </div>
                        <div class="item_rating_value">{{item.rating}}/100</div>
                    </div>
                 </div>
                 <div class="card_content">
                    <a href="#" class="card_title">{{review}} {{item.title}}</a>
                    <table>
                        <caption>{{characteristics}} {{item.title}}</caption>
                            <thead>
                                <tr>
                                    <th scope="col">{{meaning}}</th>
                                    <th scope="col">{{description}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                      <td>{{vendor}}</td>
                                      <td>{{item.vendor}}</td>
                                </tr>
                                <tr>
                                      <td>{{min_rate}}</td>
                                      <td>{{item.min_rate}}</td>
                                </tr>
                                <tr>
                                      <td>{{rtp}}</td>
                                      <td>{{item.rtp}}</td>
                                </tr>
                                <tr>
                                      <td>{{volatility}}</td>
                                      <td>{{item.volatility}}</td>
                                </tr>
                            </tbody>
                    </table>
                    <footer class="game_table_footer">
                        <NuxtLink :to="item.permalink" class="card-permalink shadow">{{more}}</NuxtLink>
                    </footer>
                 </div>
              </article>
          </div>
      </div>
  </section>
</template>

<script>
import config from '~/config'
import TRANSLATE from '~/helpers/translate'
    export default {
        name: "app_game_loop",
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
        data(){
            return {
                review: TRANSLATE.REVIEW[config.LANG],
                characteristics: TRANSLATE.CHARACTERISTICS[config.LANG],
                meaning: TRANSLATE.MEANING[config.LANG],
                description: TRANSLATE.DESCRIPTION[config.LANG],
                vendor: TRANSLATE.VENDOR[config.LANG],
                min_rate: TRANSLATE.MIN_RATE[config.LANG],
                rtp: TRANSLATE.RTP[config.LANG],
                volatility: TRANSLATE.VOLATILITY[config.LANG],
                more: TRANSLATE.MORE[config.LANG]
            }
        },
        
    }
</script>

<style scoped>
    .game_table_wrapper {
        padding-top: 30px;
        padding-bottom: 30px;
        background: var(--middle-black);
        color: var(--light);
    }
    .game_table_title {
        font-family: var(--font);
        color: var(--white);
        font-size: 28px;
        margin-bottom: 10px;
    }
    .game_table_row {
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 20px;
    }
    .game_table_row .card {
        position: relative;
        height: 250px;
        background: var(--black);
        width: 30%;
        margin: 15px 0;
        border-radius: 6px;
    }
    .game_table_row .imgBx {
        position: absolute;
        top:0px;
        left:0px;
        width: 100%;
        height: 100%;
        background: #333;
        z-index: 3;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        overflow: hidden;
        transition: 0.5s ease-in-out;
    }
    .imgBx_wrapper {
        width: 100%;
        max-height: 205px;
    }
    .imgBx img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
    @media (min-width: 767px) {
        .game_table_row .card:hover .imgBx {
                width: 180px;
                height: 105px;
                left:-75px;
                top: calc(50% - 60px);
                transition: 0.5s ease-in-out;
            }
    }
    .card_content {
        border-radius: 5px;
        padding-left: 115px;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-right: 15px;
        height: 100%;
        box-sizing: border-box;
        z-index: 1;
        position: relative;
        overflow: hidden;
    }
    .card_title {
        font-family: var(--font);
        font-size: 20px;
        color:var(--white);
        font-weight: bold;
        position: relative;
        text-decoration: none;
        margin-bottom: 10px;
        display: inline-block;
    }
    .card_content caption {
    font-family: var(--font);
    white-space: nowrap;
    text-align: center;
    border-bottom: 1px solid var(--gold);
    display: none;
    }
    .card_content td {
        font-size: 14px;
        padding: 5px;
        border-bottom: 1px solid var(--gold);
        border-left: 1px solid var(--gold);
    }
    .card_content tr:last-child td {
        border-bottom: none;
    }
    .card_content td:nth-child(1) {
        width: 50%;
        border-left: none;
    }
    .card_content td:nth-child(2) {
        width: 50%;
        text-align: right;
    }
    .card_content table {
        border-radius: 2px;
        border: 2px solid var(--gold);
    }
    .card_content thead {
        width: 100%;
        font-size: 12px;
        display: block;
        box-sizing: border-box;
    }
    .card_content tbody {
        display: block;
    }
    .card_content tr {
        display: flex;
    }
    .card_content th {
        background: transparent;
        height: auto;
        font-family: var(--font);
        color: var(--light-blue);
        text-transform: uppercase;
        padding: 5px;
        font-size: 12px;
        border-bottom: 1px solid var(--gold);
        display: none;
    }
    .card_content th:nth-child(1) {
        border-right: 1px solid var(--gold);
        width: 40%;
    }
    .card_content th:nth-child(2) {
        width: 60%;
    }
    .card-permalink {
        position: relative;
        width: 100%;
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
        margin-top: 10px;
    }
    .game_table_footer {
        padding-bottom: 0px;
        background: transparent;
    }
    .game_table_item_rating_wrapper {
        display: flex;
        position: relative;
        padding: 10px;
        background: linear-gradient(#616161 0%, #333 10%, #222);
        transition: 0.5s;
        align-items: center;
        width: 100%;
    }
    .game_table_item_rating_wrapper:before {
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
    @media (min-width: 320px) and (max-width: 767px) {
        .game_table_row .card {
            width: 100%;
            height: auto;
        }
        .game_table_row .imgBx {
            position: relative;
            height: auto;
        }
        .card_content {
            padding-left: 15px;
        }
        .card_title {
            display: block;
            text-align: center;
        }
    }
</style>