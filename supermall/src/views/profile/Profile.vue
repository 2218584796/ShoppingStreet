<template>
  <div class="profile">
    <div class="profile-top">
      <div class="mine">我的档案</div>

      <div class="myself">
        <div class="photo"><img src="~assets/img/home/my.svg" alt="" ></div>
        <div class="enter">
          <div class="enterClick">登录/注册</div>
          <div class="bind"><img src="~assets/img/home/iphone (1).svg" alt="">
          <span>暂无绑定手机号</span>
          </div>
          <div class="right"><img src="~assets/img/home/right (1).svg" alt=""></div>
        </div>
      </div>

    </div>

    <div class="property">
      <div class="undvas">
        <div>
          <span class="hots">0.00</span>
          <span>元</span>
        </div>
        <div>我的余额</div>
      </div>
      <div class="preperential">
        <div>
          <span class="hots">0</span>
          <span>个</span>
        </div>
        <div>我的优惠</div>
      </div>
      <div class="mark">
        <div>
          <span class="hots">0</span>
          <span>分</span>
        </div>
        <div>我的积分</div>
      </div>
    </div>

    <div class="function">
      <div class="mynews"><img src="~assets/img/home/news.svg" alt="">我的消息</div>
      <div class="mynews"><img src="~assets/img/home/cums.svg" alt="">积分商城</div>
      <div class="mynews one"><img src="~assets/img/home/vip.svg" alt="">会员卡</div>
      <div class="mynews"><img src="~assets/img/home/cart.svg" alt="">我的购物车</div>
      <div class="mynews"><img src="~assets/img/home/shopping.svg" alt="">下载购物APP</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile"
}
</script>

<style scoped>
  .profile-top{
    height:150px;
    background-color: #ff8198;
  }
  .mine{
    padding-top: 10px;
    text-align: center;
    color: #ffffff;
    font-size: 18px;
  }

  .myself{
    height: 69px;
    display: flex;
    margin-top: 40px;
  }
  .photo{
    width: 65px;
    height: 65px;
    background-color: #F5F5F5;
    border-radius: 50%;
    margin-left:15px;
  }
  .photo img{
    width: 54px;
    height:54px;
    margin-left: 6px;
    margin-top: 6px;
  }
  .enter{
    flex: 1;
    margin-left: 20px;
    padding-top: 10px;
  }
  .enterClick{
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 5px;
  }
  .bind img{
    width: 20px;
    vertical-align: middle;
  }
  .bind span{
    color: #ffffff;
    font-size: 14px;
  }
  .right{
    width: 50px;
    margin-top: -35px;
  }
  .right img{
    width: 20px;
  }

  .property{
    display: flex;
    height:70px;
    line-height: 25px;
    /*background-color:#F5F5F5;*/
    text-align: center;
    align-items:center;
    /*justify-content:center;*/
    margin:15px 0 20px 0;
    border-bottom: 20px solid #F5F5F5;
  }
  .undvas{
    flex: 1;
  }
  .preperential{
    flex: 1;
  }
  .mark{
    flex: 1;
  }
  .hots{
    color: #FF6A6A;
    font-size: 24px;
  }
  .function{
  }
  .mynews{
    /*height: 40px;*/
    margin:10px 0 10px 0;
  }
  .function img{
    width: 24px;
    font-size: 24px;
    vertical-align: middle;
    margin:0 15px 4px 10px;
  }
  .one{
    border-bottom: 25px solid 	#F5F5F5;
    border-bottom: 25px solid 	#F5F5F5;
  }
</style>
