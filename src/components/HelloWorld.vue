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
    <!-- <div class="card" style="width: 18rem;">
      <img src="@/assets/honglou.jpg" class="card-img-top" alt />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div> -->
    <!-- <div class="card" style="width: 18rem;">
  <img src="" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
    </div>-->
    <!-- 
<div class="card" style="width: 18rem;">
  <img src="@/assets/logo.png"  class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
    </div>-->

    <!--  <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" href="#">书籍</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">礼品</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">海货</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">其他</a>
      </li>
    </ul>-->
    <!-- <div class="login_layout">
      <h1 class="h3 mb-3 font-weight-normal">登陆我的账号</h1>
      <div class="form-group">
        <input
          type="email"
          style="border-"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="请输入账号"
        />
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="请输入密码"
        />
      </div>
      <button type="button" class="btn btn-primary">登录</button>
    </div>-->
    <!--   <button type="button" class="btn btn-primary">登录按钮</button> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  /* background-color: rgb(240, 240, 240); */
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

.card-img-top{
  background-color: whitesmoke;
}
</style>
