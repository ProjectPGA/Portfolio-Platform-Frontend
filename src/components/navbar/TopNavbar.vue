<template>
    <b-navbar
        class="top-navbar"
        :class="{ 'is-fixed': isFixed, 'is-sticky': isSticky }"
        data-cy="top-navbar"
        :mobile-burger="false"
    >
        <template slot="brand">
            <top-navbar-item-link class="top-navbar_brand">
                <select-icon
                    icon="menu"
                    class="buttom-navbar-item_left-menu"
                    @click.native="changeStatusLeftMenu"
                />
            </top-navbar-item-link>
        </template>

        <template slot="start">
            <top-navbar-item-link
                to="/"
                :title="$t('components.navigation.home')"
                :isActive="this.$route.name === 'Home'"
            />
            <top-navbar-item-link
                to="/about"
                :title="$t('components.navigation.about')"
                :isActive="this.$route.name === 'About'"
            />
        </template>

        <template slot="end">
            <top-navbar-language />
        </template>
    </b-navbar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import SelectIcon from '@/components/icons/SelectIcon.vue';
import TopNavbarItemLink from '@/components/navbar/TopNavbarItemLink.vue';
import TopNavbarLanguage from '@/components/navbar/TopNavbarLanguage.vue';

import navigationStore from '@/store/navigation-store/NavigationStore';

@Component({
    name: 'TopNavbar',
    components: {
        SelectIcon,
        TopNavbarItemLink,
        TopNavbarLanguage,
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
    box-shadow: 0 0 0.65rem 0.15rem rgba(0, 0, 0, 0.2),
        0 0rem 0.65rem rgba(0, 0, 0, 0.24);

    &.is-fixed {
        position: fixed;
        width: 100%;
        top: 0;
    }
    &.is-sticky {
        position: sticky;
        top: 0;
    }
    &_brand {
        &:active,
        &:hover,
        &:focus {
            color: white !important;
            background: $primary;
        }
    }
}
</style>
