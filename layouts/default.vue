<template>
  <div>
    <Header />
    <nuxt />
   <!-- <Footer /> -->
  </div>
</template>

<script>
    import Header from '../components/header/app-header'
    import Footer from '../components/footer/app-footer'
    export default {
        name: "app-main",
        components: {Header, Footer},
    }
</script>
<style>
  :root {
    --white: rgb(255, 255, 255);
    --white-opacity: rgba(255, 255, 255, 0.9);
    --white-opacity-max: rgba(255, 255, 255, 0.1);
    --gray: #D6DEEA;
    --middle-gray: #EFF3F7;
    --black: #000;
    --middle-black: #202032;
    --light-black: #2B2B42;
    --blue: #005C98;
    --blue-opacity: rgba(43, 43, 66, 0.9);
    --blue-middle-opacity: rgba(23, 23, 42, 0.74);
    --light-blue: #A5B5CC;
    --strong-blue: #17172A;
    --middle-blue: #24284F;
    --green: #0FBD55;
    --red: #F74135;
    --gold: #FFD600;
    --fiolet: #5D5DE9;
    --orange: #ff3c00;
    --light-orange: #ff7300af;
    --white-gradient: linear-gradient(0deg, #F9FCFF, #F9FCFF), #FFFFFF;
    --blue-gradient: linear-gradient(270deg, #F9FCFF 0%, #F2F9FF 100%);
    --middle-blue-gradient: linear-gradient(0deg, #E7F0FB, #E7F0FB), #FFFFFF;
    --strong-blue-gradient: linear-gradient(0deg, #E7F0FB, #E7F0FB), linear-gradient(0deg, #F9FCFF, #F9FCFF), #C4C4C4;
    --orange-gradient: linear-gradient(#ff3c00, #ff7300af);
    --font: 'Podkova';
    --font-semi: 'Open Sans Semi';
    --banner: url('/img/main_bg.webp');
    --mob_banner: url('/img/bg-mob.webp');
    --star_full: url('/img/stars_rate_1.png');
    --star_empty: url('/img/stars_rate_2.png');
    --faq_close: url('/img/faq_close.png');
  }
  *{
    margin: 0px;
    padding: 0px;
  }
  body {
    background: var(--white);
    padding-top: 80px;
  }
   input, textarea, button {
       outline:none;
    }
  .container {
    width: 1270px;
    margin: 0 auto;
    max-width: 90%;
  }
  img {
    max-width: 100%;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--orange-gradient);
    border-radius: 6px;
  }
  .color-gold {
    color: var(--gold) !important;
  }
  .bg-opacity-white{
    background: rgba(255, 255, 255, 0.08)!important;
  }
  .bg-strong-blue {
    background: var(--strong-blue)!important;
  }
  .bg-strong-black {
    background: #21213A!important;
  }
  .border-none {
    border: none!important;
  }
  .full-width {
    width: 100%;
  }
/* Content */
  .content {
    padding-top: 30px;
    padding-bottom: 30px;
    color: var(--light-blue);
    overflow: hidden;
  }
  .content h2, .content h3 {
      margin: 20px 0px;
  }
  .content ul, .content ol {
      margin-left: 30px;
      margin-bottom: 20px;
      margin-top: 20px;
      font-family: var(--font);
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
  }
  .content ul li, .content ol li {
      margin-bottom: 10px;
      line-height: 175%;
      color: var(--gold);
  }
  .content a {
    color: var(--gold);
  }
  .content p {
      margin-bottom: 15px;
      font-family:  var(--font);
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 175%;
      color: var(--light-blue);
  }
  .content img {
      margin-top: 20px;
      margin-bottom: 20px;
      max-width: 100%;
  }
  .content h2, h3, h4, h5, h6 {
      text-align: left;
      font-family:  var(--font);
      font-style: normal;
      font-weight: bold;
      color: var(--white);
  }
  .content blockquote {
      background: var(--middle-blue-gradient);
      padding: 35px 25px;
      border-radius: 15px;
      font-family: var(--font);
      font-style: normal;
      font-weight: normal;
      line-height: 175%;
      font-size: 15px;
      border: 1px solid var(--blue);
      margin-top: 30px;
      margin-bottom: 30px;
  }
  .cms-table {
    width: 100%;
    border-collapse: collapse;
    line-height: 1.25;
    color: #4e4e4e
}
.font-bold {
  font-weight: bold;
}
table tr {
    transition: background-color .27s cubic-bezier(.215, .61, .355, 1) 0s
}

table td {
    color: var(--light-blue);
    padding: 10px 15px;
    border-bottom: 1px solid var(--gold);
    border-left: 1px solid var(--gold);
    font-family: var(--font);
}
table tr:last-child td {
    border-bottom: none;
}
table td:first-child {
    width: 30%;
  border-left: none;
}
table th {
    font-weight: 400;
    text-align: left;
    color:var(--black);
    height: 32px;
    background-color: var(--light-blue);
    font-family: var(--font);
    font-weight: bold;
    padding: 10px 15px;
    text-align: center;
}

table {
    border: 2px solid var(--gold);
    overflow: auto;
  box-sizing: border-box;
  line-height: 1.6;
  box-shadow: 0 2px 14px rgba(4,0,26,.15);
  border-spacing: 0;
  border-radius: 14px;
  display: block;
  width: 100%;
}
.content table ol {
    margin-left: 5px;
}
@media (min-width: 320px) and (max-width: 767px) {
  .content {
    overflow: hidden;
  }
}
/* End content */

  .btn_review {
    width: 210px;
    height: 46px;
    background: transparent;
    border: 1px solid var(--blue);
    box-sizing: border-box;
    box-shadow: inset 0px 0px 4px rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    display: inline-block;
    text-align: center;
    font-family: var(--font);
    font-style: normal;
    font-size: 17px;
    color: var(--white);
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    line-height: 46px;
    cursor: pointer;
  }
  .casino_table_btn_wrapper {
    display: flex;
    justify-content: center;
    padding-top:40px;
    padding-bottom: 30px;
  }


  .shadow {
    position: relative;
    background: linear-gradient(0deg, #000, #262626);
}
.shadow:before, .shadow:after {
    content:'';
    position: absolute;
    top:-2px;
    left:-2px;
    background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background-size: 400%;
    z-index: -2;
    animation: shadow_animate 40s linear infinite;
}
.shadow:after {
    filter: blur(20px);
}
@keyframes shadow_animate {
    0% {
        background-position: 0 0;
    }
    50% {
        background-position: 300% 0;
    }
    100% {
        background-position: 0 0;
    }
}
</style>
