<template>
    <div class="relative h-0 overflow-hidden text-base select-none pt-[50%]">
        <div
            ref="container"
            class="absolute top-0 left-0 w-full h-full overflow-hidden"
        >
            <img
                class="w-full h-full"
                src="@/assets/images/phone.png"
                alt="Phone"
            />
            <div
                class="absolute origin-top-left transform bg-sonolus-main"
                :style="{
                    left: `${(101 / 820) * 100}%`,
                    top: `${(30 / 410) * 100}%`,
                    width: `${(618 / 350) * 20}rem`,
                    height: '20rem',
                    '--tw-scale-x': scaleFactor,
                    '--tw-scale-y': scaleFactor,
                }"
            >
                <div
                    class="
                        flex
                        items-center
                        justify-between
                        bg-sonolus-ui-surface
                    "
                >
                    <img
                        class="w-10 h-10 p-2"
                        src="@/assets/icons/sonolus-logo.png"
                        alt="Sonolus Logo"
                    />
                    <div class="text-2xl font-bold">
                        <slot name="title" />
                    </div>
                    <img
                        class="w-10 h-10 p-2"
                        src="@/assets/icons/angle-left-solid.png"
                        alt="Back"
                    />
                </div>
                <div class="px-8 py-6">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'PhoneDisplay',

    data: () => ({
        height: 0,
    }),

    computed: {
        scaleFactor() {
            return this.height ? (this.height * 351) / 410 / 320 : 0
        },
    },

    methods: {
        updateSize() {
            const container = this.$refs.container as HTMLElement | undefined
            if (container && container.clientHeight) {
                this.height = container.clientHeight
            }
        },
    },

    mounted() {
        this.updateSize()
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.updateSize)
    },

    created() {
        window.addEventListener('resize', this.updateSize)
    },
})
</script>
