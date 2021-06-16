<template>
    <div>
        <div class="relative w-10 h-10 mx-auto sm:w-12 sm:h-12">
            <div
                v-for="([x, y], index) in [
                    [0.125, 0.125],
                    [0.5, 0.125],
                    [0.875, 0.125],
                    [0.875, 0.5],
                    [0.875, 0.875],
                    [0.5, 0.875],
                    [0.125, 0.875],
                    [0.125, 0.5],
                ]"
                :key="index"
                class="
                    absolute
                    w-2.5
                    h-2.5
                    opacity-0
                    glow
                    bg-sonolus-ui-text-normal
                "
                :style="{
                    left: `${x * 100}%`,
                    top: `${y * 100}%`,
                    animationDelay: `${index / 8}s`,
                }"
            />
        </div>
        <div class="mt-2 sm:mt-2.5 text-center text-sm sm:text-base">
            {{ $t('loading.text') }}
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'LoadingDisplay',
})
</script>

<style scoped>
.glow {
    animation-name: glow;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

@keyframes glow {
    0% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }

    100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.5);
    }
}
</style>
