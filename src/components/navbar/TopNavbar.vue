<template>
    <b-navbar
        class="top-navbar"
        :class="{ 'is-fixed': isFixed, 'is-sticky': isSticky }"
    >
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
            </b-navbar-item>
        </template>
        <template slot="start">
            <top-navbar-item-link
                to="/"
                title="Home"
                :active="this.$route.name === 'Home'"
            />
            <top-navbar-item-link
                to="/About"
                title="About"
                :active="this.$route.name === 'About'"
            />
        </template>

        <template slot="end"></template>
    </b-navbar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import TopNavbarItemLink from '@/components/navbar/TopNavbarItemLink.vue';

@Component({
    name: 'TopNavbar',
    components: {
        TopNavbarItemLink,
    },
})
export default class TopNavbar extends Vue {
    @Prop({
        type: Boolean,
        default: false,
    })
    private isFixed: boolean;
    @Prop({
        type: Boolean,
        default: false,
    })
    private isSticky: boolean;
}
</script>

<style lang="scss" scoped>
.top-navbar {
    &.is-fixed {
        position: fixed;
        width: 100%;
        top: 0;
    }

    &.is-sticky {
        position: sticky;
        top: 0;
    }
}
</style>
