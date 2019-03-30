<template>
  <div class="export">
    <div class="box-title">
      <span class="title">Result</span>
    </div>
    <div class="export-block">
      <div class="code" v-for="(items, index) in $store.state" v-bind:key="index">
        <code v-for="(item, index) in items" v-bind:key="index">
          <br>
          ${{item.token}}: {{item.value}}
        </code>
      </div>
    </div>

    <div class="box-export container justify-content-end">
      <button class="btn">Exportar</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

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
}

.box-export {
  margin-top: $size2;
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
