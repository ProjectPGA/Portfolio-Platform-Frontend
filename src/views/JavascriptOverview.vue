<template>
    <div class="javascript-overview all-page">
        <transition name="slide-fade">
            <array v-if="isShowJavascriptArrayMenu" />
        </transition>
        <transition name="slide-fade">
            <string-methods v-if="isShowJavascriptStringMethodsMenu" />
        </transition>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Array from '@/components/array/Array.vue';
import StringMethods from '@/components/string-methods/StringMethods.vue';

import navigationStore from '@/store/navigation-store/NavigationStore';

@Component({
    name: 'JavascriptOverview',
    components: {
        Array,
        StringMethods,
    },
})
export default class JavascriptOverview extends Vue {
    private navigationStore = navigationStore.context(this.$store);

    private get isShowJavascriptArrayMenu(): boolean {
        return this.navigationStore.state.isShowJavascriptArrayMenu;
    }
    private get isShowJavascriptStringMethodsMenu(): boolean {
        return this.navigationStore.state.isShowJavascriptStringMethodsMenu;
    }
}
</script>

<style lang="scss" scoped>
.css-overview {
    height: 100%;
}
</style>
