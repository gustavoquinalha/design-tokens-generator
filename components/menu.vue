<template>
  <header>
    <div class="menu__relative">
      <div class="menu">
        <div class="menu__block size margin container align-items-center justify-content-between">
          <div class="menu__logo">
            <a href="#" name="Design Tokens Generator">
              <b>Design Tokens Generator</b>
            </a>
          </div>
          <div class="menu__links">
            <a
              name="Github"
              rel="noopener"
              href="https://github.com/gustavoquinalha/design-tokens-generator"
              target="_blank"
              class="link"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

.btn {
  &:hover {
    background: $white;
    color: $black;
    border-color: $white;
  }
}

a {
  color: $white;
  text-decoration: none;
}

.link {
  font-size: 1.7rem;
  &:hover {
    transform: scale(1.1, 1.1);
  }
}

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
@media (max-width: $media-query-medium) {
}
</style>
