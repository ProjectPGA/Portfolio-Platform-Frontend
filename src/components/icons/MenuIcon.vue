<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
    >
        <title>Menu</title>
        <path
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="48"
            d="M88 152h336M88 256h336M88 360h336"
        />
    </svg>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'earthIcon',
})
export default class earthIcon extends Vue {}
</script>

<style lang="scss" scoped></style>
