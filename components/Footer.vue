<template>
  <div class="footer container align-center">
    <div class="size margin">
      <div class="container column full-wdith align-center">
        <div class>
          <p class>Created with 💖</p>
        </div>
        <Contributors/>
      </div>
    </div>
  </div>
</template>

<script>
import Contributors from "~/components/contributors.vue";

export default {
  components: {
    Contributors
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "~/assets/css/_variables.scss";

.footer {
  background: $white;
  color: $black;
  height: $footer-height;
}
</style>
