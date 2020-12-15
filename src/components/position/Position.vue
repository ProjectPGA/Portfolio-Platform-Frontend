<template>
    <div class="position section">
        <b-field label="Position">
            <b-radio
                v-for="(prop, id) in positionProps"
                :key="id"
                v-model="position"
                name="position"
                :native-value="prop.value"
            >
                {{ prop.title }}
            </b-radio>
        </b-field>
        <b-field label="Right">
            <b-slider :max="100" v-model="right" />
        </b-field>
        <b-field label="Left">
            <b-slider :max="100" v-model="left" />
        </b-field>
        <b-field label="Top">
            <b-slider :max="100" v-model="top" />
        </b-field>
        <b-field label="Bottom">
            <b-slider :max="100" v-model="bottom" />
        </b-field>
        <div class="content">
            <div class="square" />
            <div
                :style="{
                    position: position,
                    right: `${right}px`,
                    left: `${left}px`,
                    top: `${top}px`,
                    bottom: `${bottom}px`,
                }"
                class="square especial-square"
            />
            <div class="square" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'Position',
})
export default class Position extends Vue {
    private position: string = 'relative';
    private right: number = 0;
    private left: number = 0;
    private top: number = 0;
    private bottom: number = 0;

    private positionProps: object[] = [
        {
            value: 'static',
            title: 'Static',
        },
        {
            value: 'relative',
            title: 'Relative',
        },
        {
            value: 'absolute',
            title: 'Absolute',
        },
        {
            value: 'fixed',
            title: 'Fixed',
        },
        {
            value: 'sticky',
            title: 'Sticky',
        },
    ];
}
</script>

<style lang="scss" scoped>
.content {
    background-color: $main-color-light;
    padding: 25px;
    min-height: 1500px;
    .square {
        background-color: $main-color-medium-dark;
        width: 100px;
        height: 100px;
        margin: 20px;
        display: inline-block;
    }
    .especial-square {
        background-color: $main-color-medium-light;
    }
}
</style>
