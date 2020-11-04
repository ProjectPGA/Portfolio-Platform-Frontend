<template>
    <div class="section">
        <div class="columns">
            <div class="column is-2">
                <b-button type="is-info" @click="test()">
                    Change
                </b-button>
            </div>
            <div class="column">
                <b-tag type="is-success" v-if="testData">
                    {{ testData }}
                </b-tag>
                <b-tag type="is-danger" v-else>
                    {{ testData }}
                </b-tag>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({ name: 'Home' })
export default class Home extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get testData(): boolean {
        return this.mainStore.state.testData;
    }

    private test(): void {
        this.mainStore.actions.reverttestData();
    }
}
</script>

<style lang="scss" scoped></style>
