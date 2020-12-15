<template>
    <div>
        <div class="section">
            <p class="is-size-5">Double</p>
            <p class="is-size-6"><strong> Array: </strong> {{ numbers }}</p>
            <p class="is-size-6"><strong> Double: </strong> {{ doubles }}</p>
            <p class="is-size-5">Full name</p>
            <p class="is-size-6"><strong> Array: </strong> {{ persons }}</p>
            <p class="is-size-6">
                <strong> Full name: </strong> {{ getFullNameByArray }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'Map',
})
export default class Map extends Vue {
    private numbers: number[] = [1, 5, 10, 15];
    private persons: object[] = [
        { firstname: 'Malcom', lastname: 'Reynolds' },
        { firstname: 'Kaylee', lastname: 'Frye' },
        { firstname: 'Jayne', lastname: 'Cobb' },
    ];

    private get doubles(): number[] {
        return this.numbers.map(function(num) {
            return num * 2;
        });
    }

    private getFullName(name): string {
        const fullname = [name.firstname, name.lastname].join(' ');
        return fullname;
    }

    private get getFullNameByArray(): string[] {
        return this.persons.map(this.getFullName);
    }
}
</script>

<style lang="scss" scoped></style>
