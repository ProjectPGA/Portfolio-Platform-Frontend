<template>
    <div class="about">
        <div class="section">
            <p class="title">About</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'About',
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped></style>
