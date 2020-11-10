<template>
    <b-navbar
        class="top-navbar"
        :class="{ 'is-fixed': isFixed, 'is-sticky': isSticky }"
    >
        <template slot="brand">
            <top-navbar-item-link class="top-navbar_brand">
                <b-icon
                    class="top-navbar_left-menu"
                    icon="bars"
                    size="is-medium"
                />
            </top-navbar-item-link>
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
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2), 0 0px 10px rgba(0, 0, 0, 0.24);
    &.is-fixed {
        position: fixed;
        width: 100%;
        top: 0;
    }

    &.is-sticky {
        position: sticky;
        top: 0;
    }

    &_left-menu {
        &:hover {
            color: $main-color-medium-dark;
        }
        &:active {
            color: $main-color-medium-dark;
        }
    }
    &_brand {
        &:focus {
            color: #fff !important;
        }
    }
}
</style>
