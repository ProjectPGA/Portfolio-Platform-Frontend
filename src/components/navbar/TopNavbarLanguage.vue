<template>
    <b-navbar-dropdown
        role="menubar"
        aria-controls="st1"
        :collapsible="true"
        :right="true"
        class="top-navbar-language"
        :arrowless="true"
    >
        <template v-slot:label>
            <select-icon class="top-navbar-language_icon" icon="earth" />
        </template>
        <b-navbar-item
            :active="currentLanguage === 'es'"
            @click="changeLanguageToSpanish"
        >
            {{ $t('components.navigation.spanish') }}
        </b-navbar-item>
        <b-navbar-item
            :active="currentLanguage === 'en'"
            @click="changeLanguageToEnglish"
        >
            {{ $t('components.navigation.english') }}
        </b-navbar-item>
    </b-navbar-dropdown>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SelectIcon from '@/components/icons/SelectIcon.vue';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'TopNavbarLanguage',
    components: {
        SelectIcon,
    },
})
export default class TopNavbarLanguage extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get currentLanguage(): string {
        return this.mainStore.state.currentLanguage;
    }

    private changeLanguageToSpanish(): void {
        this.mainStore.actions.changeLanguageToSpanish();
    }

    private changeLanguageToEnglish(): void {
        this.mainStore.actions.changeLanguageToEnglish();
    }
}
</script>

<style lang="scss" scoped>
.top-navbar-language {
    /deep/.navbar-link {
        text-transform: uppercase;
        color: white !important;
        background: $primary;
    }
    /deep/.navbar-dropdown {
        padding: 0px;
        .navbar-item {
            padding-top: 10px;
            padding-bottom: 10px;
            padding-right: 35px;
        }
    }
    &_icon {
        margin-left: 2px !important;
    }
}
</style>
