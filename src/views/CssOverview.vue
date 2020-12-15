<template>
    <div class="css-overview">
        <display v-if="isShowCssDisplayMenu" />
        <position v-if="isShowCssPositionMenu" />
        <background-image v-if="isShowBackgroundImageMenu" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Display from '@/components/display/Display.vue';
import Position from '@/components/position/Position.vue';
import BackgroundImage from '@/components/background-image/BackgroundImage.vue';

import navigationStore from '@/store/navigation-store/NavigationStore';

@Component({
    name: 'CssOverview',
    components: {
        Display,
        Position,
        BackgroundImage,
    },
})
export default class CssOverview extends Vue {
    private navigationStore = navigationStore.context(this.$store);

    private get isShowCssDisplayMenu(): boolean {
        return this.navigationStore.state.isShowCssDisplayMenu;
    }
    private get isShowCssPositionMenu(): boolean {
        return this.navigationStore.state.isShowCssPositionMenu;
    }
    private get isShowBackgroundImageMenu(): boolean {
        return this.navigationStore.state.isShowCssBackgroundImageMenu;
    }
}
</script>

<style lang="scss" scoped>
.css-overview {
    height: 100%;
}
</style>
