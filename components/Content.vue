<template>
  <div class="container container-content wrap">
    <div class="sidebar">
      <ul class="list-style-none sidebar-list">
        <li
          class="sidebar-item"
          v-for="(token, index) in $store.state.tokens"
          v-bind:key="index"
          :class="{active : selected === index}"
        >
          <div @click="selected = index" class="checkbox">{{token.name}}</div>
        </li>
        <li>
          <Modal/>
        </li>
      </ul>
    </div>

    <div class="content">
      <div class="box-content">
        <div
          class="form-group-block"
          v-for="(token, index) in $store.state.tokens"
          v-bind:key="index"
          :class="{selected: selected === index}"
        >
          <div class="content-block">
            <div class="box-subtitle">
              <h2 class="subtitle">{{token.name}}</h2>
            </div>

            <div class="content-block-form">
              <div class="form-content" v-for="(x, key, index) in token.list" v-bind:key="index">
                <div class="form-group">
                  <label class="label-control">{{token.name}} token</label>
                  <input type="text" class="form-control" v-model="x.token">
                </div>

                <div class="form-group">
                  <label class="label-control">{{token.name}} value</label>
                  <input type="text" class="form-control" v-model="x.value">
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
import Modal from "~/components/ModalNewToken.vue";
import Export from "~/components/ExportBottom.vue";
export default {
  components: {
    Modal,
    Export
  },
  data() {
    return {
      selected: 0
    };
  },
  methods: {
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
