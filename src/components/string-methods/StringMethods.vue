<template>
    <div class="string-methods">
        <div class="section">
            <p class="is-size-5"><strong> Text: </strong>{{ text }}</p>
            <p class="is-size-5">
                <strong> large Text: </strong>{{ largeText }}
            </p>
            <p class="is-size-5"><strong> list Text: </strong>{{ listText }}</p>
            <p class="is-size-6"><strong> charAt(4): </strong> {{ charAt }}</p>
            <p class="is-size-6">
                <strong> includes(Latte): </strong> {{ incluresLatte }}
            </p>
            <p class="is-size-6">
                <strong> includes(Milk): </strong> {{ incluresMilk }}
            </p>
            <p class="is-size-6">
                <strong> includes(latte,6): </strong> {{ incluresLatteSix }}
            </p>
            <p class="is-size-6">
                <strong> includes(and,6): </strong> {{ incluresAndSix }}
            </p>
            <p class="is-size-6">
                <strong> slice(6,9): </strong> {{ sliceString }}
            </p>
            <p class="is-size-6">
                <strong> large text trim(): </strong> {{ trimString }}
            </p>
            <p class="is-size-6">
                <strong> list text split(): </strong> {{ splitString }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'StringMethods',
})
export default class StringMethods extends Vue {
    private text: string = 'Latte and Code';
    private largeText: string = '   \n    \t    Latte and Code    \n\t    ';
    private listText: string = 'Javascript/VUE/Bulma/Buefy';

    private get charAt(): string {
        return this.text.charAt(4);
    }

    private get incluresLatte(): boolean {
        return this.text.includes('Latte');
    }

    private get incluresMilk(): boolean {
        return this.text.includes('Milk');
    }

    private get incluresAndSix(): boolean {
        return this.text.includes('and', 6);
    }

    private get incluresLatteSix(): boolean {
        return this.text.includes('Latte', 6);
    }

    private get sliceString(): string {
        return this.text.slice(6, 9);
    }

    private get trimString(): string {
        return this.largeText.trim();
    }

    private get splitString(): string[] {
        return this.listText.split('/');
    }
}
</script>

<style lang="scss" scoped></style>
