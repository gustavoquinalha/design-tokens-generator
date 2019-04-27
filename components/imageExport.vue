<template>
  <div class>
    <button class="btn btn-img" @click="show = !show">Image</button>
    <div class="image-export" :class="{show : show}" @click="show = !show"></div>

    <div class="image-export-block" :class="{show : show}">
      <div class="image-export-content">
        <div>
          <div class="box-content">
            <button class="btn btn-close" @click="show = !show">
              <i class="fas fa-times"></i>
            </button>

            <div
              class="image-export-item"
              v-for="(token, index) in $store.state.tokens"
              v-bind:key="index"
            >
              <div class="input">
                <div class="form-content">
                  <div class="form-group">
                    <input type="text" placeholder="Width" class="form-control form-control-sm">
                  </div>
                </div>
              </div>

              <div class="box-subtitle">
                <h2 class="subtitle">{{token.name}}</h2>
              </div>
              <div class="container justify-content-between image-export-title">
                <label class="label-control">{{token.name}} token</label>
                <label class="label-control">{{token.name}} value</label>
              </div>
              <div class="form-content" v-for="(x, key, index) in token.list" v-bind:key="index">
                <div class="form-group image-export-token">
                  <span class="span-control">{{x.token}}</span>
                </div>

                <div class="form-group image-export-value">
                  <span class="span-control">{{x.value}}</span>
                </div>
              </div>
            </div>

            <div
              v-show="!$store.state.tokens.find(token => token.status)"
              class="alert"
            >You must select a token to continue.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="scss">
@import "~/assets/css/_variables.scss";
@import "~/assets/css/components/imageExport.scss";

.btn-img {
  position: fixed;
  bottom: $size2;
  left: $size2;
  z-index: 1000;
}
</style>
