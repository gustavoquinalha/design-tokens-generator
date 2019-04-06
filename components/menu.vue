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
            <a name="Github" title="Github" rel="noopener"
              href="https://github.com/gustavoquinalha/design-tokens-generator" target="_blank">
              <svg class="link" width="20" height="20" viewBox="0 0 32.8 32" fill="#fff"
                style="fill-rule:evenodd;clip-rule:evenodd;">
                <path class="st0" d="M16.4,0.1c-9,0-16.3,7.3-16.3,16.3c0,7.2,4.7,13.3,11.1,15.5c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8
                  c-4.5,1-5.5-2.2-5.5-2.2C6.1,24.3,5,23.8,5,23.8c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4
                  c0.1-1.1,0.6-1.8,1-2.2C9.8,23.2,6,21.8,6,15.6c0-1.8,0.6-3.2,1.7-4.4c-0.2-0.4-0.7-2.1,0.2-4.3c0,0,1.4-0.4,4.5,1.7
                  C13.6,8.2,15,8,16.4,8c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4
                  c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5
                  C32.7,7.4,25.4,0.1,16.4,0.1z"></path>
              </svg>
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
