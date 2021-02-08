<template>
    <div
        class="buttom-navbar-item"
        @click="goTo"
        :class="{ 'is-active': isActive }"
    >
        <b-icon class="buttom-navbar-item_icon" :icon="icon" size="is-small" />
        {{ title }}
        <slot />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    name: 'BottomNavbarItemLink',
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
}
.is-active {
    color: $secondary;
    .buttom-navbar-item_icon {
        -webkit-animation: deform-change 0.3s linear both;
        animation: deform-change 0.3s linear both;
    }
}
</style>
