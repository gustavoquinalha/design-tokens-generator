<template>
  <div>
    <div class="blackdrop" :class="{show : result}" @click="result = !result"></div>
    <div class="modal modal-lg" :class="{show : result}">
      <div class="modal-relative">
        <button class="btn btn-close" @click="result = !result">
          <i class="fas fa-times"></i>
        </button>

        <div class="box-subtitle margin-bottom-24">
          <span class="subtitle text-align-center">Export SASS</span>
        </div>

        <div class="modal-content relative code" id="divContent">
          <code
            v-for="(token, index) in $store.state.tokens"
            v-bind:key="index"
            v-show="token.status"
          >
            <span class="paragraph">{{'//' + token.name}}</span>
            <div v-for="(x, index) in token.list" v-bind:key="index">
              ${{x.token}}: {{x.value}};
              <br>
            </div>
          </code>
        </div>

        <div class="box-export container align-center">
          <button class="btn btn-copy" @click="copy()" :class="{copied: copied}">
            <i class="fas fa-copy"></i>
          </button>
        </div>

        <Footer/>
      </div>
    </div>

    <div class="export">
      <div class="size margin container justify-content-end">
        <div class="btn-show-result">
          <button class="btn" @click="toogleResult()">Export SASS</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Footer
  },
  data() {
    return {
      copied: false,
      result: true
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
@import "~/assets/css/components/export2.scss";
</style>
