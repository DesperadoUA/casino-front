<template>
  <section class="casino_characters" v-if="posts.length">
      <div class="container">
          <div class="casino_characters_wrapper">
             <div class="casino_characters_ttl">{{title}}</div>
             <div class="casino_characters_content">
                <ul class="casino_characters_list">
                    <li  v-for="(item, index) in posts" :key="index">
                        {{item}}
                    </li>
                </ul>
             </div>
          </div>
      </div>
  </section>
</template>

<script>
    export default {
        name: "app_casino_characters",
        props: {
            posts: {
        		type: Array,
                default: []
            },
            title: {
                type: String,
                default: ''
            }
        },
        data(){
            return {
            }
        }
    }
</script>
<style> 
    .casino_characters {
        padding: 30px 0px;
        background-color: var(--strong-blue);
    }
    .casino_characters_ttl {
        font-family: var(--font);
        color: var(--white);
        font-size: 20px;
        margin-bottom: 20px;
    }
    .casino_characters_list li {
        text-decoration: none;
        display: inline-block;
        margin: 10px 10px;
        white-space: nowrap;
        position: relative;
        font-family: var(--font);
        color: var(--white);
        font-size: 20px;
        padding: 10px 15px;
    }
    .casino_characters_list li:before {
       content: '';
       position: absolute;
       top:0px;
       left: 0px;
       width: 100%;
       height: 100%;
       border-top:2px solid var(--orange);
       border-left:2px solid var(--orange);
       transform-origin: left;
       transition: 0.5s;
       box-sizing: border-box;
       border-radius: 4px;
    }
    .casino_characters_list li:hover:before {
        width: 20px;
        height: 20px;
    }
    .casino_characters_list li:after {
       content: '';
       position: absolute;
       bottom:0px;
       right: 0px;
       width: 100%;
       height: 100%;
       border-bottom:2px solid var(--orange);
       border-right:2px solid var(--orange);
       transform-origin: left;
       transition: 0.5s;
       box-sizing: border-box;
       border-radius: 4px;
    }
    .casino_characters_list li:hover:after {
        width: 20px;
        height: 20px;
    }
    
</style>