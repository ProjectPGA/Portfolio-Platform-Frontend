<template>
    <div class="maintenance-page">
        <div class="maintenance-page_content level">
            <img
                class="maintenance-page_img"
                :src="require(`../../assets/img/${imageName}`)"
                alt="Maintenance Image"
                title="Maintenance-Image"
            />
            <div class="maintenance-page_description level">
                <h1 class="maintenance-page_description_title">
                    {{ title }}
                </h1>
                <h2 class="maintenance-page_description_subtitle">
                    {{ subtitle }}
                </h2>
            </div>
            <button-translation />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import ButtonTranslation from '@/components/common/ButtonTranslation.vue';

@Component({
    name: 'MaintenanceLayout',
    components: {
        ButtonTranslation,
    },
})
export default class MaintenanceLayout extends Vue {
    @Prop(String) private title: string;
    @Prop(String) private subtitle: string;
    @Prop(String) private imageName: string;
}
</script>

<style lang="scss" scoped>
.maintenance-page {
    min-height: 100vh;
    background-color: $white;
    &_content {
        flex-direction: column;
        justify-content: space-around;
        padding: 1.25rem;

        @include mobile {
            display: flex;
        }
    }
    &_img {
        max-width: 31.25rem;
        margin-top: 2.5rem;
        margin-bottom: 3.15rem;
        @include mobile {
            max-width: 25rem;
        }
    }
    &_description {
        flex-direction: column;
        height: 6.25rem;

        @include mobile {
            height: 5.65rem;
            display: flex;
        }
        &_title {
            font-weight: bold;
            font-size: 2.5rem;
            color: $charcoal;

            @include mobile {
                font-size: 1.65em;
                text-align: center;
            }
        }
        &_subtitle {
            font-size: 1.25rem;

            @include mobile {
                font-size: 1rem;
            }
        }
    }
}
</style>
