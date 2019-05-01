<template>
  <div class>
    <div class="header container align-center">
      <div class="container-header container wrap align-center">
        <div class="text">
          <div class="container column">
            <div data-aos="fade-up" data-aos-delay="0">
              <gh-btns-star slug="gustavoquinalha/design-tokens-generator" show-count></gh-btns-star>
            </div>
            <p class="paragraph" data-aos="fade-up" data-aos-delay="100">Create your Design Tokens</p>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
          >Design tokens are the minimum elements of the design system.</h1>
          <div data-aos="fade-up" data-aos-delay="300">
            <nuxt-link to="/generator" class="btn btn-lg btn-primary">Create my Tokens</nuxt-link>
          </div>
        </div>
        <div class="image container align-center" data-aos="zoom-in" data-aos-delay="400">
          <img src="@/assets/image/girl.svg" alt>
        </div>
      </div>
    </div>
    <contributers/>
    <footerHome/>
  </div>
</template>

<script>
import contributers from "~/components/home/contributers.vue";
import footerHome from "~/components/Footer.vue";

export default {
  components: {
    contributers,
    footerHome
  },
  head: {
    script: [
      {
        src: "https://unpkg.com/aos@2.3.1/dist/aos.js"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://unpkg.com/aos@2.3.1/dist/aos.css"
      }
    ]
  },
  plugins: [{ src: "~/plugins/aos", ssr: false }],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

.header {
  min-height: calc(100vh - #{$menu-height});
  position: relative;
}

h1 {
  font-size: 64px;
  transition: 0.3s;
}

.paragraph {
  line-height: 1.5;
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

@media (max-width: 992px) {
  .container-header {
    .text,
    .image {
      width: 100%;
    }

    .image {
      display: none;
    }
  }
}

@media (max-width: 768px) {
  .header {
    min-height: auto;
    padding: $size4 0;
  }
  h1 {
    font-size: 46px;
  }
}
</style>
