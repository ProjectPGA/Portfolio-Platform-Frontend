<template>
    <div id="app">
        <top-navbar />
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import TopNavbar from '@/components/navbar/TopNavbar.vue';

@Component({
    name: 'App',
    components: {
        TopNavbar,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped></style>
