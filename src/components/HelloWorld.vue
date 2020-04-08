<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Blacksheeps</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">货物商品</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">我的订单</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >个人信息</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">帮助中心</a>
              <a class="dropdown-item" href="#">购物车</a>
              <a class="dropdown-item" href="#">我的账户</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">退出登录</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="搜索" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜索</button>
        </form>
      </div>
    </nav>

    <div class="jumbotron">
      <h1 class="display-5">你好!</h1>
      <p class="lead">这里是我的小商铺，只卖我信得过的东西</p>
      <p>不赚钱只是交个朋友</p>
    </div>
<!-- :class="$test.test()>350?product_layout2:product_layout1" -->
    <div class="product">
      <div :style='WIDTH> 900?product_layout1:product_layout2'>
        <div class="product_mini_layout">
          <div class="card" style="width:18rem">
            <img src="@/assets/5.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">语言的突破 </h5>
              <h6 class="card-title" style="color:red;font-weight:600;font-size:18px">RMB 100</h6>
             <!--  <p
                class="card-text"
              >未拆分十层新</p> -->
              <a href="#" class="btn btn-primary">查看详情</a>
            </div>
          </div>
        </div>

        <div class="product_mini_layout">
          <div class="card" style="width: 18rem;">
            <img src="@/assets/5.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
             <!--  <p
                class="card-text"
              >Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div class="product_mini_layout">
          <div class="card" style="width: 18rem;">
            <img src="@/assets/5.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p
                class="card-text"
              >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div class="product_mini_layout">
          <div class="card" style="width: 18rem;">
            <img src="@/assets/5.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p
                class="card-text"
              >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      WIDTH:'',
      product_layout:'',
      msg: "Welcome to Your Vue.js App",
      product_layout1:"display:flex;flex-wrap:wrap;align-items:center;width: 1000px;",
      product_layout2:"display:flex;flex-direction:column;justify-content:center; align-items:center;width: 1000px;"
    };
  },

  created(){
    this.WIDTH = document.documentElement.clientWidth
  },

  mounted() {
    window.onresize = () => {
      return (() => {
       this.WIDTH = document.documentElement.clientWidth
      })();
    };
  },

  methods: {
    dianji() {
    
    }
  },

  

};
</script>
<style scoped>
.hello {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-color: rgb(240, 240, 240);
}

.product {
  display: flex;
  justify-content: center;
}

.product_layout1 {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 1000px;
}

.product_layout2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
}

.product_mini_layout {
  width: 33.1%;
  min-width: 250px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  font-size: 15px;
}

.form-control {
  font-size: 15px;
}

/* .jumbotron{
  background-color: white;
} */

.login_layout {
  margin-top: 120px;
  width: 550px;
  display: inline-table;
  height: 360px;
}

.nav-link {
  font-size: 15px;
  color: white;
}

.justify-content-center {
  background-color: rgb(247, 247, 247);
  color: black;
}
.nav-link {
  color: black;
}

.dropdown-menu {
  font-size: 15px;
}

.card-img-top {
  background-color: whitesmoke;
}

.jumbotron {
  background-color: white;
}
</style>
