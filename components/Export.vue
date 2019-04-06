<template>
  <div class="export" sticky-container>
    <a ref="download" target="_blank" href download="tokens.scss"></a>
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
      </div>

      <div
        class="box-export container justify-content-end"
        :class="{'control-responsive': !result}"
      >
        <button class="btn btn-save" :class="{saved: saved}" @click="save()" :disabled="saving">
          <i class="fas fa-save icon-margin-right"></i>
          <span>SAVE</span>
        </button>

        <button class="btn btn-copy" :class="{copied: copied}" @click="copy()">
          <i class="fas fa-copy icon-margin-right"></i>
          <span>COPY</span>
        </button>

        <button class="btn btn-close" @click="toogleResult()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      copied: false,
      result: false,
      saving: false,
      saved: false
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
        if (!ts.saving) {
          ts.copied = true;
          setTimeout(function() {
            ts.copied = false;
            console.log("te");
          }, 3000);
        }
      }

      if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(elm);
        range.select();
        document.execCommand("Copy");
        setTrue();
        return range.toString();
      } else if (window.getSelection) {
        // other browsers
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(elm);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("Copy");
        setTrue();
        return selection.toString();
      }
    },
    async save() {
      try {
        this.saving = true;
        const text = this.copy();

        const setTrue = () => {
          this.saved = true;
          setTimeout(() => {
            this.saved = false;
          }, 3000);
        };

        const file = new Blob([text], { type: "text/plain" }),
          link = URL.createObjectURL(file);

        this.$refs["download"].href = link;
        this.$refs["download"].click();

        setTrue();
      } catch (e) {
        console.log(e);
      } finally {
        this.saving = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/components/export.scss";
</style>
