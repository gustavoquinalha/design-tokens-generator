<template>
  <div class="content">
    <div class="box-content">
      <Checkbox/>

      <div class="form-group-block" v-for="(token, index) in $store.state.tokens" v-bind:key="index">
        <div class="content-block" v-show="token.status">
          <input type="checkbox" class="checkbox-control" :id="'label-' + index">
          <label class="box-subtitle" :for="'label-' + index">
            <span class="btn btn-square-sm">
              <i class="fas fa-minus"></i>
              <i class="fas fa-plus"></i>
            </span>
            <h2 class="subtitle">{{token.name}}</h2>
          </label>

          <div class="content-block-form">
            <div class="form-content" v-for="(x, key, index) in token.list" v-bind:key="index">
              <div class="form-group">
                <label class="label-control">{{token.name}} token</label>
                <input type="text" class="form-control" v-model="x.token">
              </div>

              <div class="form-group">
                <label class="label-control">{{token.name}} value</label>
                <input type="text" class="form-control" v-model="x.value">
              </div>
            </div>

            <div class="box-download">
              <button class="btn btn-outline btn-checkbox" @click="addNewToken(index)">
                <i class="fas fa-plus icon-margin-right"></i>
                New {{token.name}}
              </button>
            </div>

            <div class="space"></div>
          </div>
        </div>
      </div>

      <div v-show="!$store.state.tokens.find(token => token.status)" class="alert">You must select a token to continue.</div>
    </div>
  </div>
</template>

<script>
import Checkbox from "~/components/Checkbox.vue";
export default {
  components: {
    Checkbox
  },
  methods: {
    addNewToken(index) {
      this.$store.state.tokens = this.$store.state.tokens.map((token, i) => {
        if (index == i) {
          token.list.push({
            token: '',
            value: ''
          })
        }
        return token
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/components/content.scss";
</style>
