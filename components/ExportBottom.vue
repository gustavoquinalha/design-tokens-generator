<template>
  <div>
    <a ref="download" target="_blank" href download="tokens.scss"></a>
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
          <button
            class="btn btn-sm btn-white btn-save"
            :class="{saved: saved}"
            @click="save()"
            :disabled="saving"
          >
            <i class="fas fa-save icon-margin-right"></i>
            <span>.SASS</span>
          </button>

          <button class="btn btn-sm btn-white btn-copy" :class="{copied: copied}" @click="copy()">
            <i class="fas fa-copy icon-margin-right"></i>
            <span>Copy</span>
          </button>
        </div>

        <Footer/>
      </div>
    </div>

    <div class="export">
      <div class="size margin container justify-content-end">
        <div class="btn-show-result">
          <button class="btn" @click="toogleResult()">Export</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Footer
  },
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
@import "~/assets/css/components/export2.scss";
</style>
