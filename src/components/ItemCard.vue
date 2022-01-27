<template>
    <div class="flex items-center p-2 bg-sonolus-ui-button-normal sm:p-3">
        <div class="min-w-max">
            <img
                :class="{ 'p-4 sm:p-6 opacity-25': !thumbnailUrl }"
                class="w-16 h-16 sm:w-24 sm:h-24"
                :src="thumbnailUrl || icon"
                alt="Thumbnail"
            />
        </div>
        <div class="flex-grow ml-2 sm:ml-3">
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
                <div class="text-left">#{{ item.name }}</div>
                <div class="text-right">{{ item.author }}</div>
            </div>
            <div class="mt-1 sm:mt-1.5 font-bold text-center sm:text-2xl">
                {{ item.title }}
            </div>
            <div class="mt-1 sm:mt-1.5 text-xs text-center sm:text-base">
                {{ item.subtitle }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ResourceType, SRL } from 'sonolus-core'

export default Vue.extend({
    name: 'ItemCard',

    props: {
        address: {
            type: String,
            required: true,
        },
        item: {
            type: Object as PropType<{
                name: string
                title: string
                subtitle: string
                author: string
                thumbnail: SRL<ResourceType>
            }>,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
    },

    computed: {
        thumbnailUrl(): string | undefined {
            if (this.item.thumbnail?.url) {
                if (this.item.thumbnail.url.startsWith('/')) {
                    return this.address + this.item.thumbnail.url
                } else {
                    return this.item.thumbnail.url
                }
            }
            return undefined
        },
    },
})
</script>
