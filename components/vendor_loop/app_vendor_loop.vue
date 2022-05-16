<template>
    <section :class="'vendor-loop '+bg">
        <div class="container">
            <div class="row vendor-row">
                <article class="flip" v-for="(item, index) in posts" :key="index">
                    <figure class="front">
                        <img :src="item.thumbnail" 
                                 width="224" height="140" class="front-img">
                    </figure>
                    <div class="back">
                        <NuxtLink :to="item.permalink" class="ttl">{{item.title}}</NuxtLink>
                        <p class="short_desc" v-html="item.short_desc.substr(0, 80)"></p>
                    </div>
                </article>
           </div>
        </div>
    </section>
</template>

<script>
	export default {
		name: "app-vendor-loop",
		props: {
			posts: {
				type: Array,
				default: []
			},
			title: {
				type: String,
				default: undefined
			},
            bg: {
        		type: String,
                default: ''
            }
		},
		data(){
			return {
				numberPostOnQuery: 24,
				postCurrentPage: 1,
			}
		}
	}
</script>

<style lang="scss" scoped>
    .vendor-loop {
        padding-top: 30px;
        padding-bottom: 30px;
         background: var(--middle-blue-gradient);
    }
    .vendor-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .flip {
        position: relative;
    >.front,
    >.back {
        display: block;
        transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);
        transition-duration: .5s;
        transition-property: transform, opacity;
    }
    >.front {
        transform: rotateY(0deg);
    }
    >.back {
        position: absolute;
        opacity: 0;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transform: rotateY(-180deg);
    }
    &:hover {
        >.front {
            transform: rotateY(180deg);
        }
        >.back {
            opacity: 1;
            transform: rotateY(0deg);
        }
    }
}

// custom
.flip {
    position: relative;
    display: inline-block;
    margin-right: 2px;
    margin-bottom: 1em;
    width: 300px;
    >.front,
    >.back {
      display: block;
      color: white;
      width: inherit;
      background-size: cover!important;
      background-position: center!important;
      height: 150px;
      box-sizing: border-box;
      background: #313131;
      border-radius: 10px;
      p {
        font-size: 14px;
        line-height: 160%;
        color: var(--white);
        font-family: var(--font);
        font-style: italic;
      }
    }
    >.front {
        width: 300px;
    }
    >.back{
        padding: 20px;
        >.ttl{
         font-family: var(--font);
         font-size:20px;
         color: var(--white);
         margin-bottom: 15px;
         display:inline-block;
         text-decoration: none;
        }
    }
}
.front-img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
    @media (min-width: 320px) and (max-width: 767px) {
        .vendor-row {
            justify-content: center;
        }
    }
</style>