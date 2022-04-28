<template>
  <footer v-if="changeSettings !== null">
    <nav class="footer_menu">
      <div class="container">
        <ul>
          <li class="footer_menu_item" 
              v-for="(item, index) in menu" 
                    :key="index">
                      <NuxtLink no-prefetch :to="item.value_2" >
                          {{item.value_1}}
                      </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
    <!--
    <div class="footer_partners">
      <div class="container footer_partners_wrapper">
        <div class="footer_partners_left">
           <a href="//www.dmca.com/Protection/Status.aspx?ID=0254cf77-c76d-4013-b771-c48ab480360e" 
                title="DMCA.com Protection Status" class="dmca-badge"> 
                <img src="https://media.onlinecasino.kyiv.ua/wp-content/uploads/2021/04/dmca_40px.png?ID=0254cf77-c76d-4013-b771-c48ab480360e"  
                alt="DMCA.com Protection Status" 
                loading="lazy" />
          </a>
          <a v-for="(item, index) in options.partners" 
             :key="index" 
             :href="item.partners_link" 
             target="_blank"
             class='partners_link'
             >
            <img loading="lazy"
                 :src='item.partners_img'            
             />
          </a>
        </div>
      </div>
    </div>
    -->
    <div class="container footer_container">
      <div class="footer_text">
        {{text}}
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "app-footer",
        data(){
            return {
               settings: null,
               footerMenu: [],
               footerText: ''
            }
        },
        computed: {
          changeSettings(){
            this.settings = this.$store.getters['settings/getSettings']
            return this.settings
          },
          menu(){
            const settings = this.$store.getters['settings/getSettings']
            if(settings) {
                const menu = settings.filter(item => item.key_id === 'footer_menu')
                this.footerMenu = menu.length ? menu[0].value : []
            }
            return this.footerMenu
          },
          text(){
            const settings = this.$store.getters['settings/getSettings']
            if(settings) {
                const text = settings.filter(item => item.key_id === 'footer_text')
                this.footerText = text.length ? text[0].value : []
            }
            return this.footerText
          }
        }
    }
</script>

<style>
.footer_menu {
  padding-top: 10px;
  padding-bottom: 10px;
}
.footer_menu_item {
  display: inline-block;
  padding: 10px;
}
.footer_menu_item a {
  color: var(--white);
  text-transform: uppercase;
  text-decoration: none;
  font-family: var(--font);
}
    footer {
      padding-bottom: 25px;
      color: var(--white);
      background: var(--strong-blue);
    }
    .footer_text {
      font-family: var(--font);
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      color: var(--white);
    }
    .footer_container {
      padding-top: 25px;
      position: relative;
    }
    .security_logo {
      position: absolute;
      top:25px;
      right: 10px;
    }
    .footer_partners {
      padding-bottom: 15px;
      padding-top: 15px;
      background: var(--middle-blue);
    }
    .footer_partners_wrapper {
      display: flex;
      justify-content: space-between;
    }
    .partners_link {
      height: 40px;
      display: inline-block;
      margin-left: 15px;
      margin-right: 15px;
    } 
    .partners_link:nth-child(1) {
      margin-left: 0px;
    }
    .partners_link img {
      max-height: 100%;
    }

    @media (min-width: 320px) and (max-width: 767px) {
      .security_logo {
        margin-top: 10px;
        position: static;
      }
      .footer_partners_wrapper {
        flex-wrap: wrap;
      }
      .partners_link {
        margin-top: 5px;
        margin-bottom: 5px;
      }
      .footer_text {
        text-align: center;
      }
    }
</style>