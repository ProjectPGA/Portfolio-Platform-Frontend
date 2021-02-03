<template>
    <main class="maintenance-page">
        <div class="maintenance-page_content level">
            <img
                class="maintenance-page_img"
                src="../assets/img/mantenimiento-image.svg"
                alt="Maintenance Image"
                title="Maintenance-Image"
            />
            <div class="maintenance-page_description level">
                <div class="maintenance-page_title">
                    {{ $t('views.maintenance.title') }}
                </div>
                <div class="maintenance-page_subtitle">
                    {{ $t('views.maintenance.subtitle') }}
                </div>
            </div>
            <button-translation></button-translation>
        </div>
    </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ButtonTranslation from '@/components/common/ButtonTranslation.vue';
@Component({
    name: 'MaintenancePage',
    components: {
        ButtonTranslation,
    },
})
export default class MaintenancePage extends Vue {}
</script>

<style lang="scss" scoped>
.maintenance-page {
    height: 100vh;
    background-color: #ffffff;
    &_content {
        flex-direction: column;
        justify-content: space-around;
        padding: 20px;

        @include mobile {
            height: 75vh;
            display: flex;
        }
    }
    &_img {
        max-width: 600px;

        @include mobile {
            max-width: 400px;
        }
    }
    &_description {
        flex-direction: column;
        height: 100px;

        @include mobile {
            height: 90px;
            display: flex;
        }
    }
    &_title {
        font-weight: bold;
        font-size: 40px;
        color: #3a4750;

        @include mobile {
            font-size: 26px;
        }
    }
    &_subtitle {
        font-size: 20px;

        @include mobile {
            font-size: 15px;
        }
    }
}
</style>
