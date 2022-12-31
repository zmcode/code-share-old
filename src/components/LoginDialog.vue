<template>
  <el-dialog
    title="登录/注册"
    v-bind="$attrs"
    v-on="$listeners"
    width="30%"
    :close-on-click-modal="false"
  >
    <el-form :model="loginForm" label-width="80px" label-position="right">
      <el-form-item label="账号" prop="account">
        <el-input
          type="text"
          v-model="loginForm.account"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <div style="text-align: center">
        <el-button @click="login">登录</el-button>
        <el-button @click="register">注册</el-button>
      </div>
    </el-form>
  </el-dialog>
</template>

<script>
import { reqLogin } from "@/api/user.js";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      loginForm: {
        account: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState(["loginInfo"]),
  },
  methods: {
    ...mapMutations(["setLoginState", "setLoginInfo"]),
    login() {
      // axios.post("http://localhost:8080/api/doLogin", {
      //   account: "yaojin",
      //   password: "12121212",
      // });
      reqLogin(this.loginForm).then((res) => {
        this.setLoginInfo(res.data.user);
        localStorage.setItem("token", res.data.token);
        this.$emit("update:visible", false);
      });
    },
    register() {},
  },
};
</script>

<style>
</style>