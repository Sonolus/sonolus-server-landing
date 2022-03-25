<template>
    <transition
        enter-active-class="transition-opacity duration-200"
        leave-active-class="transition-opacity duration-200"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div v-if="value" class="fixed top-0 left-0 z-50 w-full h-full">
            <div
                class="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-full
                    opacity-90
                    bg-sonolus-main
                "
            />
            <div
                class="
                    absolute
                    top-0
                    left-0
                    flex flex-col
                    justify-center
                    w-full
                    h-full
                "
                @click.self="close"
            >
                <div
                    class="w-full max-w-sm px-2 mx-auto my-0.5 sm:my-1"
                    v-for="(title, locale) in locales"
                    :key="locale"
                >
                    <button
                        class="
                            flex
                            items-center
                            w-full
                            h-6
                            text-sm
                            transition-colors
                            duration-200
                            bg-sonolus-ui-button-normal
                            hover:bg-sonolus-ui-button-highlighted
                            active:bg-sonolus-ui-button-pressed
                            sm:h-8 sm:text-base
                        "
                        @click="change(locale)"
                    >
                        <img
                            class="w-6 h-6 p-1 sm:w-8 sm:h-8 sm:p-2"
                            src="@/assets/icons/language-solid.png"
                            alt="Language"
                        />
                        <div class="flex-grow px-1">{{ title }}</div>
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'LocaleSelect',

    props: {
        value: {
            type: Boolean,
            required: true,
            default: false,
        },
    },

    data: () => ({
        locales: {
            en: 'English (English)',
            'zh-Hans': '简体中文 (Simplified Chinese)',
            'zh-Hant': '繁體中文 (Traditional Chinese)',
            ja: '日本語 (Japanese)',
            ko: '한국어 (Korean)',
            es: 'Español (Spanish)',
            id: 'Bahasa Indonesia (Indonesian)',
        },
    }),

    methods: {
        close() {
            this.$emit('input', false)
        },
        change(locale: string) {
            this.$i18n.locale = locale
            this.close()
        },
    },
})
</script>
