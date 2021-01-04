<template>
    <b-navbar-dropdown
        :label="currentLanguage"
        :collapsible="true"
        :right="true"
        class="top-navbar-languaje"
    >
        <b-navbar-item
            :active="currentLanguage === 'es'"
            @click="changeLanguajeToSpanish"
        >
            {{ $t('components.navigation.spanish') }}
        </b-navbar-item>
        <b-navbar-item
            :active="currentLanguage === 'en'"
            @click="changeLanguajeToEnglish"
        >
            {{ $t('components.navigation.english') }}
        </b-navbar-item>
    </b-navbar-dropdown>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'TopNavbarLanguaje',
})
export default class TopNavbarLanguaje extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get currentLanguage(): string {
        return this.mainStore.state.currentLanguage;
    }

    private changeLanguajeToSpanish(): void {
        this.mainStore.actions.changeLanguajeToSpanish();
    }

    private changeLanguajeToEnglish(): void {
        this.mainStore.actions.changeLanguajeToEnglish();
    }
}
</script>

<style lang="scss" scoped>
.top-navbar-languaje {
    /deep/.navbar-link {
        text-transform: uppercase;
    }
}
</style>
