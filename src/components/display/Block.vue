<template>
    <div class="block">
        <b-field label="Display">
            <b-radio v-model="display" name="display" native-value="block">
                Block
            </b-radio>

            <b-radio
                v-model="display"
                name="display"
                native-value="inline-block"
            >
                Inline Block
            </b-radio>
        </b-field>
        <b-field label="Squares">
            <b-slider :max="20" v-model="squares" />
        </b-field>
        <div class="container">
            <div
                :style="{
                    display: display,
                }"
                v-for="index in squares"
                :key="index"
                class="square"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'Block',
})
export default class Block extends Vue {
    private display: string = 'block';
    private squares: number = 5;
}
</script>

<style lang="scss" scoped>
.block {
    padding: 50px;
}
.container {
    .square {
        background-color: $main-color-medium-dark;
        width: 100px;
        height: 100px;
        margin: 20px;
    }
}
</style>
