<template>
    <b-navbar-item
        class="top-navbar-link"
        :active="isActive"
        tag="router-link"
        :to="{ path: to }"
    >
        <span class="top-navbar-link_item">
            {{ title }}
            <slot />
        </span>
    </b-navbar-item>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    name: 'TopNavbarItemLink',
})
export default class TopNavbarItemLink extends Vue {
    @Prop(String) private to: string;
    @Prop(String) private title: string;
    @Prop(Boolean) private isActive: boolean;
}
</script>

<style lang="scss" scoped>
.top-navbar-link {
    &_item {
        min-width: 1.5rem;
        display: flex;
    }
    &:hover {
        -webkit-animation: opacity-change 0.2s;
        animation: opacity-change 0.2s;
    }
    &:active,
    &:hover,
    &:focus {
        background: $primary;
        background: -moz-$whinter-sky-gradient;
        background: -web-$whinter-sky-gradient;
        background: $whinter-sky-gradient;
    }
}
</style>
