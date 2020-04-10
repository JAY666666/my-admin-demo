<template>
  <div class="container" v-loading="loading">
    <div class="content">
      <el-image
        class="logo"
        fit="fill"
        :src="require('@/assets/logo-login.png')"
      ></el-image>
      <el-form :model="loginForm" ref="loginForm" :rules="rules">
        <el-form-item prop="username">
          <el-input
            type="test"
            v-model="loginForm.username"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user-solid"
            clearable
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            show-password
            clearable
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-form-item class="remember">
          <el-checkbox v-model="remember">记住密码</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" class="confirm"
            >登入</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      loading: false,
      loginForm: {
        username: null,
        password: null
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 15, message: "密码为6到12位", trigger: "blur" }
        ]
      },
      remember: false
    };
  },
  created() {
    if (Cookies.get("rememberFlag")) {
      this.loginForm.username = Cookies.get("userName");
      this.loginForm.password = Cookies.get("userPass");
      this.remember = true;
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(value => {
        if (value) {
          if (this.remember) {
            Cookies.set("rememberFlag", true, { expires: 7 });
            Cookies.set("userName", this.loginForm.username, { expires: 7 });
            Cookies.set("userPass", this.loginForm.password, { expires: 7 });
          } else {
            Cookies.set("rememberFlag", false);
            Cookies.set("userName", "");
            Cookies.set("userPass", "");
          }
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push(this.$route.query.redirect || "/");
            })
            .finally(() => {
              this.loading = false;
            });
        }
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  height: 100%;
}
.content {
  position: relative;
  top: 20vh;
  width: 250px;
  margin: 0 auto;
  text-align: center;
  .remember {
    text-align: left;
    margin-bottom: 0;
    margin-top: -10px;
  }
}
.logo {
  width: 80px;
  height: 140px;
  margin-bottom: 20px;
}
.confirm {
  width: 100%;
}
</style>
