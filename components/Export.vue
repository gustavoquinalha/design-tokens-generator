<template>
  <div class="export" sticky-container>
    <div class="box-title margin-bottom-24">
      <span class="title">Result</span>
    </div>

    <div v-sticky sticky-offset="offset">
      <div class="export-block">
        <button class="btn btn-copy">
          <i class="fas fa-copy"></i>
        </button>
        <code class="code" v-for="(items, index) in $store.state" v-bind:key="index">
          {{'//' + items.config.name}}
          <div v-for="(x, index) in items.list" v-bind:key="index">
            ${{x.token}}: {{x.value}};
            <br>
          </div>
        </code>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore commodi harum vero quas quibusdam non distinctio dicta autem? Animi aut quasi aliquam itaque vitae quo sed nesciunt laborum enim.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore commodi harum vero quas quibusdam non distinctio dicta autem? Animi aut quasi aliquam itaque vitae quo sed nesciunt laborum enim.
      </div>
      <div class="box-export container justify-content-end">
        <button class="btn btn-outline">
          <i class="fas fa-image"></i>
        </button>
        <button class="btn">Exportar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    offset() {
      return {
        top: 80
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

.box-title {
  margin-bottom: 24px;
}

.export {
  flex-basis: 30%;
  position: relative;
}

.export-block {
  position: sticky;
  border-radius: $radius;
  padding: $size6;
  background: $black;
  color: $white;
  position: relative;
  height: calc(100vh - #{$menu-height} - #{$footer-height} - 80px);
  transition: 0.3s;
  overflow-y: auto;
  overflow-x: hidden;
  .btn-copy {
    position: absolute;
    right: $size1;
    top: $size1;
    font-size: 12px;
  }

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-track {
    background: lighten($black, 40);
  }

  &::-webkit-scrollbar-thumb {
    background: lighten($black, 20);
    transition: 0.3s;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: lighten($black, 30);
  }
}

@media (max-width: $media-query-medium) {
  .export-block {
    height: 50vh;
    background: red;
  }

  .vue-sticky-placeholder {
    height: 0 !important;
    padding-top: 0 !important;
  }

  .vue-sticky-el,
  .top-sticky {
    position: relative !important;
    top: initial !important;
    bottom: initial !important;
    left: initial !important;
    right: initial !important;
  }
}
.box-export {
  // position: absolute;
  // right: $size1;
  // bottom: $size1;
  .btn {
    margin: $size1;
  }
}

.code {
  display: block;
  margin-bottom: $size4;
}

@media (max-width: $media-query-large) {
  .export {
    flex-basis: 100%;
  }
}
.code {
  margin-bottom: $size4;
}

@media (max-width: $media-query-medium) {
  .export {
    padding: 0 $size4;
  }
}
</style>
