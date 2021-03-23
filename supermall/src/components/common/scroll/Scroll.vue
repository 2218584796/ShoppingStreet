<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  // import PullDown from "@better-scroll/pull-down"
  // import PullUp from "@better-scroll/pull-up"

  // BScroll.use(PullUp)
  // BScroll.use(PullDown)
    export default {
        name: "Scroll",
      props:{
          probeType:{
            type:Number,
            default:0
          },
        pullUpLoad:{
          type: Boolean,
          default: false
        }
      },
      data(){
          return {
            scroll:null
          }
      },
      mounted() {
          //创建BScroll对象
          this.scroll = new BScroll(this.$refs.wrapper,{
            observeDOM:true,
            click:true,
            probeType: this.probeType,
            pullUpLoad:this.pullUpLoad
          })
        //监听滚动的位置
        this.scroll.on('scroll',(position)=>{
          this.$emit('scroll',position)
        })
        //监听上拉
        this.scroll.on('pullingUp',() => {
          this.$emit('pullingUp')
          // this.scroll.finishPullUp()
        })
      },
      methods:{
          scrollTo(x,y,time = 900){
            this.scroll && this.scroll.scrollTo(x,y,time)
          },
        finishPullUp(){
            this.scroll.finishPullUp()
        },
        refresh(){
          // console.log('---------');
          this.scroll && this.scroll.refresh()
        }
      }
    }
</script>

<style scoped>

</style>
