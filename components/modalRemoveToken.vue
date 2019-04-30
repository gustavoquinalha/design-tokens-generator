<template>
  <div class>
    <div class="blackdrop" :class="{show : $store.state.showModalRemoveToken === true}" @click="$store.state.showModalRemoveToken = false"></div>
    <div class="modal" :class="{show : $store.state.showModalRemoveToken === true}">
      <div class="modal-relative">
        <button class="btn btn-close" @click="$store.state.showModalRemoveToken = false">
          <i class="fas fa-times"></i>
        </button>

        <div class="box-title margin-bottom-24">
          <span class="title text-align-center">Remove Token <u>Font family</u> ?</span>

        </div>

        <div class="content-block-form">
          <div class="form-content">
            <div class="form-btn">
              <button class="btn btn-outline margin-right-10" @click="$store.state.showModalRemoveToken = false">Cancel</button>
              <button class="btn" @click="removeToken">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      token: ""
    };
  },
  methods: {
    toggleModalRemoveToken() {
      this.show = !this.show;
    },
    removeToken() {
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

@media (max-width: $media-query-medium) {
  .form-btn {
    margin: 0;
    padding: 0;
  }
  .modal-relative {
    padding: $size4;
  }

  .modal .box-title .title {
    font-size: 18px;
  }
}

.btn-checkbox {
  margin-top: $size3;
}

@media (max-width: $media-query-large) {
  .btn-checkbox {
    margin-top: 0;
  }
}
</style>
