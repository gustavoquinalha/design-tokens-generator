<template>
  <div class>
    <div class="size margin">
      <Content/>
    </div>
    <!-- <imageExport/> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import Content from "~/components/Content.vue";
// import imageExport from "~/components/imageExport.vue";

export default {
  components: {
    Content,
    // imageExport
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "~/assets/css/_variables.scss";
</style>
