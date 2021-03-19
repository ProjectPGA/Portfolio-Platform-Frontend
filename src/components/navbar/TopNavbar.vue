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

        <template slot="start"></template>

        <template slot="end">
            <top-navbar-language class="top-navbar_language" />
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
    background-color: rgba(0, 0, 0, 0);

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
            color: $winter-sky;
        }
        &:active {
            color: $winter-sky;
        }
    }
    &_brand {
        &:focus {
            color: #fff !important;
        }
    }
}
</style>
