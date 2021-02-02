<template>
    <b-dropdown
        class="bottom-navbar-translations"
        aria-role="list"
        position="is-top-left"
        :mobile-modal="false"
        animation="slide-fade"
    >
        <template v-slot:trigger>
            <bottom-navbar-item-link
                :title="currentLanguage"
                icon="earth"
                class="bottom-navbar-translations_button"
            />
        </template>

        <b-dropdown-item
            :disabled="currentLanguage === 'es'"
            aria-role="listitem"
            @click="changeLanguajeToSpanish"
        >
            {{ $t('components.navigation.spanish') }}</b-dropdown-item
        >
        <b-dropdown-item
            :disabled="currentLanguage === 'en'"
            aria-role="listitem"
            @click="changeLanguajeToEnglish"
            >{{ $t('components.navigation.english') }}</b-dropdown-item
        >
    </b-dropdown>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BottomNavbarItemLink from '@/components/navbar/BottomNavbarItemLink.vue';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'BottomNavbarItemTranslation',
    components: {
        BottomNavbarItemLink,
    },
})
export default class BottomNavbarItemTranslation extends Vue {
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
.bottom-navbar-translations {
    /deep/.dropdown-trigger {
        height: 100%;
    }
    &_button {
        text-transform: uppercase;
    }
}
</style>
