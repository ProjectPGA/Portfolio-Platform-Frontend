<template>
    <div class="left-menu">
        <b-menu>
            <b-menu-list v-if="this.$route.name === 'Css'">
                <b-menu-item
                    :active="isShowCssDisplayMenu"
                    @click="openCssDisplayMenu"
                    label="Display"
                />
                <b-menu-item
                    :active="isShowCssPositionMenu"
                    @click="openCssPositionMenu"
                    label="Position"
                />
                <b-menu-item
                    :active="isShowCssBackgroundImageMenu"
                    @click="openCssBackgroundImageMenu"
                    label="Background Image"
                />
            </b-menu-list>
            <b-menu-list v-if="this.$route.name === 'Javascript'">
                <b-menu-item
                    :active="isShowJavascriptArrayMenu"
                    @click="openJavascriptArrayMenu"
                    label="Array"
                />
                <b-menu-item
                    :active="isShowJavascriptStringMethodsMenu"
                    @click="openJavascriptStringMethodsMenu"
                    label="String Methods"
                />
            </b-menu-list>
        </b-menu>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import navigationStore from '@/store/navigation-store/NavigationStore';

@Component({
    name: 'LeftMenu',
})
export default class LeftMenu extends Vue {
    private navigationStore = navigationStore.context(this.$store);

    private get isShowCssDisplayMenu(): boolean {
        return this.navigationStore.state.isShowCssDisplayMenu;
    }
    private get isShowCssPositionMenu(): boolean {
        return this.navigationStore.state.isShowCssPositionMenu;
    }
    private get isShowCssBackgroundImageMenu(): boolean {
        return this.navigationStore.state.isShowCssBackgroundImageMenu;
    }
    private get isShowJavascriptArrayMenu(): boolean {
        return this.navigationStore.state.isShowJavascriptArrayMenu;
    }
    private get isShowJavascriptStringMethodsMenu(): boolean {
        return this.navigationStore.state.isShowJavascriptStringMethodsMenu;
    }

    private openCssDisplayMenu(): void {
        this.navigationStore.actions.openCssDisplayMenu();
    }
    private openCssPositionMenu(): void {
        this.navigationStore.actions.openCssPositionMenu();
    }
    private openCssBackgroundImageMenu(): void {
        this.navigationStore.actions.openCssBackgroundImageMenu();
    }
    private openJavascriptArrayMenu(): void {
        this.navigationStore.actions.openJavascriptArrayMenu();
    }
    private openJavascriptStringMethodsMenu(): void {
        this.navigationStore.actions.openJavascriptStringMethodsMenu();
    }
}
</script>

<style lang="scss" scoped></style>
