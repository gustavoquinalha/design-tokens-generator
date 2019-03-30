<template>
  <div class="export" sticky-container>
    <div class="box-title margin-bottom-24">
      <span class="title">Result</span>
    </div>

    <div v-sticky sticky-offset="offset">
      <div class="export-block">
        <button class="btn btn-copy">copy</button>
        <code class="code" v-for="(items, index) in $store.state" v-bind:key="index">
          {{'//' + items.config.name}}
          <div v-for="(x, index) in items.list" v-bind:key="index">
            ${{x.token}}: {{x.value}};
            <br>
          </div>
        </code>
      </div>

      <div class="box-export container justify-content-end">
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
  .btn-copy {
    position: absolute;
    right: 4px;
    top: 4px;
    font-size: 12px;
  }
}

.box-export {
  margin-top: $size2;
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
