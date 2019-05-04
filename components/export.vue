<template>
  <div>
    <a ref="download" target="_blank" href download="tokens.scss"></a>
    <a ref="download-html" target="_blank" href download="tokens.html"></a>

    <div class="blackdrop" :class="{show : result}" @click="result = !result"></div>
    <div class="modal modal-lg" :class="{show : result}">
      <div class="modal-relative">
        <button class="btn btn-close" @click="result = !result">
          <i class="fas fa-times"></i>
        </button>

        <div class="box-subtitle margin-bottom-24">
          <span class="subtitle text-align-center">Export Design Tokens</span>
        </div>

        <div class="modal-export">
          <div class="tab-container">
            <div class="tab-item" :class="{active: actived==='sass'}" @click="actived = 'sass'">SASS</div>
            <div class="tab-item" :class="{active: actived==='html'}" @click="actived = 'html'">HTML</div>
          </div>

          <div id="divContent">
            <div class="tab-content content-sass" v-show="actived==='sass'">
              <div class="relative code">
                <code
                  v-for="(token, index) in $store.state.tokens"
                  v-bind:key="index"
                  v-show="token.status"
                >
                  <span class="paragraph">{{'//' + token.name}}</span>
                  <div v-for="(x, index) in token.list" v-bind:key="index">
                    ${{x.token}}: {{x.value}};
                  </div>
                  <br>
                </code>
              </div>
            </div>

            <div class="tab-content" ref="tabHTML" v-show="actived==='html'">
              <div class="relative html-container" style="font-weight: 300; line-height: 2;">
                <div
                  v-for="(token, index) in $store.state.tokens"
                  v-bind:key="index"
                  v-show="token.status"
                  style="margin-bottom: 32px"
                >
                  <strong style="color: $black;font-weight: 900;">{{token.name}}</strong>
                  <hr class="hr hr-black">
                  <div v-for="(x, index) in token.list" v-bind:key="index">
                    <span style="font-size: 14px;">{{'$' + x.token}}:</span>
                    <span
                      style="font-size: 14px; background: #000; color: #fff; padding: 4px 8px; border-radius: 4px;"
                    >{{x.value}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="box-export container align-center" v-show="actived==='sass'">
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

        <div class="box-export container align-center" v-show="actived==='html'">
          <button
            class="btn btn-sm btn-white btn-save"
            :class="{saved: saved}"
            :disabled="saving"
            @click="saveHTML()"
          >
            <i class="fas fa-save icon-margin-right"></i>
            <span>Save HTML</span>
          </button>
        </div>

        <contributors/>
      </div>
    </div>

    <div class="export btn-show-result">
      <div class="size margin container justify-content-end">
        <div class="show-animation">
          <button class="btn" @click="toogleResult()">Export</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import contributors from "~/components/contributors.vue";
export default {
  components: {
    contributors
  },
  data() {
    return {
      copied: false,
      result: false,
      saving: false,
      saved: false,
      actived: "sass"
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
      } finally {
        this.saving = false;
      }
    },
    async saveHTML() {
      try {
        this.saving = true;
        const text = this.copy();
        const setTrue = () => {
          this.saved = true;
          setTimeout(() => {
            this.saved = false;
          }, 3000);
        };
        const file = new Blob([`
          <html>
            <head>
              ${document.head.innerHTML}
            </head>
            <body style="padding:40px;">
              ${this.$refs.tabHTML.innerHTML}
            </body>
          </html>
        `], { type: "text/plain" })
        
        const link = URL.createObjectURL(file);
        
        this.$refs["download-html"].href = link;
        this.$refs["download-html"].click();
        setTrue();
      } catch (e) {
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
