<template>
  <div class>
    <button class="btn btn-outline btn-checkbox" @click="toggleModalAddToken">
      <i class="fas fa-plus icon-margin-right"></i> New Token
    </button>
    <div class="blackdrop" :class="{show : show}" @click="toggleModalAddToken"></div>
    <div class="modal" :class="{show : show}">
      <div class="modal-relative">
        <button class="btn btn-close" @click="toggleModalAddToken">
          <i class="fas fa-times"></i>
        </button>

        <div class="box-title margin-bottom-24">
          <span class="title text-align-center">New Token</span>
        </div>

        <div class="content-block-form">
          <div class="form-content">
            <div class="form-group full-width">
              <label class="label-control">Name</label>
              <input type="text" class="form-control" v-model="token">
            </div>

            <div class="form-btn">
              <button class="btn" @click="addToken">ADD</button>
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
  // props: {
  //   show: {
  //     type: Boolean,
  //     default: true
  //   }
  // },
  methods: {
    toggleModalAddToken() {
      this.show = !this.show;
    },
    addToken() {
      this.$store.state.tokens.push({
        status: true,
        name: this.token,
        list: [
          {
            token: this.tokenName,
            value: this.tokenValue
          }
        ]
      });
      this.token = "";
      this.tokenName = "";
      this.tokenValue = "";
      this.toggleModalAddToken();
      this.show = false;
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
