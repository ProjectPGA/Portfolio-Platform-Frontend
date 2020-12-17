<template>
    <responsive-layout class="main-layout">
        <template>
            <div class="main-layout-content columns">
                <div
                    v-if="isShowLeftMenu"
                    class="column is-2 main-layout-content_left-menu"
                >
                    <slot name="left"></slot>
                </div>
                <div class="column main-layout-content_right-content">
                    <slot></slot>
                </div>
            </div>
        </template>

        <template slot="mobile">
            <div class="main-layout-content">
                <slot></slot>
            </div>
        </template>
    </responsive-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ResponsiveLayout from '@/components/common/ResponsiveLayout.vue';

import navigationStore from '@/store/navigation-store/NavigationStore';

@Component({
    name: 'MainLayout',
    components: {
        ResponsiveLayout,
    },
})
export default class MainLayout extends Vue {
    private navigationStore = navigationStore.context(this.$store);

    private get isShowLeftMenu(): boolean {
        return this.navigationStore.state.isShowLeftMenu;
    }
}
</script>

<style lang="scss" scoped>
.main-layout-content {
    min-height: 102vh;
    margin: 0px !important;

    &_left-menu {
        border-right: 1px solid rgba(0, 0, 0, 0.12);
        padding: 0px !important;
        margin: 0px;
    }

    &_right-content {
        padding: 0px !important;
        margin: 0px;
    }
}
</style>
