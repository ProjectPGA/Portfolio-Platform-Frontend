<template>
    <div class="every">
        <div class="section">
            <p class="is-size-5">Is more than 10</p>
            <p class="is-size-6"><strong> Array 1: </strong> {{ array1 }}</p>
            <p class="is-size-6"><strong> Array 2: </strong> {{ array2 }}</p>
            <p class="is-size-6">
                <strong> is all items from Array 1 more than 10?: </strong>
                {{ isArray1MoreThanTen }}
            </p>
            <p class="is-size-6">
                <strong> is all items from Array 1 more than 10?: </strong>
                {{ isArray2MoreThanTen }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'Every',
})
export default class Every extends Vue {
    private array1 = [12, 5, 8, 130, 44];
    private array2 = [12, 54, 18, 130, 44];
    private numMax: number = 10;

    private isMoreThanTen(elm, index): boolean {
        return elm >= 10;
    }

    private get isArray1MoreThanTen(): boolean {
        return this.array1.every(elem => {
            return elem >= this.numMax;
        });
    }

    private get isArray2MoreThanTen(): boolean {
        return this.array2.every(elem => {
            return elem >= this.numMax;
        });
    }
}
</script>

<style lang="scss" scoped></style>
