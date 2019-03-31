<template>
  <div class="content">
    <div class="box-content">

      <div class>
        <div class="box-title">
          <span class="title">Design Tokens</span>
          <p class="paragraph">Select your tokens</p>
          <div class="container container-checkbox wrap">
            <div class v-for="(names, index) in $store.state" v-bind:key="index" >
              <div @click="names.config.status = !names.config.status">
                <div class="checkbox" :class="{active : names.config.status}">{{names.config.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="form-group-block" v-for="(items, index) in $store.state" v-bind:key="index">
        <div class="content-block">
          <div class="box-subtitle" @click="items.config.status = !items.config.status">
            <button class="btn btn-square-sm btn-default">
              <i class="fas fa-minus" v-show="items.config.status"></i>
              <i class="fas fa-plus" v-show="!items.config.status"></i>
            </button>
            <span class="subtitle">
              {{items.config.name}}
            </span>
          </div>

          <div class="content-block-form" v-show="items.config.status">
            <div class="form-content" v-for="(x, key, index) in items.list" v-bind:key="index">
              <div class="form-group">
                <label class="label-control">{{items.config.name}} token</label>
                <input type="text" class="form-control" v-model="x.token">
              </div>

              <div class="form-group">
                <label class="label-control">{{items.config.name}} value</label>
                <input type="text" class="form-control" v-model="x.value">
              </div>
            </div>

            <div class="box-download">
              <span class="btn-more">+</span>
              <span class="text-bold">New {{items.config.name}}</span>
            </div>

            <div class="space"></div>
          </div>
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
