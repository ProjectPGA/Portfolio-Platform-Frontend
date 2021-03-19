<template>
    <div class="left-menu">
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
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import TopNavbarItemLink from '@/components/navbar/TopNavbarItemLink.vue';

@Component({
    name: 'LeftMenu',
    components: {
        TopNavbarItemLink,
    },
})
export default class LeftMenu extends Vue {}
</script>

<style lang="scss" scoped>
.left-menu {
    background-color: $secondary;
    width: 100%;
    height: 100%;
}
</style>
