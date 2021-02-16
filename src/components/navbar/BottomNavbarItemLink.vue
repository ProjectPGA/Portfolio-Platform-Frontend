<template>
    <div
        class="buttom-navbar-item"
        @click="goTo"
        :class="{ 'is-active': isActive }"
    >
        <select-icon :icon="icon" class="buttom-navbar-item_icon" />
        {{ title }}
        <slot />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import SelectIcon from '@/components/icons/SelectIcon.vue';

@Component({
    name: 'BottomNavbarItemLink',
    components: {
        SelectIcon,
    },
})
export default class BottomNavbarItemLink extends Vue {
    @Prop(String) private to: string;
    @Prop(String) private icon: string;
    @Prop(String) private title: string;
    @Prop(Boolean) private isActive: boolean;

    private goTo(): void {
        this.to ? this.$router.push(this.to) : null;
    }
}
</script>

<style lang="scss" scoped>
.buttom-navbar-item {
    height: 100%;
    color: #fff;
    display: flex;
    font-size: 14px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    &_icon {
        transform: scale(0.7);
    }
}
.is-active {
    color: $secondary;
    .buttom-navbar-item_icon {
        transform: scale(0.7);
        -webkit-animation: deform-size-icone 0.3s linear both;
        animation: deform-size-icon 0.3s linear both;
    }
}
</style>
