<template>
  <section class="container">
    <div>
      <Menu/>
      {{name}}
    </div>
  </section>
</template>

<script>
import Menu from "~/components/menu.vue";

export default {
  components: {
    Menu
  },
  data() {
    return {
      name: 'teste'
    };
  }
};
</script>

<style>

</style>
