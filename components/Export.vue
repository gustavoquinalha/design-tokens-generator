<template>
  <div class="export" sticky-container>
    <div class="btn-show-result">
      <button class="btn" @click="toogleResult()">Export SASS</button>
    </div>

    <div class="box-title margin-bottom-24">
      <span class="title">Result</span>
    </div>

    <div v-sticky sticky-offset="offset">
      <div class="export-block" :class="{show: result}">
        <div id="divContent">
          <code
            class="code"
            v-for="(items, index) in $store.state"
            v-bind:key="index"
            v-show="items.config.status"
          >
            <span class="paragraph">{{'//' + items.config.name}}</span>
            <div v-for="(x, index) in items.list" v-bind:key="index">
              ${{x.token}}: {{x.value}};
              <br>
            </div>
          </code>
        </div>
      </div>

      <div class="box-export container justify-content-end" :class="{'control-responsive': !result}">
        <button class="btn btn-copy" @click="copy()" :class="{copied: copied}">
          <i class="fas fa-copy"></i>
        </button>

        <button class="btn btn-close" @click="toogleResult()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copied: false,
      result: false
    };
  },
  computed: {
    offset() {
      return {
        top: 80
      };
    }
  },
  methods: {
    toogleResult() {
      console.log("teste");
      this.result = !this.result;
    },
    copy() {
      var elm = document.getElementById("divContent");
      var ts = this;
      // for Internet Explorer

      function setTrue() {
        ts.copied = true;
        setTimeout(function() {
          ts.copied = false;
          console.log("te");
        }, 3000);
      }

      if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(elm);
        range.select();
        document.execCommand("Copy");
        setTrue();
      } else if (window.getSelection) {
        // other browsers
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(elm);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("Copy");
        setTrue();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/components/export.scss";
</style>
