<template>
  <div class="contributers container align-center">
    <div class="size margin">
      <div class="box-contributers container align-center" data-aos="fade-up">
        <div class="text">
          <h2 data-aos="fade-up" data-aos-delay="200">Contributers</h2>
          <p class="paragraph" data-aos="fade-up" data-aos-delay="300">
            Help us to change the world!
            <a
              href="https://github.com/gustavoquinalha/design-tokens-generator"
              target="_blank"
            >Contribute on Github.</a>
          </p>
          <contributors :text="false" :center="false" data-aos="fade-up" data-aos-delay="400"/>
        </div>

        <div class="image">
          <img src="@/assets/image/contributers.svg" alt data-aos="zoom-in" data-aos-delay="500">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contributors from "~/components/contributors.vue";

export default {
  components: {
    contributors
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

.contributers {
  color: $white;
  padding-top: $size3;
  background: linear-gradient(to top, $black 50%, transparent 50%);

  a {
    color: $white;
  }
}

h2 {
  font-size: 32px;
  font-weight: 900;
}

.paragraph {
  color: $white;
  font-size: 20px;
}

.box-contributers {
  background: $primary;
  padding: $size6;
  border-radius: $radius;
  width: 1366px;
  max-width: 100%;
  margin: 0 auto;
}

.text {
  width: calc(100% - 400px);
  max-width: calc(100% - 400px);
}

.image {
  width: 400px;
  max-width: 100%;
  margin-left: 32px;

  img {
    width: 100%;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .box-contributers {
    flex-wrap: wrap-reverse;
    > div {
      width: 100%;
      max-width: 100%;
    }

    .image {
      margin-left: 0;
      margin-bottom: 32px;
      max-width: 400px;
    }
  }
}
</style>
