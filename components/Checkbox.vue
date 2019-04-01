<template>
  <nav class>
    <div class>
      <div class="box-title">
        <h1 class="title">Design Tokens</h1>
        <p class="paragraph">Select your tokens</p>
        <div class="container container-checkbox wrap">
          <div class v-for="(names, index) in $store.state" v-bind:key="index">
            <div
              @click="names.config.status = !names.config.status"
              class="checkbox"
              :class="{active : names.config.status}"
            >{{names.config.name}}</div>
          </div>
          <button class="btn btn-outline btn-checkbox" @click="toggleModalAddToken">
            <i class="fas fa-plus icon-margin-right"></i> New Token
          </button>
        </div>
      </div>
    </div>

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
            <div class="form-group">
              <label class="label-control">X token</label>
              <input type="text" class="form-control">
            </div>

            <div class="form-group">
              <label class="label-control">X value</label>
              <input type="text" class="form-control">
            </div>

            <div class="form-btn">
              <button class="btn">ADD</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggleModalAddToken() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/css/_variables.scss";

// .modal-block {
//   z-index: 1000;
//   position: fixed;
//   top: $size7;
//   left: 0;
//   width: 100%;
//   background: red;
// }

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

.form-group .btn {
  flex-basis: 200px;
}

@media (max-width: $media-query-medium) {
  .modal {
    padding: $size4;
  }
}
</style>
