<template>
    <b-navbar-item
        class="top-navbar-link"
        :active="active"
        tag="router-link"
        :to="{ path: to }"
    >
        <span class="top-navbar-link_item">
            {{ title }}
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
    @Prop(Boolean) private active: boolean;
}
</script>

<style lang="scss" scoped>
.top-navbar-link {
    &:hover {
        -webkit-animation: opacity-change 0.8s;
        animation: opacity-change 0.8s;
    }
    @include touch {
        -webkit-animation: opacity-change 0.8s;
        animation: opacity-change 0.8s;
    }
}
</style>
