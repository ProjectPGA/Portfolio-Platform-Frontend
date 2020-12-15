<template>
    <div class="concat">
        <div class="section">
            <p class="is-size-5">Concat diferents arrays</p>
            <p class="is-size-6"><strong> Array 1: </strong> {{ array1 }}</p>
            <p class="is-size-6"><strong> Array 2: </strong> {{ array2 }}</p>
            <p class="is-size-6">
                <strong> Concat + push 4: </strong> {{ numConcat }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'Concat',
})
export default class Concat extends Vue {
    private array1: any = [[1]];
    private array2 = [2, [3]];

    private get numConcat(): [] {
        const numConcat = this.array1.concat(this.array2);
        this.array1[0].push(4);
        return numConcat;
    }
}
</script>

<style lang="scss" scoped></style>
