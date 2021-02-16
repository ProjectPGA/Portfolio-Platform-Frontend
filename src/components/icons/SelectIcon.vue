<template>
    <earth-icon class="icon" v-if="icon === 'earth'" />
    <home-icon class="icon" :isActive="isActive" v-else-if="icon === 'home'" />
    <menu-icon class="icon" :isActive="isActive" v-else-if="icon === 'menu'" />
    <people-icon
        class="icon"
        :isActive="isActive"
        v-else-if="icon === 'people'"
    />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import HomeIcon from './HomeIcon.vue';
import EarthIcon from './EarthIcon.vue';
import MenuIcon from './MenuIcon.vue';
import PeopleIcon from './PeopleIcon.vue';

@Component({
    name: 'SelectIcon',
    components: {
        HomeIcon,
        EarthIcon,
        MenuIcon,
        PeopleIcon,
    },
})
export default class SelectIcon extends Vue {
    @Prop(String) private icon: string;
    @Prop(Boolean) private isActive: boolean;
}
</script>

<style lang="scss" scoped></style>
