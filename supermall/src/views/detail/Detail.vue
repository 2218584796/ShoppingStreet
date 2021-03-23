<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav"
      @titleClick="titleClick"
      :probe-type="3"
      ref="nav"></detail-nav-bar>
    <scroll class="content" :pullUpLoad="true" ref="scroll" @scroll="contentScroll">
<!--      属性：topImages  传入值：top-images-->
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>

      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="params"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comments"></detail-comment-info>

      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShow"></back-top>

<!--    <toast :message="message" :show="show"></toast>>-->
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailBottomBar from "./childComps/DetailBottomBar";
  import BackTop from "components/content/backTop/BackTop";

  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goods/GoodsList";


  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "network/detail";
  import {debounce} from "common/utils";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import {itemListenerMixin} from "common/mixin";

  import {mapActions} from "vuex"

  // import Toast from "components/common/toast/Toast";

  export default {
      name: "Detail",
      components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar,
        BackTop,
        // Toast
      },
    mixins:[itemListenerMixin],
      data(){
          return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommends:[],
            themeTopYs:[],
            getThemeTopY:null,
            currentIndex:0,
            isShow:false,
            // message:'',
            // show:''
          }
      },
      created() {
        //1.保存传入的iid
        this.iid = this.$route.params.iid
        //2.根据iid请求详情数据
        getDetail(this.iid).then(res => {
          // console.log(res);
          const data = res.result
          //1.获取顶部的图片轮播数据
          this.topImages = data.itemInfo.topImages

          //2.获取商品信息
          this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

          //3.创建店铺信息的对象
          this.shop = new Shop(data.shopInfo)

          //4.保存商品的详情数据
          this.detailInfo = data.detailInfo

          //5.获取参数信息
          this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

          //6.获取评论信息
          if (data.rate.cRate !== 0){
            this.commentInfo = data.rate.list[0]
          }

          // this.$nextTick(()=>{
          //   //根据最新的数据，对应的DOM已经被渲染出来
          //   //但是图片依然没有加载完（目前获取的offsettop不包含图片）
          //   //offsetTop值不对的时候都是因为图片
          //   this.themeTopYs = []
          //   this.themeTopYs.push(0)
          //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          //   this.themeTopYs.push(this.$refs.comments.$el.offsetTop)
          //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
          // })
        })

        //3.请求推荐数据
        getRecommend().then(res => {
          this.recommends = res.data.list
        })

        //4.给getThemeTopY赋值(对给this.getThemeTopY赋值的操作进行防抖)
        this.getThemeTopY = debounce(()=>{
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comments.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
          this.themeTopYs.push(Number.MAX_VALUE)
          console.log(this.themeTopYs);
        },100)
      },
    methods:{
        ...mapActions(['addCart']),
      imageLoad(){
        this.refresh()
        this.getThemeTopY()
      },
      titleClick(index){
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],1000)
      },
      contentScroll(position){
        //1.获取y值
        const positionY = -position.y

        //2.positionY和主题中的值进行对比
        //[0, 19946, 20588, 20857]
        //positionY 在0 和 19946之间  index 的值为0
        //positionY 在19946 和 20588之间  index 的值为1
        //positionY 在20588 和 20857之间  index 的值为2
        //positionY 在20857和 -之间  index 的值为3
        let length = this.themeTopYs.length
        for (let i = 0;i < length-1;i++){

          if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex
          }
          // if (this.currentIndex !== i && ((i < length-1 && positionY >= this.themeTopYs[i] && positionY <
          //   this.themeTopYs[i+1]) || (i === length-1 && positionY >= this.themeTopYs[i]))){
          //   this.currentIndex = i;
          //   // console.log(this.currentIndex);
          //   this.$refs.nav.currentIndex = this.currentIndex
          // }
        }

        //3.是否显示回到顶部
        //判断backtop的显示和隐藏
        this.isShow = (-position.y) > 4000
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0,300)
      },
      addToCart(){
        //1.获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid


        //2.将商品添加到购物车(1.Promise  2.mapActions)
        // this.$store.commit('addCart',product)

        this.addCart(product).then(res => {
          // this.show = true
          // this.message = res
          //
          // setTimeout(() => {
          //   this.show = false
          //   this.message = ''
          // },1500)
          this.$toast.show(res,1500)
        })
        // this.$store.dispatch('addCart',product).then(res => {
        //   console.log(res);
        // })

        //3.添加到购物车成功

      }
    },
    mounted() {

    },
    updated() {

    },
    destroyed() {
      this.$bus.$off('itemImageLoad',this.itemImgListener)
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content{
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>
