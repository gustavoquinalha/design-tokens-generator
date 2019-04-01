<template>
  <div class="content">
    <div class="box-content">
      <Checkbox/>

      <div class="form-group-block" v-for="(items, index) in $store.state" v-bind:key="index">
        <div class="content-block" v-show="items.config.status">
          <input type="checkbox" class="checkbox-control" :id="'label-' + index">
          <label class="box-subtitle" :for="'label-' + index">
            <span class="btn btn-square-sm">
              <i class="fas fa-minus"></i>
              <i class="fas fa-plus"></i>
            </span>
            <h2 class="subtitle">{{items.config.name}}</h2>
          </label>

          <div class="content-block-form">
            <div class="form-content" v-for="(x, index) in items.list" v-bind:key="index">
              <div class="form-group">
                <label class="label-control" :for="'form-token-' + index">{{items.config.name}} token</label>
                <input type="text" class="form-control" v-model="x.token" :id="'form-token-' + index">
              </div>

              <div class="form-group">
                <label class="label-control" :for="'form-value-' + index">{{items.config.name}} value</label>
                <input type="text" class="form-control" v-model="x.value" :for="'form-value-' + index">
              </div>
            </div>

            <div class="box-download">
              <button class="btn btn-outline btn-checkbox">
                <i class="fas fa-plus icon-margin-right"></i>
                New {{items.config.name}}
              </button>
            </div>

            <div class="space"></div>
          </div>
        </div>
      </div>

      <div class="alert">You must select a token to continue.</div>
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
@import "~/assets/css/components/content.scss";
</style>
