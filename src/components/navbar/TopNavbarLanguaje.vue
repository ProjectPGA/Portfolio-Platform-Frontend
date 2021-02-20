<template>
    <b-navbar-dropdown
        :collapsible="true"
        :right="true"
        class="top-navbar-language"
        :arrowless="true"
    >
        <template v-slot:label>
            {{ currentLanguage }}
            <select-icon class="top-navbar-language_icon" icon="earth" />
        </template>
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

import SelectIcon from '@/components/icons/SelectIcon.vue';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'TopNavbarLanguaje',
    components: {
        SelectIcon,
    },
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
.top-navbar-language {
    /deep/.navbar-link {
        text-transform: uppercase;
    }
    /deep/.navbar-dropdown {
        padding: 0px;
    }
    &_icon {
        margin-left: 2px !important;
    }
}
</style>
