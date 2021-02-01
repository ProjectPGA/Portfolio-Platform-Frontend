<template>
    <responsive-layout class="main-layout">
        <template>
            <div class="main-layout-content columns">
                <transition name="slide-fade-menu" mode="out-in">
                    <div
                        v-if="isShowLeftMenu"
                        class="column is-2 main-layout-content_left-menu"
                    >
                        <slot name="left" />
                    </div>
                </transition>
                <div class="column main-layout-content_right-content">
                    <slot />
                </div>
            </div>
        </template>

        <template slot="mobile">
            <div class="main-layout-content">
                <transition name="slide-fade-menu" mode="out-in">
                    <div
                        v-if="isShowLeftMenu"
                        class="main-layout-content_left-menu-mobile"
                        v-click-outside="closeLeftMenu"
                    >
                        <slot name="left" />
                    </div>
                </transition>
                <slot />

                <div class="main-layout-content_bottom-menu-mobile">
                    <slot name="bottom" />
                </div>
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

    private closeLeftMenu(): void {
        this.navigationStore.actions.closeLeftMenu();
    }
}
</script>

<style lang="scss" scoped>
.main-layout-content {
    min-height: 100vh;
    margin: 0px !important;

    &_left-menu {
        margin: 0px;
        padding: 0px !important;
        width: 300px !important;
        border-right: 1px solid rgba(0, 0, 0, 0.12);
    }

    &_right-content {
        padding: 0px;
        margin: 0px;
    }

    &_left-menu-mobile {
        top: 0px;
        left: 0px;
        width: 300px;
        height: 100%;
        z-index: 2000;
        position: absolute;
        background-color: #fff;
    }

    &_bottom-menu-mobile {
        left: 0px;
        width: 100%;
        bottom: 0px;
        height: 50px;
        position: absolute;
        background-color: #fff;
    }

    @include touch {
        min-height: unset;
    }
}
</style>
