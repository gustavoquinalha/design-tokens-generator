<template>
  <div class>
    <div class="header container align-center">
      <div class="container-header container wrap-reverse align-center">
        <div class="text">
          <p class="paragraph">Create your Design Tokens</p>
          <h1>Design tokens are the minimum elements of the design system.</h1>
          <nuxt-link to="/generator" class="btn btn-lg btn-primary">Create my Tokens</nuxt-link>
        </div>
        <div class="image container align-center">
          <img src="@/assets/image/girl.svg" alt>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="size margin">
        <p>Design Tokens Generator</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

.header {
  min-height: calc(100vh - #{$menu-height});
}

.container-header {
  box-sizing: border-box;
  padding: 40px 0;
  width: 1366px;

  .text,
  .image {
    width: 50%;
    padding: 40px;
    box-sizing: border-box;
  }

  .image {
    img {
      width: 600px;
      max-width: 90%;
    }
  }

  .text {
    .btn {
      margin-top: 40px;
    }

    .paragraph {
      font-size: 22px;
      margin-bottom: 20px;
    }
  }
}

.footer {
  padding: 100px 0;
  background: $black;
  color: $white;
}

@media (max-width: 768px) {
  .container-header {
    .text,
    .image {
      width: 100%;
    }
  }

  .btn.btn-lg {
    font-size: 32px;
    padding: 20px 40px;
  }
}
</style>
