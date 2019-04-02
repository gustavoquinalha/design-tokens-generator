<template>
  <div class="size margin contributors">
    <h3>Contributors</h3>
    <div class="container container-contributors wrap">
      <div class="box-contributor">
        <a
          href="https://github.com/gustavoquinalha"
          target="_blank"
          name="@gustavoquinalha"
          title="@gustavoquinalha"
        >
          <div class="img">
            <img
              src="https://avatars1.githubusercontent.com/u/13446801?s=460&v=4"
              alt="@gustavoquinalha"
              name="@gustavoquinalha"
            >
          </div>
        </a>
      </div>

      <div class="box-contributor">
        <a
          href="https://github.com/lucasfontesgaspareto"
          target="_blank"
          name="@lucasfontesgaspareto"
          title="@lucasfontesgaspareto"
        >
          <div class="img">
            <img
              src="https://avatars3.githubusercontent.com/u/8084651?s=460&v=4"
              alt="@lucasfontesgaspareto"
              name="@lucasfontesgaspareto"
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
  methods: {}
};
</script>

<style lang="scss">
@import "~/assets/css/_variables.scss";
$size: 36px;

.contributors {
  padding: $size7 0;
  h3 {
    margin-bottom: 8px;
  }
}
.container-contributors {
  margin: -8px;
}

.box-contributor {
  margin: 8px;
  .img {
    overflow: hidden;
    width: $size;
    height: $size;
    border-radius: 50%;
    background: #ddd;
    transition: 0.3s;

    &:hover {
      box-shadow: 2px 0 8px 0 rgba(0, 0, 0, 0.16);
      transform: scale(1.1, 1.1)
    }

    img {
      width: $size;
      height: $size;
      object-fit: cover;
    }
  }
}
</style>
