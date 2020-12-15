<template>
    <b-navbar
        class="top-navbar"
        :class="{ 'is-fixed': isFixed, 'is-sticky': isSticky }"
        data-cy="top-navbar"
    >
        <template slot="brand">
            <top-navbar-item-link class="top-navbar_brand">
                <mq-layout mq="lg+">
                    <b-icon
                        class="top-navbar_left-menu"
                        icon="bars"
                        size="is-medium"
                        @click.native="changeStatusLeftMenu"
                    />
                </mq-layout>
            </top-navbar-item-link>
        </template>

        <template slot="start">
            <top-navbar-item-link
                to="/"
                :title="$t('components.navigation.home')"
                :active="this.$route.name === 'Home'"
            />
            <top-navbar-item-link
                to="/css"
                :title="$t('components.navigation.css')"
                :active="this.$route.name === 'Css'"
            />
            <top-navbar-item-link
                to="/javascript"
                :title="$t('components.navigation.javascript')"
                :active="this.$route.name === 'Javascript'"
            />
            <top-navbar-item-link
                to="/about"
                :title="$t('components.navigation.about')"
                :active="this.$route.name === 'About'"
            />
        </template>

        <template slot="end">
            <top-navbar-languaje />
        </template>
    </b-navbar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import TopNavbarItemLink from '@/components/navbar/TopNavbarItemLink.vue';
import TopNavbarLanguaje from '@/components/navbar/TopNavbarLanguaje.vue';

import navigationStore from '@/store/navigation-store/NavigationStore';

@Component({
    name: 'TopNavbar',
    components: {
        TopNavbarItemLink,
        TopNavbarLanguaje,
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
