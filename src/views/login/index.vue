<template>
  <div class="container">
    <div class="content">
      <el-image
        class="logo"
        fit="fill"
        :src="require('@/assets/logo-login.png')"
      ></el-image>
      <el-form
        :model="loginForm"
        ref="loginForm"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="账户" prop="username" label-width="50px">
          <el-input
            type="test"
            v-model="loginForm.username"
            placeholder="用户名"
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" label-width="50px">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="密码"
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登入</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 15, message: "密码为6到12位", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(value => {
        if (value) {
          this.$router.push("/");
        }
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
}
.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 50px;
  height: 100px;
  margin-bottom: 50px;
}
</style>
