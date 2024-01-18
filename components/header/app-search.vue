<template>
   <div class="search-box__container">
        <div class="form-search">
            <input class="form-search__field"
                           type="search"
                           v-model="searchWord"
                           placeholder="Search">
            <button type="submit" class="btn-default form-search__cta" @click="search">
                        <svg class="search__icon" width="19" height="19" viewBox="0 0 345 344.6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M319.3,343.2c-1.6-0.7-21-19.4-43-41.5c-22-22.1-40.3-40.1-40.6-40.1c-0.3,0-4.4,2.5-9,5.6 c-15.4,10.2-32.8,17.5-51.7,21.7c-14.4,3.2-44.3,3.1-59.2-0.1c-28.9-6.3-52.2-19.2-73.6-40.6c-17.7-17.8-27.9-34.4-35.5-57.5 c-5.7-17.3-7.3-30-6.7-50.5c1-29.4,8.1-51.7,24.5-76.5c7.3-11,24.8-29.1,35.9-37C76.2,15.5,97.4,6.2,116.9,2 c12-2.6,44.8-2.7,56.9-0.1c29.9,6.4,53.5,19.1,75.1,40.7c21.4,21.3,34.6,45.9,40.6,75.8c2.7,13.2,2.4,43.3-0.5,56.5 c-4.3,19.3-11.4,36.4-21.6,51.6c-3.1,4.6-5.6,8.6-5.6,9s18.4,19.1,40.9,41.7c44.4,44.5,43.1,42.8,41.8,52.6 C343.1,340.6,329.5,347.8,319.3,343.2L319.3,343.2z M167.2,253c62-11.7,101.5-76.2,84.1-137.2c-11.9-41.6-46.6-72.3-89.2-78.7 c-12.3-1.9-20.2-1.9-32.6,0C105.7,40.7,85.3,51,68.2,68c-52.8,52.6-38.4,142,28.1,175.1C119.4,254.6,141.9,257.8,167.2,253 L167.2,253z"/>
                        </svg>
            </button>
                    <ul class="search-suggest" v-if="posts.length !== 0">
                        <li v-for="(item, index) in posts" :key="index" @click="goToSearch">
                            <NuxtLink :to="item.permalink">{{item.title}}</NuxtLink>
                        </li>
                    </ul>
        </div>
    </div>
</template>
<script>
	import DAL_Builder from '~/DAL/builder'
	export default {
		name: "app-search",
		data(){
			return {
				posts: [],
				searchWord: ''
			}
		},
		computed: {
			showSearch(){
				return this.$store.getters['common/getShowSearch']
			}
		},
		methods: {
			searchActivate(){
				this.$store.dispatch('common/setShowSearch', !this.$store.getters['common/getShowSearch'])
			},
			async search(){
				if(this.searchWord === '') return
				const request = new DAL_Builder()
				const response = await request.url('search')
					.setSearch(true)
					.searchWold(this.searchWord)
					.get()
				if(response.data.confirm !== 'error') {
					this.posts = response.data.body.posts
				}
			},
			goToSearch(){
				this.$store.dispatch('common/setShowSearch', !this.$store.getters['common/getShowSearch'])
				this.posts = []
				this.searchWord = ''
			}
		}
	}
</script>

<style lang="scss">
    .search__cta {
        color: var(--white);
        margin-top: 15px;
    }
    .btn-default {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.1;
        text-align: center;
        position: relative;
        padding: 0;
        background: transparent;
        border: none;
        cursor: pointer;
    }
    .search__icon {
        color: currentColor;
        fill: currentColor;
    }
    @keyframes expand {
        from {
            transform: scale(0);
            opacity: 0;
            background: #5470B0;
        }
    }
    .search-box {
        top: 0;
        left: 0;
        width: 100%;
        position: fixed;
        background-color: var(--blue-middle-opacity);
        backdrop-filter: blur(24px);
        animation: expand .4s ease-in-out;
        z-index: 10;
        @-moz-document url-prefix() {
            background-color: var(--blue-middle-opacity);
        }
    }
    .search-box__container {
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        margin-bottom: 140px;
    }
    .form-search {
        max-width: 430px;
        margin-left: auto;
        margin-right: auto;
        font-family: var(--font);
        width: 100%;
        display: flex;
        border-bottom: 2px solid rgba(#fff, .2);
        padding-bottom: 7px;
        position: relative;
    }
    .form-search__field {
        border: 0;
        background-color: transparent;
        font-family: inherit;
        font-size: 24px;
        font-weight: 600;
        color: #fff;
        height: 43px;
        flex: 0 0 91.163%;
        width: 91.163%;
        outline: none;
        &::placeholder {
            color: #fff;
            opacity: 1;
        }
    }
    .form-search__cta {
        flex-shrink: 0;
        flex-basis: 8.837%;
        width: 8.837%;
        color: #fff;
        @media (min-width: 992px) {
            &:hover {
                color: rgba(#fff, .5);
            }
        }
    }
    .form-search__close.form-search__close {
        position: absolute;
        top: 12.144vh;
        right: 0;
        fill: rgba(#fff, .5);
        @media (min-width: 992px) {
            &:hover {
                fill: #fff;
            }
        }
    }
    .search-suggest {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        margin: 0;
        padding: 21px 0 0;
        list-style: none;
        color: #fff;
        font-size: 14px;
        line-height: 1.286;
        font-weight: 600;
        max-height: 210px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        li {
            transition: var(--transition-default);
            margin-bottom: 2px;
            background-color: rgba(#fff, .1);
            border-radius: 8px;
            padding: 9px 30px 9px 12px;
            position: relative;
            @media (min-width: 992px) {
                &:hover {
                    background-color: rgba(#000, .1);
                    &:after {
                        opacity: 1;
                    }
                }
            }
            &:after {
                transition: var(--transition-default);
                content: '';
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
                background: url(/img/arrow.svg) no-repeat;
                opacity: .5;
                width: 8px;
                height: 14px;
            }
        }
        a {
            color: currentColor;
            display: block;
            text-decoration: none;
        }
    }
    @media (min-width: 320px) and (max-width: 767px) {
        .search-box__container {
            padding: 15px;
            box-sizing: border-box;
            align-items: flex-start;
            padding-top: 100px;
            margin-bottom: 20px;
            padding-top: 100px;
        }
        .form-search__close.form-search__close {
            top:20px;
            right: 20px;
        }
        .search__cta {
            display: none;
        }
    }
    @media (min-width: 768px) and (max-width: 1200px) {
        .search-box__container {
            padding: 15px;
            box-sizing: border-box;
            align-items: flex-start;
            padding-top: 100px;
        }
        .form-search__close.form-search__close {
            top:20px;
            right: 20px;
        }
        .search__cta {
            display: none;
        }
    }
</style>