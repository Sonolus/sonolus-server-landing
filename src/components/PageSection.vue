<template>
    <div class="my-8 sm:my-16">
        <div class="text-lg font-bold sm:text-2xl">
            {{ header }}
        </div>

        <slot />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'PageSection',

    props: {
        header: {
            type: String,
            required: true,
        },
    },
})
</script>
