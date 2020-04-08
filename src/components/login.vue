<template>
  <div>
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
      <button type="button" class="btn btn-primary">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        
    };
  },

   mounted() {
    window.onresize = () => {
      return (() => {
       this.WIDTH = document.documentElement.clientWidth
      })();
    };
  },
};
</script>
<style scoped>
.login_layout {
  text-align: center;
}

.form-control {
  max-width: 300px;
  display: inline-block;
}

.btn-primary {
  min-width: 300px;
}
</style>