<template>
    <div class="flex items-center bg-sonolus-ui-surface">
        <a
            class="
                p-2
                transition-colors
                duration-200
                sm:p-4
                min-w-max
                hover:bg-sonolus-ui-button-highlighted
                active:bg-sonolus-ui-button-pressed
            "
            href="https://sonolus.com"
            target="_blank"
        >
            <img
                class="w-6 h-6 sm:w-8 sm:h-8"
                src="@/assets/icons/sonolus-logo.png"
                alt="Sonolus"
            />
        </a>
        <div
            class="
                flex-grow
                px-2
                py-1
                text-xl
                font-bold
                text-center
                sm:px-4 sm:py-2 sm:text-3xl
            "
        >
            {{ title }}
        </div>
        <button
            class="
                p-2
                transition-colors
                duration-200
                sm:p-4
                min-w-max
                hover:bg-sonolus-ui-button-highlighted
                active:bg-sonolus-ui-button-pressed
            "
            @click="$emit('select-locale')"
        >
            <img
                class="w-6 h-6 sm:w-8 sm:h-8"
                src="@/assets/icons/globe-solid.png"
                alt="Sonolus"
            />
        </button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'NavBar',

    props: {
        title: {
            type: String,
            required: true,
        },
    },
})
</script>
