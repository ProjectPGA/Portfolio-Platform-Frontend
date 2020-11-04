<template>
    <div class="maintenance-page">
        new change
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'Maintenance',
})
export default class Maintenance extends Vue {}
</script>

<style lang="scss" scoped>
.maintenance-page {
    background-color: red;
    color: white;
}
</style>
