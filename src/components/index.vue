<template>
  <div>
    <div class="site-nav-bg">
      <div class="site-nav w1200">
        <p class="sn-back-home">
          <i class="layui-icon layui-icon-home"></i>
          <router-link to="/">首页</router-link>
        </p>
        <div class="sn-quick-menu">
          <div class="login">
            <router-link to="login">登录</router-link>
          </div>
          <div class="sp-cart">
            <router-link to="shopcart">购物车</router-link>
            <span>2</span>
          </div>
        </div>
      </div>
    </div>

    <div class="header">
      <div class="headerLayout w1200">
        <div class="headerCon">
          <h1 class="mallLogo">
            <router-link to="/" title="母婴商城">
              <img src="static/img/logo.png" />
            </router-link>
          </h1>
          <div class="mallSearch">
            <form action class="layui-form" novalidate>
              <input
                type="text"
                name="title"
                required
                lay-verify="required"
                autocomplete="off"
                class="layui-input"
                placeholder="请输入需要的商品"
              />
              <button class="layui-btn" lay-submit lay-filter="formDemo">
                <i class="layui-icon layui-icon-search"></i>
              </button>
              <input type="hidden" name value />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="main-nav">
        <div class="inner-cont0">
          <div class="inner-cont1 w1200">
            <div class="inner-cont2">
              <a href="commodity.html" class="active">所有商品</a>
              <a href="buytoday.html">今日团购</a>
              <a href="information.html">母婴资讯</a>
              <a href="about.html">关于我们</a>
            </div>
          </div>
        </div>
      </div>

      <div class="category-con">
        <div class="category-inner-con w1200">
          <div class="category-type">
            <h3>全部分类</h3>
          </div>

          <div class="category-tab-content category-content">
            <div class="nav-con">
              <ul class="normal-nav layui-clear" id="js_climit_li">
                <li class="nav-item">
                  <div class="category-info title">
                    <h3 class="category-name b-category-name">
                      <i></i>
                      <a class="ml-22" title="点心">点心/蛋糕</a>
                    </h3>
                  </div>
                  <transition name="fade">
                    <div class="menu-item menu-in top">
                      <div class="area-in">
                        <div class="area-bg">
                          <div class="menu-srot">
                            <div class="sort-side">aa</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                  <b class="arrow"></b>
                </li>

                <li class="nav-item">
                  <div class="category-info title">
                    <h3 class="category-name b-category-name">
                      <i></i>
                      <a class="ml-22" title="点心">点心/蛋糕</a>
                    </h3>
                  </div>
                  <div class="menu-item menu-in top">
                    <div class="area-in">
                      <div class="area-bg">
                        <div class="menu-srot">
                          <div class="sort-side">aa</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <b class="arrow"></b>
                </li>

                <li class="nav-item">
                  <div class="category-info title">
                    <h3 class="category-name b-category-name">
                      <i></i>
                      <a class="ml-22" title="点心">点心/蛋糕</a>
                    </h3>
                  </div>
                  <div class="menu-item menu-in top">
                    <div class="area-in">
                      <div class="area-bg">
                        <div class="menu-srot">
                          <div class="sort-side">aa</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <b class="arrow"></b>
                </li>
              </ul>
            </div>
          </div>

          
        </div>
        <div class="category-banner">
          <div class="w1200">
            <div class="layui-carousel" id="test1">
              <div carousel-item>
                <div>
                  <img src="static/img/banner1.jpg" />
                </div>
                <div>
                  <img src="static/img/us_img3.jpg" />
                </div>
                <div>
                  <img src="static/img/us_img1.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="floors">
        <div class="sk">
          <div class="sk_inner w1200">
            <div class="sk_hd">
              <a href="javascript:;">
                <img src="static/img/s_img1.jpg" />
              </a>
            </div>
            <div class="sk_bd">
              <div class="layui-carousel" id="test1">
                <div carousel-item>
                  <div class="item-box">
                    <div class="item">
                      <a href="javascript:;">
                        <img src="static/img/s_img2.jpg" />
                      </a>
                      <div class="title">宝宝五彩袜棉质舒服</div>
                      <div class="price">
                        <span>￥49.00</span>
                        <del>￥99.00</del>
                      </div>
                    </div>
                    <div class="item">
                      <a href="javascript:;">
                        <img src="static/img/s_img3.jpg" />
                      </a>
                      <div class="title">宝宝五彩袜棉质舒服</div>
                      <div class="price">
                        <span>￥49.00</span>
                        <del>￥99.00</del>
                      </div>
                    </div>
                    <div class="item">
                      <a href="javascript:;">
                        <img src="static/img/s_img4.jpg" />
                      </a>
                      <div class="title">宝宝五彩袜棉质舒服</div>
                      <div class="price">
                        <span>￥49.00</span>
                        <del>￥99.00</del>
                      </div>
                    </div>
                    <div class="item">
                      <a href="javascript:;">
                        <img src="static/img/s_img5.jpg" />
                      </a>
                      <div class="title">宝宝五彩袜棉质舒服</div>
                      <div class="price">
                        <span>￥49.00</span>
                        <del>￥99.00</del>
                      </div>
                    </div>
                  </div>
                  <div class="item-box">
                    <div class="item">
                      <a href="javascript:;">
                        <img src="static/img/s_img2.jpg" />
                      </a>
                      <div class="title">宝宝五彩袜棉质舒服</div>
                      <div class="price">
                        <span>￥49.00</span>
                        <del>￥99.00</del>
                      </div>
                    </div>
                    <div class="item">
                      <a href="javascript:;">
                        <img src="static/img/s_img3.jpg" />
                      </a>
                      <div class="title">宝宝五彩袜棉质舒服</div>
                      <div class="price">
                        <span>￥49.00</span>
                        <del>￥99.00</del>
                      </div>
                    </div>
                    <div class="item">
                      <a href="javascript:;">
                        <img src="static/img/s_img4.jpg" />
                      </a>
                      <div class="title">宝宝五彩袜棉质舒服</div>
                      <div class="price">
                        <span>￥49.00</span>
                        <del>￥99.00</del>
                      </div>
                    </div>
                    <div class="item">
                      <a href="javascript:;">
                        <img src="static/img/s_img5.jpg" />
                      </a>
                      <div class="title">宝宝五彩袜棉质舒服</div>
                      <div class="price">
                        <span>￥49.00</span>
                        <del>￥99.00</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hot-recommend-con">
        <div class="hot-con1 w1200 layui-clear">
          <div class="item">
            <h4>热销推荐</h4>
            <div class="big-img">
              <a href="javascript:;">
                <img src="static/img/hot1.png" />
              </a>
            </div>
            <div class="small-img">
              <a href="javascript:;">
                <img src="static/img/hot2.png" alt />
              </a>
            </div>
          </div>
          <div class="item">
            <div class="top-img">
              <a href="javascript:;">
                <img src="static/img/hot5.jpg" />
              </a>
            </div>
            <div class="bottom-img">
              <a href="javascript:;">
                <img src="static/img/hot6.jpg" />
              </a>
              <a class="baby-cream" href="javascript:;">
                <img src="static/img/hot7.jpg" />
              </a>
            </div>
          </div>
          <div class="item item1 margin0 padding0">
            <a href="javascript:;">
              <img src="static/img/hot8.jpg" />
            </a>
            <a href="javascript:;">
              <img class="btm-img" src="static/img/hot9.jpg" />
            </a>
          </div>
        </div>
      </div>

      <div class="product-cont w1200" id="product-cont">
        <div class="product-item product-item1 layui-clear">
          <div class="left-title">
            <h4>
              <i>1F</i>
            </h4>
            <img src="static/img/icon_gou.png" />
            <h5>宝宝服饰</h5>
          </div>
          <div class="right-cont">
            <a href="javascript:;" class="top-img">
              <img src="static/img/img12.jpg" alt />
            </a>
            <div class="img-box">
              <a href="javascript:;">
                <img src="static/img/s_img7.jpg" />
              </a>
              <a href="javascript:;">
                <img src="static/img/s_img8.jpg" />
              </a>
              <a href="javascript:;">
                <img src="static/img/s_img9.jpg" />
              </a>
              <a href="javascript:;">
                <img src="static/img/s_img10.jpg" />
              </a>
              <a href="javascript:;">
                <img src="static/img/s_img11.jpg" />
              </a>
            </div>
          </div>
        </div>
        <div class="product-item product-item2 layui-clear">
          <div class="left-title">
            <h4>
              <i>2F</i>
            </h4>
            <img src="static/img/icon_gou.png" />
            <h5>奶粉辅食</h5>
          </div>
          <div class="right-cont">
            <a href="javascript:;" class="top-img">
              <img src="static/img/img12.jpg" alt />
            </a>
            <div class="img-box">
              <a href="javascript:;">
                <img src="static/img/s_img7.jpg" />
              </a>
              <a href="javascript:;">
                <img src="static/img/s_img8.jpg" />
              </a>
              <a href="javascript:;">
                <img src="static/img/s_img9.jpg" />
              </a>
              <a href="javascript:;">
                <img src="static/img/s_img10.jpg" />
              </a>
              <a href="javascript:;">
                <img src="static/img/s_img11.jpg" />
              </a>
            </div>
          </div>
        </div>
        <div class="product-item product-item3 layui-clear">
          <div class="left-title">
            <h4>
              <i>3F</i>
            </h4>
            <img src="static/img/icon_gou.png" />
            <h5>宝宝用品</h5>
          </div>
          <div class="right-cont">
            <a href="javascript:;" class="top-img">
              <img src="static/img/img12.jpg" alt />
            </a>
            <div class="img-box">
              <a href="javascript:;">
                <img src="static/img/s_img7.jpg" />
              </a>
              <a href="javascript:;">
                <img src="static/img/s_img8.jpg" />
              </a>
              <a href="javascript:;">
                <img src="static/img/s_img9.jpg" />
              </a>
              <a href="javascript:;">
                <img src="static/img/s_img10.jpg" />
              </a>
              <a href="javascript:;">
                <img src="static/img/s_img11.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="product-list-box" id="product-list-box">
        <div class="product-list-cont w1200">
          <h4>更多推荐</h4>
          <div class="product-item-box layui-clear">
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more1.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more2.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more3.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more1.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more2.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more3.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more1.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more2.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more3.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more1.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more2.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more3.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more1.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more2.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more3.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more1.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more2.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more3.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more1.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more2.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more3.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more1.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more2.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more3.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more1.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more2.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
            <div class="list-item">
              <a href="javascript:;">
                <img src="static/img/more3.jpg" />
              </a>
              <p>时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝</p>
              <span>￥100.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {
    this.getLunbo();
  },

  mounted() {
    layui.use("carousel", function() {
      var carousel = layui.carousel;
      //建造实例
      carousel.render({
        elem: "#test1",
        width: "100%", //设置容器宽度
        height: "500px",
        arrow: "always" //始终显示箭头
        //,anim: 'updown' //切换动画方式
      });
    });
    console.log("-------index.vue-------");
    console.log($);
    $(".nav-item").mouseenter(function() {
      console.log($("#js_climit_li")[0].offsetWidth);
      // $(this).children(".menu-item").animate({left:100,queue:true});
      $(this)
        .children(".menu-item")
        .css("left", $("#js_climit_li")[0].offsetWidth);
      $(this)
        .children(".menu-item")
        .css("transition", "all 0.8s ease-in 0.5s;");
      $(this)
        .children(".menu-item")
        .css("visibility", "visible");

      // $(this).children(".menu-item").css("display","block");
    });
    $(".nav-item").mouseleave(function() {
      //$(this).children(".menu-item").animate({left:200,queue:true});
      $(this)
        .children(".menu-item")
        .css("transition", "all 0.8s ease-out 0.5s;");
      $(this)
        .children(".menu-item")
        .css("visibility", "hidden");
      //$(this).children(".menu-item").css("display","block");
    });

    $(".menu-item").mouseover(function() {
      $(this).css("visibility", "visible");
    });
  },

  methods:{
    getLunbo:function(){
      console.log('-----lunbo----------')
      this.$api.postLunbo({count:'3'})
    }
  }
};
</script>




<style src="@/assets/css/hmstyle.css">
</style>
