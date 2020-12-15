<template>
    <div class="columns array">
        <div class="column is-3 right-menu">
            <b-menu>
                <b-menu-list>
                    <b-menu-item
                        :active="isActiveFromMenu"
                        @click="showFromMenu"
                        label="From"
                    />
                    <b-menu-item
                        :active="isActiveMapMenu"
                        @click="showMapMenu"
                        label="Map"
                    />
                    <b-menu-item
                        :active="isActiveConcatMenu"
                        @click="showConcatMenu"
                        label="Concat"
                    />
                    <b-menu-item
                        :active="isActiveEverytMenu"
                        @click="showEveryMenu"
                        label="Every"
                    />
                    <b-menu-item
                        :active="isActiveFilltMenu"
                        @click="showFillMenu"
                        label="Fill"
                    />
                    <b-menu-item
                        :active="isActiveFiltertMenu"
                        @click="showFilterMenu"
                        label="Filter"
                    />
                </b-menu-list>
            </b-menu>
        </div>
        <div class="column">
            <from v-if="isActiveFromMenu" />
            <maps v-if="isActiveMapMenu" />
            <concat v-if="isActiveConcatMenu" />
            <every v-if="isActiveEverytMenu" />
            <fill v-if="isActiveFilltMenu" />
            <filters v-if="isActiveFiltertMenu" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import From from '@/components/array/From.vue';
import Maps from '@/components/array/Maps.vue';
import Concat from '@/components/array/Concat.vue';
import Every from '@/components/array/Every.vue';
import Fill from '@/components/array/Fill.vue';
import Filters from '@/components/array/Filters.vue';

@Component({
    name: 'Array',
    components: {
        From,
        Fill,
        Maps,
        Every,
        Concat,
        Filters,
    },
})
export default class Array extends Vue {
    private isActiveMapMenu: boolean = false;
    private isActiveFromMenu: boolean = true;
    private isActiveConcatMenu: boolean = false;
    private isActiveEverytMenu: boolean = false;
    private isActiveFilltMenu: boolean = false;
    private isActiveFiltertMenu: boolean = false;

    private showFromMenu(): void {
        this.hideAll();
        this.isActiveFromMenu = true;
    }
    private showMapMenu(): void {
        this.hideAll();
        this.isActiveMapMenu = true;
    }
    private showConcatMenu(): void {
        this.hideAll();
        this.isActiveConcatMenu = true;
    }
    private showEveryMenu(): void {
        this.hideAll();
        this.isActiveEverytMenu = true;
    }
    private showFillMenu(): void {
        this.hideAll();
        this.isActiveFilltMenu = true;
    }
    private showFilterMenu(): void {
        this.hideAll();
        this.isActiveFiltertMenu = true;
    }

    private hideAll(): void {
        this.isActiveMapMenu = false;
        this.isActiveFromMenu = false;
        this.isActiveConcatMenu = false;
        this.isActiveEverytMenu = false;
        this.isActiveFilltMenu = false;
        this.isActiveFiltertMenu = false;
    }
}
</script>

<style lang="scss" scoped>
.array {
    height: 100%;
}
.right-menu {
    padding: 25px;
    border-right: 1px solid #ccc;
}
</style>
