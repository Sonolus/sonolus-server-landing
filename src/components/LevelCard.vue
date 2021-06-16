<template>
    <div class="flex items-center p-2 bg-sonolus-ui-button-normal sm:p-3">
        <div class="relative min-w-max">
            <img
                :class="{ 'p-6 sm:p-9 opacity-25': !coverUrl }"
                class="w-24 h-24 sm:w-36 sm:h-36"
                :src="coverUrl || icon"
                alt="Thumbnail"
            />
            <div
                class="
                    absolute
                    top-0
                    left-0
                    w-5
                    h-5
                    bg-sonolus-ui-surface
                    opacity-90
                    sm:w-7 sm:h-7
                "
            />
            <span
                class="
                    absolute
                    text-xs
                    transform
                    top-2.5
                    left-2.5
                    sm:top-3.5 sm:left-3.5
                    -translate-x-1/2 -translate-y-1/2
                    sm:text-base
                "
                >{{ level.rating }}</span
            >
            <span
                class="
                    bg-sonolus-ui-surface
                    opacity-90
                    absolute
                    bottom-0
                    h-5
                    sm:h-7
                    px-1
                    sm:px-1.5
                    left-1/2
                    text-xs
                    sm:text-base
                    transform
                    -translate-x-1/2
                    text-transparent
                "
                >{{ level.engine.title }}</span
            >
            <span
                class="
                    absolute
                    bottom-2.5
                    sm:bottom-3.5
                    left-1/2
                    text-xs
                    sm:text-base
                    transform
                    -translate-x-1/2
                    translate-y-1/2
                "
                >{{ level.engine.title }}</span
            >
        </div>
        <div class="flex-grow pb-4 ml-2 sm:ml-3 sm:pb-6">
            <div
                class="
                    flex
                    items-start
                    justify-between
                    opacity-75
                    text-2xs
                    sm:text-xs
                "
            >
                <div class="text-left">#{{ level.name }}</div>
                <div class="text-right">{{ level.author }}</div>
            </div>
            <div class="mt-1 sm:mt-1.5 font-bold text-center sm:text-2xl">
                {{ level.title }}
            </div>
            <div class="mt-1 sm:mt-1.5 text-xs text-center sm:text-base">
                {{ level.artists }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Level } from '@/types/api'

export default Vue.extend({
    name: 'LevelCard',

    props: {
        address: {
            type: String,
            required: true,
        },
        level: {
            type: Object as PropType<Level>,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
    },

    computed: {
        coverUrl(): string | undefined {
            if (this.level.cover?.url) {
                if (this.level.cover.url.startsWith('/')) {
                    return this.address + this.level.cover.url
                } else {
                    return this.level.cover.url
                }
            }
            return undefined
        },
    },
})
</script>
