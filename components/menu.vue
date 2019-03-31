<template>
  <div class="menu__relative">
    <div class="menu">
      <div class="menu__block size margin container align-items-center justify-content-between">
        <div class="menu__logo">
          <b>Design Tokens Generator</b>
        </div>
        <div class="menu__links">
          <a href="https://github.com/gustavoquinalha/design-tokens-generator" target="_blank" class="btn btn-white btn-outline">
          Github
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

.menu__relative {
  height: $menu-height;
}
.menu {
  width: 100%;
  background: $black;
  color: $white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 2px 0 8px 0 rgba(0, 0, 0, 0.16);
}

.menu__block {
  height: $menu-height;
}
</style>
