<template>
    <div class="Fill">
        <div class="section">
            <p class="is-size-5">Fill diferents arrays</p>
            <p class="is-size-6"><strong> Array 1: </strong> {{ array1 }}</p>
            <p class="is-size-6">
                <strong> fill with 0 position 2 until 4: </strong>
                {{ fillWith0Position2Until4 }}
            </p>
            <p class="is-size-6">
                <strong> fill with 5 from position 1: </strong>
                {{ fillWith5FromPosition1 }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'Fill',
})
export default class Fill extends Vue {
    private array1 = [1, 2, 3, 4, 5];

    private get fillWith0Position2Until4() {
        return this.array1.fill(0, 2, 4);
    }

    private get fillWith5FromPosition1() {
        return this.array1.fill(5, 1);
    }
}
</script>

<style lang="scss" scoped></style>
