<template>
    <div id="app">
        <main-layout>
            <template>
                <top-navbar />
                <router-view />
            </template>
        </main-layout>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import TopNavbar from '@/components/navbar/TopNavbar.vue';
import MainLayout from '@/components/common/MainLayout.vue';

@Component({
    name: 'App',
    components: {
        TopNavbar,
        MainLayout,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped></style>
