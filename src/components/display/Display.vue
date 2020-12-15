<template>
    <div class="columns display">
        <div class="column is-3 right-menu">
            <b-menu>
                <b-menu-list>
                    <b-menu-item
                        :active="isActiveFlexBoxMenu"
                        @click="showFlexBox"
                        label="Flex box"
                    />
                    <b-menu-item
                        :active="isActiveGridMenu"
                        @click="showGrid"
                        label="Grid"
                    />
                    <b-menu-item
                        :active="isActiveBlockMenu"
                        @click="showBlock"
                        label="Block"
                    />
                </b-menu-list>
            </b-menu>
        </div>
        <div class="column">
            <flex-box v-if="isActiveFlexBoxMenu" />
            <block v-if="isActiveBlockMenu" />
            <grid v-if="isActiveGridMenu" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Grid from '@/components/display/Grid.vue';
import Block from '@/components/display/Block.vue';
import FlexBox from '@/components/display/FlexBox.vue';
import Position from '@/components/position/Position.vue';

@Component({
    name: 'CssOverview',
    components: {
        Position,
        FlexBox,
        Block,
        Grid,
    },
})
export default class CssOverview extends Vue {
    private isActiveFlexBoxMenu: boolean = false;
    private isActiveBlockMenu: boolean = false;
    private isActiveGridMenu: boolean = false;

    private showFlexBox(): void {
        this.hideAll();
        this.isActiveFlexBoxMenu = true;
    }

    private showGrid(): void {
        this.hideAll();
        this.isActiveGridMenu = true;
    }

    private showBlock(): void {
        this.hideAll();
        this.isActiveBlockMenu = true;
    }

    private hideAll(): void {
        this.isActiveGridMenu = false;
        this.isActiveBlockMenu = false;
        this.isActiveFlexBoxMenu = false;
    }
}
</script>

<style lang="scss" scoped>
.display {
    height: 100%;
}
.right-menu {
    padding: 25px;
    border-right: 1px solid #ccc;
}
</style>
