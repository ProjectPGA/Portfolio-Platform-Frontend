<template>
    <maintenance-layout
        :title="$t('views.maintenance.title')"
        :subtitle="$t('views.maintenance.subtitle')"
        imageName="maintenance-image.svg"
    />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import MaintenanceLayout from '@/components/common/MaintenanceLayout.vue';

@Component({
    name: 'MaintenancePage',
    components: {
        MaintenanceLayout,
    },
})
export default class MaintenancePage extends Vue {}
</script>

<style lang="scss" scoped></style>
