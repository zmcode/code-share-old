<template>
  <el-image
    class="img"
    v-on="$listeners"
    v-bind="$attrs"
    :src="Imgprefix + src"
  ></el-image>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      Imgprefix:
        process.env.NODE_ENV === "development" ? "http://localhost:8080/" : "",
    };
  },
};
</script>

<style lang="scss" scoped>
.img {
  width: 50px;
  height: 50px;
}
</style>