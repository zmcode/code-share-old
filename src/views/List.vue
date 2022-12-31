<template>
  <div class="container-wrap">
    <div class="left">
      <div class="title">
        <i class="el-icon-folder"></i>
      </div>
      <div class="tree-wrap">
        <el-tree :data="data"></el-tree>
      </div>
    </div>
    <div class="right">
      <div class="header">
        <i
          v-if="!loginInfo.userName"
          class="el-icon-user"
          @click="loginVisible = true"
        ></i>
        <el-dropdown
          v-if="loginInfo.userName"
          trigger="click"
          @command="handleCommand"
        >
          <div class="user-wrap">
            <ImgIcon :src="loginInfo.avatar" />
            <span class="name">{{ loginInfo.userName }}</span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="code">编写代码</el-dropdown-item>
            <el-dropdown-item command="layout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <LoginDialog :visible.sync="loginVisible" />
  </div>
</template>

<script>
import LoginDialog from "@components/LoginDialog.vue";
import { mapMutations, mapState } from "vuex";
import { reqLayout } from "@/api/user.js";
export default {
  computed: {
    ...mapState(["loginInfo"]),
  },
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      loginVisible: false,
    };
  },
  components: { LoginDialog },
  methods: {
    ...mapMutations(["setLoginState", "setLoginInfo"]),
    handleCommand(type) {
      if (type === "code") {
        this.$router.push("/html/instance");
      } else {
        reqLayout().then((res) => {
          this.$baseMessage(res.msg, "success");
          this.setLoginInfo({});
          localStorage.clearItem("token");
        });
      }
    },
  },
  mounted() {
    console.log(this.loginInfo, ";loginInfo");
  },
};
</script>

<style lang="scss" scoped>
.container-wrap {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.left {
  width: 20%;
  float: left;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0px;
  .title {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    img {
      width: 60px;
      height: 60px;
    }
  }
  .tree-wrap {
    box-sizing: border-box;
    margin-top: 10px;
  }
}
.right {
  width: 80%;
  float: left;
  height: 100%;
  border-left: 1px solid rgba(60, 60, 60, 0.12);
  box-sizing: border-box;
  .header {
    height: 60px;
    width: 100%;
    border-bottom: 1px solid rgba(60, 60, 60, 0.12);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
    box-sizing: border-box;
    i {
      font-size: 30px;
      cursor: pointer;
    }
    .user-wrap {
      cursor: pointer;
      display: flex;
      align-items: center;
      ::v-deep img {
        border-radius: 50%;
      }
      .name {
        margin-left: 10px;
        font-weight: bold;
      }
    }
  }
}
body .el-dropdown-menu {
  background: #fff !important;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%) !important;
  border: 1px solid #ebeef5 !important;
}
body .el-dropdown-menu__item {
  background: #fff !important;
  color: #333 !important;
}
body .el-dropdown-menu__item:hover {
  background-color: #ecf5ff !important;
  color: #66b1ff !important;
}
</style>