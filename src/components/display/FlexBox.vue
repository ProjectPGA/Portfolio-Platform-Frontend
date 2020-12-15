<template>
    <div class="flex-box section">
        <div class="field">
            <div class="block">
                <b-field label="Flex wrap">
                    <b-radio
                        v-for="(prop, id) in flexWrapProps"
                        :key="id"
                        v-model="flexWrap"
                        name="flex-wrap"
                        :native-value="prop.value"
                    >
                        {{ prop.title }}
                    </b-radio>
                </b-field>

                <b-field label="Flex Direction">
                    <b-radio
                        v-for="(prop, id) in flexDirectionProps"
                        :key="id"
                        v-model="flexDirection"
                        name="flex-direction"
                        :native-value="prop.value"
                    >
                        {{ prop.title }}
                    </b-radio>
                </b-field>

                <b-field label="Justify Content">
                    <b-radio
                        v-for="(prop, id) in flexProps"
                        :key="id"
                        v-model="justifyContent"
                        name="justify-content"
                        :native-value="prop.value"
                    >
                        {{ prop.title }}
                    </b-radio>
                </b-field>

                <b-field label="Align Content">
                    <b-radio
                        v-for="(prop, id) in flexProps"
                        :key="id"
                        v-model="alignContent"
                        name="align-content"
                        :native-value="prop.value"
                    >
                        {{ prop.title }}
                    </b-radio>
                </b-field>

                <b-field label="Justify Self item 10">
                    <b-radio
                        v-for="(prop, id) in flexProps"
                        :key="id"
                        v-model="justifySelf"
                        name="justify-self"
                        :native-value="prop.value"
                    >
                        {{ prop.title }}
                    </b-radio>
                </b-field>

                <b-field label="Align Self item 10">
                    <b-radio
                        v-for="(prop, id) in flexProps"
                        :key="id"
                        v-model="alignSelf"
                        name="align-self"
                        :native-value="prop.value"
                    >
                        {{ prop.title }}
                    </b-radio>
                </b-field>

                <b-field label="Flex grow">
                    <b-slider :max="10" v-model="flexGrow" />
                </b-field>
                <b-field label="Flex grow even item ">
                    <b-slider :max="10" v-model="flexGrowEven" />
                </b-field>
                <b-field label="Flex grow item 10">
                    <b-slider :max="10" v-model="flexGrowTen" />
                </b-field>
            </div>
        </div>
        <div
            class="container-custom"
            :style="{
                flexDirection: flexDirection,
                justifyContent: justifyContent,
                alignContent: alignContent,
                flexWrap: flexWrap,
            }"
        >
            <div class="item-1" :style="{ flexGrow: flexGrow }">1</div>
            <div class="item-2" :style="{ flexGrow: flexGrowEven }">2</div>
            <div class="item-3" :style="{ flexGrow: flexGrow }">3</div>
            <div class="item-4" :style="{ flexGrow: flexGrowEven }">4</div>
            <div class="item-5" :style="{ flexGrow: flexGrow }">5</div>
            <div class="item-6" :style="{ flexGrow: flexGrowEven }">6</div>
            <div class="item-7" :style="{ flexGrow: flexGrow }">7</div>
            <div class="item-8" :style="{ flexGrow: flexGrowEven }">8</div>
            <div class="item-9" :style="{ flexGrow: flexGrow }">9</div>
            <div
                class="item-10"
                :style="{
                    flexGrow: flexGrowTen,
                    alignSelf: alignSelf,
                    justifySelf: justifySelf,
                }"
            >
                10
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'FlexBox',
})
export default class FlexBox extends Vue {
    private flexGrow: number = 0;
    private flexGrowTen: number = 0;
    private flexGrowEven: number = 0;
    private flexWrap: string = 'nowrap';
    private flexDirection: string = 'row';
    private alignContent: string = 'flex-start';
    private justifyContent: string = 'flex-start';
    private alignSelf: string = 'flex-start';
    private justifySelf: string = 'flex-start';

    private flexWrapProps: object[] = [
        {
            value: 'nowrap',
            title: 'No wrap',
        },
        {
            value: 'wrap',
            title: 'Wrap',
        },
        {
            value: 'wrap-reverse',
            title: 'Wrap reverse',
        },
    ];

    private flexDirectionProps: object[] = [
        {
            value: 'row',
            title: 'Row',
        },
        {
            value: 'row-reverse',
            title: 'Row Reverse',
        },
        {
            value: 'column',
            title: 'Column',
        },
        {
            value: 'column-reverse',
            title: 'Column reverse',
        },
    ];

    private flexProps: object[] = [
        {
            value: 'flex-start',
            title: 'Flex Start',
        },
        {
            value: 'flex-end',
            title: 'Flex End',
        },
        {
            value: 'center',
            title: 'Center',
        },
        {
            value: 'space-between',
            title: 'Space Between',
        },
        {
            value: 'space-around',
            title: 'Space Around',
        },
    ];
}
</script>

<style lang="scss" scoped>
.flex-box {
    width: 100%;
    height: 100%;
}
.container-custom {
    display: flex;
    height: 80vh;
    background-color: $main-color-light;
    resize: both;
    overflow: auto;

    div[class*='item-'] {
        flex-grow: 1;
        padding: 10px;
        text-align: center;
        background-color: $main-color-medium-light;
    }

    div[class*='item-']:nth-child(odd) {
        background-color: $main-color-medium-dark;
        color: white;
    }

    div[class*='item-']:nth-child(10) {
        order: 5;
    }
}
</style>
