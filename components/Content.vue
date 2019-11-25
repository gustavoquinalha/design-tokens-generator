<template>
  <div class="container container-content">

    <modalRemoveToken/>
    <modalRemoveTokenItem/>

    <div class="sidebar">
      <ul class="list-style-none sidebar-list">
        <li class="title">Tokens</li>
        <li
          class="sidebar-item"
          v-for="(token, index) in $store.state.tokens"
          v-bind:key="index"
          :class="{active : $store.state.selected === index}"
        >
          <div
            @click="$store.state.selected = index"
            class="checkbox container align-items-center"
          >{{token.name}}</div>
        </li>
        <li>
          <ModalNewToken/>
        </li>
      </ul>
    </div>

    <div class="content">
      <div class="box-content">
        <div
          class="form-group-block"
          v-for="(token, index) in $store.state.tokens"
          v-bind:key="index"
          :class="{selected: $store.state.selected === index}"
        >
          <div class="content-block">
            <div class="box-subtitle">
              <h2 class="subtitle">
                {{token.name}}
                <button
                  class="btn btn-box btn-box-sm margin-left-10"
                  @click="$store.state.showModalRemoveToken = true"
                >
                  <i class="fas fa-trash" title="Remove token"></i>
                </button>
              </h2>
            </div>

            <div class="content-block-form">
              <div class="form-content" v-for="(x, key, index) in token.list" v-bind:key="index">
                <div class="form-group">
                  <label class="label-control">{{token.name}} token</label>
                  <input type="text" class="form-control" v-model="x.token">
                </div>

                <div class="form-group">
                  <label class="label-control">{{token.name}} value</label>
                  <div class="form-relative">
                    <input type="text" class="form-control" v-model="x.value">
                    <button class="btn btn-box btn-box-sm margin-left-10" @click="openRemove(key)">
                      <i class="fas fa-trash" title="Remove token"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="box-download">
                <span @click="addNewToken(index)">
                  <button class="btn btn-square-sm btn-checkbox">
                    <i class="fas fa-plus"></i>
                  </button>
                  New {{token.name}}
                </span>
              </div>

              <div class="space"></div>
              <div class="box-subtitle">
                <span class="subtitle">SASS</span>
              </div>
              <div class="code">
                <code class v-bind:key="index" v-show="token.status">
                  <span class="paragraph">{{'//' + token.name}}</span>
                  <div v-for="(x, index) in token.list" v-bind:key="index">
                    ${{x.token}}: {{x.value}};
                    <br>
                  </div>
                </code>
              </div>
            </div>
          </div>
        </div>
        <div
          v-show="!$store.state.tokens.find(token => token.status)"
          class="alert"
        >You must select a token to continue.</div>
      </div>
    </div>

    <div class>
      <Export/>
    </div>
  </div>
</template>

<script>
import ModalNewToken from "~/components/ModalNewToken.vue";
import Export from "~/components/export.vue";
import ModalRemoveToken from "~/components/modalRemoveToken.vue";
import ModalRemoveTokenItem from "~/components/modalRemoveTokenItem.vue";
export default {
  components: {
    ModalNewToken,
    Export,
    ModalRemoveToken,
    ModalRemoveTokenItem
  },
  methods: {
    openRemove(index) {
      this.$store.state.selectedItem = index;
      this.$store.state.showModalRemoveTokenItem = true;
    },
    addNewToken(index) {
      this.$store.state.tokens = this.$store.state.tokens.map((token, i) => {
        if (index == i) {
          token.list.push({
            token: "",
            value: ""
          });
        }
        return token;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/components/content.scss";
</style>
