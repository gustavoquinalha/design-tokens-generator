<template>
  <div class>
    <div class="container container-content wrap size margin">
      <Content/>
      <Export/>
    </div>
    <Contributors/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Content from "~/components/Content.vue";
import Export from "~/components/Export.vue";
import Contributors from "~/components/contributors.vue";

export default {
  components: {
    Content,
    Export,
    Contributors
  },
  data() {
    return {
      name: "teste"
    };
  }
};
</script>

<style lang="scss">
@import "~/assets/css/_variables.scss";
.container-content {
  min-height: calc(100vh - #{$menu-height} - #{$footer-height});
  padding: 40px 0;
}
</style>
