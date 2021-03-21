<template>
    <div id="app">
        <maintenance-page v-if="isMaintenance" />
        <main-layout v-else>
            <template>
                <top-navbar />
            </template>
            <template v-slot:left>
                <left-menu />
            </template>
            <template v-slot:bottom>
                <bottom-mobile-navbar />
            </template>
        </main-layout>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import Axios from 'axios';

import LeftMenu from '@/components/navbar/LeftMenu.vue';
import TopNavbar from '@/components/navbar/TopNavbar.vue';
import MainLayout from '@/components/common/MainLayout.vue';
import BottomMobileNavbar from '@/components/navbar/BottomMobileNavbar.vue';

import MaintenancePage from '@/views/MaintenancePage.vue';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'App',
    components: {
        LeftMenu,
        TopNavbar,
        MainLayout,
        MaintenancePage,
        BottomMobileNavbar,
    },
})
export default class App extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get currentLanguage(): string {
        return this.mainStore.state.currentLanguage;
    }

    public created(): void {
        this.$i18n.locale = this.currentLanguage;
        Axios.defaults.headers.post['Accept-Language'] = this.currentLanguage;
    }

    private get isMaintenance(): boolean {
        return this.mainStore.state.isMaintenance;
    }

    @Watch('currentLanguage')
    private onChangeLanguage() {
        this.$i18n.locale = this.currentLanguage;
    }
}
</script>

<style lang="scss" scoped></style>
