<template>
    <div class="left-menu"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'LeftMenu',
})
export default class LeftMenu extends Vue {}
</script>

<style lang="scss" scoped>
.left-menu {
    background-color: $primary;
    width: 100%;
    height: 100%;
}
</style>
