<template>
    <top-navbar-item-link class="top-navbar-brand">
        <mq-layout mq="lg+">
            <b-icon
                class="top-navbar-brand_icon"
                icon="bars"
                size="is-medium"
                @click.native="changeStatusLeftMenu"
        /></mq-layout>
        <mq-layout :mq="['sm', 'md']"> </mq-layout>
    </top-navbar-item-link>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import navigationStore from '@/store/navigation-store/NavigationStore';

@Component({
    name: 'TopNavbarBrand',
})
export default class TopNavbarBrand extends Vue {
    private navigationStore = navigationStore.context(this.$store);

    private get isShowLeftMenu(): boolean {
        return this.navigationStore.state.isShowLeftMenu;
    }

    private changeStatusLeftMenu(): void {
        this.isShowLeftMenu
            ? this.navigationStore.actions.closeLeftMenu()
            : this.navigationStore.actions.openLeftMenu();
    }
}
</script>

<style lang="scss" scoped>
.top-navbar-brand {
    &:focus {
        color: #fff !important;
    }
    &_icon {
        &:hover {
            color: $main-color-medium-dark;
        }
        &:active {
            color: $main-color-medium-dark;
        }
    }
}
</style>
