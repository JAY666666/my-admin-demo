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
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router
                .push(this.$route.query.redirect || "/")
                .catch(error => console.log(error));
              this.loading = false;
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
