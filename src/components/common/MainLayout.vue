<template>
    <responsive-layout class="main-layout">
        <template>
            <div class="main-layout-content columns">
                <div class="column is-2 main-layout-content_left-menu">
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

@Component({
    name: 'MainLayout',
    components: {
        ResponsiveLayout,
    },
})
export default class MainLayout extends Vue {}
</script>

<style lang="scss" scoped>
.main-layout-content {
    &_left-menu {
        background-color: #c9edff;
    }
    &_right-content {
        padding-left: 0px !important;
    }
}
</style>
