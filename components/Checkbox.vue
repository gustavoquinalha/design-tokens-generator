<template>
  <div class>
    <div class="box-title">
      <span class="title">Design Tokens</span>
      <p class="paragraph">Select your tokens</p>
      <div class="container container-checkbox wrap">
        <div class v-for="(names, index) in $store.state" v-bind:key="index">
          <div @click="names.config.status = !names.config.status">
            <div class="checkbox" :class="{active : names.config.status}">{{names.config.name}}</div>
          </div>
        </div>
        <button class="btn btn-outline btn-checkbox">
          <i class="fas fa-plus icon-margin-right"></i> New Token
        </button>
      </div>
    </div>
  </div>
</template>
