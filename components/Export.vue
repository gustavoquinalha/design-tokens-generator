<template>
  <div class="export" sticky-container>
    <div class="box-title margin-bottom-24">
      <span class="title">Result</span>
    </div>

    <div v-sticky sticky-offset="offset">
      <div class="export-block">
        <button class="btn btn-copy" @click="copy()">
          <i class="fas fa-copy"></i>
        </button>
        <div id="divContent">
          <code class="code" v-for="(items, index) in $store.state" v-bind:key="index">
            {{'//' + items.config.name}}
            <div v-for="(x, index) in items.list" v-bind:key="index">
              ${{x.token}}: {{x.value}};
              <br>
            </div>
          </code>
        </div>
      </div>
      <div class="box-export container justify-content-end">
        <!-- <button class="btn btn-outline">
          <i class="fas fa-image"></i>
        </button>-->
        <button class="btn" @click="exportSass()">Export SASS</button>
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
  },
  methods: {
    exportSass() {
      // var fs = require("fs");
      //
      // fs.writeFile("newfile.txt", "Learn Node FS module", function(err) {
      //   if (err) throw err;
      //   console.log("File is created successfully.");
      // });
    },

    copy() {
      var elm = document.getElementById("divContent");
      // for Internet Explorer

      if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(elm);
        range.select();
        document.execCommand("Copy");
        alert("Copied");
      } else if (window.getSelection) {
        // other browsers

        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(elm);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("Copy");
        alert("Copied");
      }
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
  overflow: auto;
  .btn-copy {
    position: absolute;
    right: $size1;
    top: $size1;
    font-size: 12px;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
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

.box-export {
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

@media (max-width: $media-query-medium) {
  .export-block {
    height: 50vh;
    padding: $size3;
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

  .export {
    padding: 0 $size4;
  }
}
</style>
