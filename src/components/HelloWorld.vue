<template>
  <div class="hello">
    <div class="login_layout">
      <h1 class="h3 mb-3 font-weight-normal">登陆我的账号</h1>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="请输入账号"
        />
      </div>
      <div class="form-group">
    
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="请输入密码"
        />
        
      </div>

    <button type="button" class="btn btn-primary">Primary</button>
      <!-- <button type="button" class="btn btn-primary">提交审核</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-info">Info</button>-->
    </div>
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
}
.login_layout {
  margin-top: 30px;
  width: 500px;
/*   background-color: whitesmoke; */
  display: inline-table;
  height: 360px;
}

.form-control{
  display: inline-table;
  width: 300px;
  font-size: 15px;
  padding: 23px;
}

.btn-primary{
  font-size: 14px;
  width:300px;
  padding: 11px;
}

.font-weight-normal{
  margin-top: 55px;
  margin-bottom: 10px;
}


</style>
