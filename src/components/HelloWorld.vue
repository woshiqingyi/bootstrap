<template>
  <div class="hello">
    <div class="login_layout">
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
  display: inline-table;
}


.form-control{
  width: 300px;
  font-size: 14px;
  padding: 21px;
}

.btn-primary{
  font-size: 14px;
  width:200px;
}


</style>
