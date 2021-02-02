<template>
    <div class="bottom-mobile-navbar columns is-mobile">
        <bottom-navbar-item-link
            to="/about"
            :title="$t('components.navigation.about')"
            icon="people"
            :isActive="this.$route.name === 'About'"
            class="bottom-mobile-navbar_item column"
        />
        <bottom-navbar-item-link
            to="/"
            :title="$t('components.navigation.home')"
            icon="home"
            :isActive="this.$route.name === 'Home'"
            class="bottom-mobile-navbar_item column"
        />
        <bottom-navbar-item-translation
            class="bottom-mobile-navbar_item column"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BottomNavbarItemLink from '@/components/navbar/BottomNavbarItemLink.vue';
import BottomNavbarItemTranslation from '@/components/navbar/BottomNavbarItemTranslation.vue';

@Component({
    name: 'BottomMobileNavbar',
    components: {
        BottomNavbarItemLink,
        BottomNavbarItemTranslation,
    },
})
export default class BottomMobileNavbar extends Vue {}
</script>

<style lang="scss" scoped>
.bottom-mobile-navbar {
    background-color: $main-color-dark;
    width: 100%;
    height: 100%;
    margin: 0px;
    &_item {
        margin: 0px;
        padding: 0px;
        height: 100%;
    }
}
</style>
