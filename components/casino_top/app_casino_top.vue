<template>
  <section class="casino_top">
      <div class="container">
          <div class="casino_top_wrapper">
             <div class="casino_top_thumbnail">
                 <img :src="value.thumbnail" :alt="value.title">
                 <p class="casino_top_subttl">{{value.title}}</p>
                 <div class="casino_top_rating_wrapper">
                    <div class="casino_top_rating">
                        <div class="casino_top_rating_wrapper">
                            <div class="casino_top_progress" :style="`width:${value.rating}%`"></div>
                        </div>
                    </div>
                    <div class="casino_top_rating_value">
                        {{value.rating}}/100
                    </div>
                 </div>
             </div>
             <div class="casino_top_characters">
                <table class="casino_top_table">
                    <caption class="casino_top_table_caption">{{characteristicsGamingHall}}</caption>
                        <thead class="casino_top_table_thead">
                            <tr>
                                <th scope="col">{{meaning}}</th>
                                <th scope="col">{{description}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{yearFoundation}}</td>
                                <td>{{value.year}}</td>
                            </tr>
                            <tr>
                                <td>{{minDeposit}}</td>
                                <td>{{value.min_deposit}}</td>
                            </tr>
                            <tr>
                                <td>{{minPay}}</td>
                                <td>{{value.min_payments}}</td>
                            </tr>
                            <tr>
                                <td>{{withdrawalPeriod}}</td>
                                <td>{{value.withdrawal}}</td>
                            </tr>
                            <tr>
                                <td>{{numberGames}}</td>
                                <td>{{value.number_games}}</td>
                            </tr>
                        </tbody>
                </table>
             </div>
             <div class="casino_top_characters">
                <table class="casino_top_table">
                    <caption class="casino_top_table_caption">{{supportAndFeedback}}</caption>
                        <thead class="casino_top_table_thead">
                            <tr>
                                <th scope="col">{{meaning}}</th>
                                <th scope="col">{{description}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{phone}}</td>
                                <td>{{value.phone}}</td>
                            </tr>
                            <tr>
                                <td>{{email}}</td>
                                <td>{{value.email}}</td>
                            </tr>
                            <tr>
                                <td>{{chat}}</td>
                                <td>{{value.chat}}</td>
                            </tr>
                            <tr>
                                <td>{{site}}</td>
                                <td>{{value.site}}</td>
                            </tr>
                            <tr>
                                <td>{{license}}</td>
                                <td>{{value.license.join(',')}}</td>
                            </tr>
                        </tbody>
                </table>
             </div>
             <div class="casino_top_bonuses">
                <div class="casino_top_bonuses_item shadow">
                    <div class="casino_top_bonus_ttl">{{welcomBonus}}</div>
                    <div class="casino_top_bonus_value">{{value.welcome_bonus}}</div>
                </div>
                <div class="casino_top_bonuses_item shadow">
                    <div class="casino_top_bonus_ttl">{{freespins}}</div>
                    <div class="casino_top_bonus_value">{{value.freespins}}</div>
                </div>
                <div class="casino_top_bonuses_item shadow">
                    <button type="button" class="casino_top_bonuses_btn" @click="refActivate(value)">{{getBonus}}</button>
                </div>
             </div>
          </div>
      </div>
  </section>
</template>

<script>
import config from '~/config'
import TRANSLATE from '~/helpers/translate'
import Helper from '~/helpers'
    export default {
        name: "app_casino_top",
        props: ['value'],
        data(){
            return {
                characteristicsGamingHall: TRANSLATE.CHARACTERISTICS_GAMING_HALL[config.LANG],
                supportAndFeedback: TRANSLATE.SUPPORT_AND_FEEDBACK[config.LANG],
                meaning: TRANSLATE.MEANING[config.LANG],
                description: TRANSLATE.DESCRIPTION[config.LANG],
                yearFoundation: TRANSLATE.YEAR_FOUNDATION[config.LANG],
                minDeposit: TRANSLATE.MIN_DEPOSIT[config.LANG],
                minPay: TRANSLATE.MIN_PAY[config.LANG],
                withdrawalPeriod: TRANSLATE.WITHDRAWAL_PERIOD[config.LANG],
                numberGames: TRANSLATE.NUMBER_GAMES[config.LANG],
                welcomBonus: TRANSLATE.WELCOME_BONUS[config.LANG],
                freespins: TRANSLATE.FREESPINS[config.LANG],
                getBonus: TRANSLATE.GET_BONUS[config.LANG],
                phone: TRANSLATE.PHONE[config.LANG],
                email: TRANSLATE.EMAIL[config.LANG],
                chat: TRANSLATE.CHAT[config.LANG],
                site: TRANSLATE.SITE[config.LANG],
                license: TRANSLATE.LICENSE[config.LANG]
            }
        },
         methods: {
            refActivate(item) {
                Helper.refActivate(item)
            }
        },
    }
</script>
<style> 
    .casino_top {
        padding: 30px 0px;
        background: var(--strong-blue);
    }
    .casino_top_wrapper {
        display: flex;
    }
    .casino_top_thumbnail {
        width: 20%;
    }
    .casino_top_thumbnail img {
        width: 100%;
        border-radius: 4px;
    }
    .casino_top_subttl {
        text-align: center;
        margin-top: 3px;
        margin-bottom: 10px;
        font-family: var(--font);
        color: var(--gold);
        font-size: 20px;
    }
    .casino_top_characters {
        width: 30%;
        padding: 0px 15px;
        box-sizing: border-box;
    }
    .casino_top_bonuses {
        width: 20%;
        z-index: 1;
    }
    .casino_top_table_caption {
        font-family: var(--font);
        color: var(--gold);
        width: 100%;
        display: block;
        border-bottom: 1px solid var(--orange);
        padding: 3px;
        box-sizing: border-box;
    }
    .casino_top_table_thead {
        display: none;
    }
    .casino_top_table {
        width: 100%;
         border-radius: 4px;
         border:1px solid var(--orange);
    }
    .casino_top_table tr {
        width: 100%;
        display: flex;
    }
    .casino_top_table td:first-child {
       width: 40%;
       border:1px solid var(--orange);
    }
    .casino_top_table td:last-child {
       width: 60%;
       border:1px solid var(--orange);
    }
    .casino_top_table td {
        padding: 6px 5px;
        font-size: 16px;
    }
    .casino_top_table tbody {
        display: block;
        width: 100%;
    }
    .casino_top_bonus_ttl {
        text-align: center;
        font-family: var(--font);
        color: var(--gold);
        font-size: 20px;
    }
    .casino_top_bonus_value {
        text-align: center;
        font-family: var(--font);
        color: var(--orange);
        font-size: 20px;
        margin-top: 5px;
    }
    .casino_top_bonuses_item {
        padding: 5px;
        margin-bottom: 25px;
    }
    .casino_top_bonuses_btn {
        width: 100%;
        height: 50px;
        background: transparent;
        border: none;
        font-family: var(--font);
        color: var(--gold);
        font-size: 20px;
        cursor: pointer;
    }
    .casino_top_rating_wrapper {
        display: flex;
        position: relative;
        padding: 10px;
        background: linear-gradient(#616161 0%, #333 10%, #222);
        transition: 0.5s;
        align-items: center;
    }
    .casino_top_rating_wrapper:before {
        content: '';
        position: absolute;
        top:0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,.1);
        z-index: 10;
    }
    .casino_top_rating {
    width: 75%;
}
.casino_top_rating_value {
    width: 25%;
    font-family: var(--font);
    color:var(--white);
    display: flex;
    line-height: 20px;
    justify-content: flex-end;
}
.casino_top_rating_wrapper {
    border-radius: 10px;
    background: #151515;
    box-shadow: inset 0 0 10px #000;
    overflow: hidden;
    position: relative;
}
.casino_top_progress {
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
    .casino_top_wrapper {
        flex-wrap: wrap;
    }
    .casino_top_thumbnail {
        width: 100%;
        margin-bottom: 20px;
    }
    .casino_top_characters {
        width: 100%;
        margin-bottom: 20px;
        padding: 0px;
    }
    .casino_top_bonuses {
         width: 100%;
    }
    .casino_top_bonuses_item:last-child {
        margin-bottom: 0px;
    }
}
</style>