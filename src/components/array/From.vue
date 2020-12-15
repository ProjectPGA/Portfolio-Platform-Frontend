<template>
    <div class="from">
        <div class="section">
            <p class="is-size-5">Create an array from string</p>
            <p class="is-size-6"><strong> Text: </strong> {{ text }}</p>
            <p class="is-size-6"><strong> Array: </strong> {{ arrayString }}</p>
        </div>
        <div class="section">
            <p class="is-size-5">Double</p>
            <p class="is-size-6"><strong> Array: </strong> {{ array }}</p>
            <p class="is-size-6">
                <strong> Double: </strong> {{ arrayNoDuplicates }}
            </p>
        </div>
        <div class="section">
            <p class="is-size-5">First Five Numbers</p>
            <p class="is-size-6">
                <strong> Array: </strong> {{ firstFiveNumbers }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'From',
})
export default class From extends Vue {
    private text: string = 'Hello World';
    private array: number[] = [1, 2, 3];

    private get arrayString(): string[] {
        return Array.from(this.text);
    }

    private get arrayNoDuplicates() {
        return Array.from(this.array, v => v + v);
    }

    private get firstFiveNumbers() {
        return Array.from({ length: 5 }, (v, i) => i);
    }
}
</script>

<style lang="scss" scoped></style>
