<template>
    <section class="vendor-loop">
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

.text-shadow {
text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04), 3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04), 0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04), 7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04), 9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04), 11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04), 13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04), 0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04), 17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04), 19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);
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