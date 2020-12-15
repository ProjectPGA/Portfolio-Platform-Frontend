<template>
    <div class="background-image section">
        <b-field label="Repeat">
            <b-switch v-model="isNoRepeat">No Repeat</b-switch>
        </b-field>
        <b-field label="Position Size">
            <b-radio
                v-for="(prop, id) in backgroundSizeProps"
                :key="id"
                v-model="backgroundSize"
                name="position-size"
                :native-value="prop.value"
            >
                {{ prop.title }}
            </b-radio>
        </b-field>
        <b-field label="Position position">
            <b-radio
                v-for="(prop, id) in backgroundPositionProps"
                :key="id"
                v-model="backgroundPosition"
                name="position-position"
                :native-value="prop.value"
            >
                {{ prop.title }}
            </b-radio>
        </b-field>
        <b-field label="Width">
            <b-slider :max="1000" v-model="width" />
        </b-field>
        <b-field label="Height">
            <b-slider :max="1000" v-model="height" />
        </b-field>
        <div
            :style="{
                width: `${width}px`,
                height: `${height}px`,
                backgroundSize: backgroundSize,
                backgroundPosition: backgroundPosition,
                backgroundRepeat: isRepeat,
            }"
            class="image"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'BackgroundImage',
})
export default class BackgroundImage extends Vue {
    private width: number = 750;
    private height: number = 750;
    private backgroundSize: string = 'auto';
    private backgroundPosition: string = 'top';
    private isNoRepeat: boolean = false;

    private backgroundSizeProps: object[] = [
        {
            value: 'auto',
            title: 'Auto',
        },
        {
            value: 'cover',
            title: 'Cover',
        },
        {
            value: 'contain',
            title: 'Contain',
        },
    ];

    private backgroundPositionProps: object[] = [
        {
            value: 'top',
            title: 'Top',
        },
        {
            value: 'bottom',
            title: 'Bottom',
        },
        {
            value: 'center',
            title: 'Center',
        },
        {
            value: 'right',
            title: 'Right',
        },
        {
            value: 'left',
            title: 'Left',
        },
    ];

    private get isRepeat(): string {
        return this.isNoRepeat ? 'no-repeat' : 'repeat';
    }
}
</script>

<style lang="scss" scoped>
.background-image {
    width: 100%;
    height: 100%;
    .image {
        width: 100px;
        height: 100px;
        background-image: url('../../assets/img/image.jpg');
    }
}
</style>
