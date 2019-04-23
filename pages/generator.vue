<template>
  <div class="size margin">
    <Content/>
    <!-- <Export/> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import Content from "~/components/Content.vue";
import Export from "~/components/Export.vue";

export default {
  components: {
    Content,
    Export
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
</style>
