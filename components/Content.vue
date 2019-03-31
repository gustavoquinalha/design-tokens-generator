<template>
  <div class="content">
    <div class="box-content">
      <Checkbox/>

      <div class="form-group-block" v-for="(items, index) in $store.state" v-bind:key="index">
        <div class="content-block" v-show="items.config.status">
          <input type="checkbox" class="checkbox-control" :id="'label-' + index">
          <label class="box-subtitle" :for="'label-' + index">
            <button class="btn btn-square-sm btn-default">
              <i class="fas fa-minus"></i>
              <i class="fas fa-plus"></i>
            </button>
            <span class="subtitle">{{items.config.name}}</span>
          </label>

          <div class="content-block-form">
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
import Checkbox from "~/components/Checkbox.vue";
export default {
  data() {
    return {};
  },
  components: {
    Checkbox
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
