<template>
    <div class="filters">
        <div class="section">
            <p class="is-size-5">Concat diferents arrays</p>
            <p class="is-size-6"><strong> Array 1: </strong> {{ array1 }}</p>
            <p class="is-size-6"><strong> Array 2: </strong> {{ array2 }}</p>
            <p class="is-size-6">
                <strong> Filter Array 1 by 6 length: </strong>
                {{ filterByWordsWith6 }}
            </p>
            <p class="is-size-6">
                <strong> Filter Array 2 by 6 length using method: </strong>
                {{ filterByWordsWith6Method }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'Filters',
})
export default class Filters extends Vue {
    private array1: string[] = [
        'spray',
        'limit',
        'elite',
        'exuberant',
        'destruction',
        'present',
    ];

    private array2: number[] = [12, 5, 8, 130, 44];

    private isMoreThan10(elem): boolean {
        return elem >= 10;
    }

    private get filterByWordsWith6(): string[] {
        return this.array1.filter(word => word.length > 6);
    }

    private get filterByWordsWith6Method(): number[] {
        return this.array2.filter(num => this.isMoreThan10(num));
    }
}
</script>

<style lang="scss" scoped></style>
