<template>
  <div class="content">
    <div class="box-content">
      <div class="box-title">
        <span class="title">Design Tokens</span>
        <p class="paragraph">Select your tokens</p>
      </div>

      <div class="form-group-block">
        <div class="box-subtitle">
          <button class="btn btn-square-sm btn-default">-</button>
          <span class="subtitle">Font Family</span>
        </div>
        <div class="form-content" v-for="(font, index) in $store.state.fontFamily" v-bind:key="index">
          <div class="form-group">
            <label class="label-control">Font Family value</label>
            <input type="text" class="form-control" v-model="font.value">
          </div>

          <div class="form-group">
            <label class="label-control">Font Family token</label>
            <input type="text" class="form-control" v-model="font.token">
          </div>
        </div>
        <div class="box-download">
          <button class="btn btn-square-sm">+</button>
          <span class="text-bold">New Font Family</span>
        </div>
      </div>

      <div class="space"></div>

      <div class="form-group-block">
        <div class="box-subtitle">
          <button class="btn btn-square-sm btn-default">-</button>
          <span class="subtitle">Font Size</span>
        </div>
        <div class="form-content" v-for="(font, index) in $store.state.fontSize" v-bind:key="index">
          <div class="form-group">
            <label class="label-control">Font Size value</label>
            <input type="number" class="form-control" v-model="font.value">
          </div>

          <div class="form-group">
            <label class="label-control">Font Size token</label>
            <input type="text" class="form-control" v-model="font.token">
          </div>
        </div>
        <div class="box-download">
          <button class="btn btn-square-sm">+</button>
          <span class="text-bold">New Font Size</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["fontFamily", "fontSize"])
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

.content {
  flex-basis: 70%;
  padding-right: $size6;
}

.box-content {
  box-shadow: 2px 0 8px 0 rgba(0, 0, 0, 0.16);
  background: $white;
  border-radius: $radius;
  padding: $size7;
  height: 100%;
}

@media (max-width: $media-query-large) {
  .content {
    flex-basis: 100%;
    padding-right: 0;
    margin-bottom: $size6;
  }
}

@media (max-width: $media-query-medium) {
  .box-content {
    padding: $size4;
    box-shadow: none;
  }
}
</style>
