<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

// export default {
//   name: 'HomeX'
// }
// @Component
export default class HomeX extends Vue {
  private keyWord: string = ''
  search = (): void => {
    console.log(this.keyWord)
  }
}
</script>
<template>
  <div class="search_div">
    <div>{{keyWord}}</div>
    <b-input-group size="lg" class="mb-3 search_group">
      <b-form-input v-model="keyWord"></b-form-input>
      <b-input-group-append>
        <b-button size="sm" text="Button" variant="success" @click="search">搜索</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>
<style lang="scss">
// @import './src/theme/common/mixins/_flex.scss';
// @import './src/theme/common/mixins/_theme.scss';
.search_div {
  margin-top: 72px;
  padding: 16px 32px;
  //   @include flexbox();
  //   @include align-items(center);
  .search_group {
    margin: auto;
    max-width: 740px;
  }
}
</style>
