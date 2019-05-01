<template>
  <div class="contributors">
    <h3 v-if="text">By Contributors</h3>
    <div class="container container-contributors wrap" :class="{'align-center': center}">
      <div
        class="box-contributor"
        v-for="(contributor, index) in $store.state.contributors"
        v-bind:key="index"
      >
        <a
          :href="'https://github.com/'+contributor.github"
          target="_blank"
          :name="'@'+contributor.github"
          :title="'@'+contributor.github"
        >
          <div class="img">
            <img
              :src="contributor.image"
              :name="'@'+contributor.github"
              :alt="'@'+contributor.github"
            >
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    text: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: true
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";
$size: 36px;

.contributors {
  margin-top: $size2;
  text-align: center;
  h3 {
    margin-bottom: $size2;
    font-size: $size3;
    // color: darken($grey, 30);
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 900;
  }
}
.container-contributors {
  margin: -4px;
}

.box-contributor {
  margin: 4px;
  .img {
    overflow: hidden;
    width: $size;
    height: $size;
    border-radius: 50%;
    background: #ddd;
    transition: 0.3s;

    &:hover {
      box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.16);
      transform: scale(1.1, 1.1);
    }

    img {
      width: $size;
      height: $size;
      object-fit: cover;
    }
  }
}
</style>

