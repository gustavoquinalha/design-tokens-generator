<template>
  <div class>
    <button class="btn btn-outline btn-checkbox" @click="toggleModalAddToken">
      <i class="fas fa-plus icon-margin-right"></i> New Token
    </button>
    <div class="blackdrop" :class="{show : show}"></div>
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

<style lang="scss">
@import "~/assets/css/_variables.scss";

.blackdrop {
  width: 100%;
  height: calc(100vh - #{$menu-height});
  position: fixed;
  left: 0;
  opacity: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  visibility: hidden;
  transition: 0.3s;
  top: $menu-height;
  &.show {
    opacity: 1;
    visibility: visible;
  }
}

.modal {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background: $white;
  width: 90%;
  max-width: 600px;
  margin: $size4 auto;
  box-shadow: 2px 0 8px 0 rgba(0, 0, 0, 0.16);
  z-index: 1000;
  border-radius: $radius;
  top: -100%;
  transition: 0.3s;
  visibility: hidden;
  &.show {
    top: $size7;
    visibility: visible;
  }
}

.modal-relative {
  padding: $size7;
  position: relative;
}

.btn-close {
  position: absolute;
  top: $size3;
  right: $size3;
  background: $white;
  color: $black;
  border-color: $white;
  padding: 0 $size3;
  &:hover {
    background: $black;
    color: $white;
  }
}

.form-btn {
  width: 100%;
  padding: 0 $size3;
  display: flex;
  justify-content: flex-end;
}

.form-group .btn {
  flex-basis: 200px;
}

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
</style>
