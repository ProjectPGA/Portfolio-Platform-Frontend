<template>
    <div class="grid">
        <b-field label="Areas">
            <b-switch v-model="isShowAreas">Show Areas</b-switch>
        </b-field>
        <div v-if="!isShowAreas">
            <b-field label="Columns">
                <b-slider :max="10" v-model="columns" />
            </b-field>
            <b-field label="Rows">
                <b-slider :max="10" v-model="rows" />
            </b-field>
            <b-field label="Gap">
                <b-slider :max="50" v-model="gap" />
            </b-field>

            <b-field label="Column min">
                <b-slider :max="600" v-model="columnMin" />
            </b-field>

            <b-field label="Column max">
                <b-slider
                    :min="columnMin"
                    :max="600"
                    v-model="columnMax"
                ></b-slider>
            </b-field>

            <b-field label="Row min">
                <b-slider :max="600" v-model="rowMin" />
            </b-field>

            <b-field label="Row max">
                <b-slider :min="rowMin" :max="600" v-model="rowMax" />
            </b-field>

            <b-field label="Justify Item">
                <b-radio
                    v-for="(prop, id) in gridProps"
                    :key="id"
                    v-model="justifyItems"
                    name="justify-items"
                    :native-value="prop.value"
                >
                    {{ prop.title }}
                </b-radio>
            </b-field>

            <b-field label="Align Item">
                <b-radio
                    v-for="(prop, id) in gridProps"
                    :key="id"
                    v-model="alignItems"
                    name="align-items"
                    :native-value="prop.value"
                >
                    {{ prop.title }}
                </b-radio>
            </b-field>

            <b-field label="Justify Self item 1">
                <b-radio
                    v-for="(prop, id) in gridProps"
                    :key="id"
                    v-model="justifySelf"
                    name="justify-self-item"
                    :native-value="prop.value"
                >
                    {{ prop.title }}
                </b-radio>
            </b-field>

            <b-field label="Align Self item 1">
                <b-radio
                    v-for="(prop, id) in gridProps"
                    :key="id"
                    v-model="alignSelf"
                    name="align-self-item"
                    :native-value="prop.value"
                >
                    {{ prop.title }}
                </b-radio>
            </b-field>
        </div>

        <div
            class="container"
            :style="{
                gridTemplateColumns: gridColumns,
                gridTemplateRows: gridRows,
                gridGap: gridGap,
                justifyItems: justifyItems,
                alignItems: alignItems,
                alignSelf: alignSelf,
                justifySelf: justifySelf,
            }"
            v-if="!isShowAreas"
        >
            <div
                class="item"
                :style="{
                    alignSelf: alignSelf,
                    justifySelf: justifySelf,
                }"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, a?
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
        </div>

        <div class="container-areas" v-if="isShowAreas">
            <div class="sidebar-1">SIDEBAR 1</div>
            <div class="header">HEADER</div>
            <div class="contenido">CONTENIDO</div>
            <div class="widgets">WIDGET</div>
            <div class="footer">FOOTER</div>
            <div class="sidebar-2">SIDEBAR 2</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
    name: 'Grid',
})
export default class Grid extends Vue {
    private columns: number = 4;
    private rows: number = 4;
    private gap: number = 4;
    private columnMin: number = 100;
    private columnMax: number = 100;
    private rowMin: number = 100;
    private rowMax: number = 500;
    private isShowAreas: boolean = false;
    private alignItems: string = 'auto';
    private justifyItems: string = 'auto';
    private alignSelf: string = 'auto';
    private justifySelf: string = 'auto';

    private gridProps: object[] = [
        {
            value: 'start',
            title: 'Start',
        },
        {
            value: 'end',
            title: 'End',
        },
        {
            value: 'center',
            title: 'Center',
        },
        {
            value: 'stretch',
            title: 'Stretch',
        },
        {
            value: 'baseline',
            title: 'Baseline',
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

    private get gridColumns(): string {
        return `repeat(${this.columns}, minmax(${this.columnMin}px, ${this.columnMax}px))`;
    }

    private get gridRows(): string {
        return `repeat(${this.rows}, minmax(${this.rowMin}px, ${this.rowMax}px))`;
    }

    private get gridGap(): string {
        return `${this.gap}px`;
    }
}
</script>

<style lang="scss" scoped>
.grid {
    width: 100%;
    height: 100%;
}
.container {
    margin: auto;
    font-size: 50px;
    line-height: 50px;
    max-width: 1000px;
    text-align: center;
    border: 10px solid #000;
    margin-top: 150px;
    background-color: $main-color-light;
    div {
        display: block;
        padding: 20px;
        color: #fff;
        background-color: $main-color;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.23);
    }

    //  GRID
    display: grid;

    .item {
        // background-color: #ff8000;
        // grid-column-start: 2;
        // grid-column-end: 3;
    }
}

.container-areas {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(4, auto);
    grid-template-areas:
        'header 		header 		header'
        'sidebar-1 	contenido 	sidebar-2'
        'sidebar-1 	widgets 	sidebar-2'
        'footer 		footer 		footer';

    text-align: center;

    .header {
        background: $main-color-medium-light;
        grid-column-start: header;
        grid-column-end: header;
        color: white;
    }

    .sidebar-1 {
        background: $main-color-medium-dark;

        /* Form #1 */
        /* grid-column-start: sidebar-1;
	grid-column-end: sidebar-1;
	grid-row-start: sidebar-1;
	grid-row-end: sidebar-1; */

        /* Form #2 */
        /* grid-column: sidebar-1;
	grid-row: sidebar-1; */

        /* Forma  */
        grid-area: sidebar-1;

        color: white;
    }

    .contenido {
        background: $main-color-light;
        color: #000;
        grid-area: contenido;
    }

    .widgets {
        background: $main-color;
        grid-area: widgets;

        color: white;
    }

    .sidebar-2 {
        background: $main-color-medium-dark;
        grid-area: sidebar-2;

        color: white;
    }

    .footer {
        background: $main-color-dark;
        grid-area: footer;

        color: white;
    }
}
</style>
