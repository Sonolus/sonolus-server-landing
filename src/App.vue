<template>
    <div>
        <glow-animation />

        <nav-bar
            class="sticky top-0 z-10"
            :title="title"
            @select-locale="isSelectingLocale = true"
        />

        <locale-select v-model="isSelectingLocale" />

        <div class="max-w-5xl px-8 mx-auto sm:px-16">
            <page-section :header="title">
                <div class="flex max-w-xl mx-auto mt-4 sm:mt-8">
                    <div class="relative flex-grow h-6 sm:h-8">
                        <input
                            ref="inputAddress"
                            class="
                                absolute
                                top-0
                                left-0
                                w-full
                                h-full
                                pl-6
                                text-sm text-center
                                transition-colors
                                duration-200
                                rounded-none
                                sm:text-base sm:pl-8
                                bg-sonolus-ui-button-normal
                                hover:bg-sonolus-ui-button-highlighted
                                active:bg-sonolus-ui-button-pressed
                            "
                            type="text"
                            :value="address"
                            readonly
                            @focus="$event.target.select()"
                        />
                        <img
                            class="
                                absolute
                                w-4
                                h-4
                                pointer-events-none
                                top-1
                                left-1
                                sm:top-2 sm:left-2
                            "
                            src="@/assets/icons/link-solid.png"
                            alt="Link"
                        />
                    </div>
                    <button
                        class="
                            w-6
                            h-6
                            p-1
                            transition-colors
                            duration-200
                            sm:w-8 sm:h-8 sm:p-2
                            bg-sonolus-ui-button-normal
                            hover:bg-sonolus-ui-button-highlighted
                            active:bg-sonolus-ui-button-pressed
                        "
                        @click="copyAddress"
                    >
                        <img
                            class="w-full h-full"
                            src="@/assets/icons/copy-solid.png"
                            alt="Copy"
                        />
                    </button>
                </div>
                <how-to-use
                    class="mt-2 sm:mt-4"
                    :title="title"
                    :address="address"
                />
            </page-section>

            <page-section
                v-for="{ key, icon } in sections"
                :key="key"
                :header="$t(`info.headers.${key}`)"
            >
                <div class="mt-4 sm:mt-8">
                    <template v-if="isServerInfoLoading">
                        <loading-display />
                    </template>
                    <template v-else-if="serverInfo">
                        <template
                            v-for="(item, index) in serverInfo[key].items"
                        >
                            <level-card
                                v-if="key === 'levels'"
                                :key="index"
                                class="mt-2 sm:mt-4"
                                :address="address"
                                :level="item"
                                :icon="icon"
                            />
                            <item-card
                                v-else
                                :key="index"
                                class="mt-2 sm:mt-4"
                                :address="address"
                                :item="item"
                                :icon="icon"
                            />
                        </template>
                        <template v-if="serverInfo[key].items.length">
                            <div
                                class="
                                    mt-2
                                    text-sm text-right
                                    opacity-75
                                    sm:mt-4 sm:text-base
                                "
                            >
                                {{ $t('info.txtMore') }}
                            </div>
                        </template>
                    </template>
                    <template v-else>
                        <div class="flex items-center justify-center">
                            <img
                                class="w-4 h-4 sm:w-5 sm:h-5"
                                src="@/assets/icons/exclamation-circle-solid.png"
                                alt="Error"
                            />
                            <span
                                class="
                                    ml-2
                                    text-sm
                                    sm:text-base
                                    text-sonolus-warning
                                "
                                >{{ $t('info.error') }}</span
                            >
                        </div>
                    </template>
                </div>
            </page-section>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ServerInfo } from 'sonolus-core'
import GlowAnimation from '@/components/GlowAnimation.vue'
import NavBar from '@/components/NavBar.vue'
import LocaleSelect from '@/components/LocaleSelect.vue'
import PageSection from '@/components/PageSection.vue'
import HowToUse from '@/components/HowToUse.vue'
import LoadingDisplay from '@/components/LoadingDisplay.vue'
import LevelCard from '@/components/LevelCard.vue'
import ItemCard from '@/components/ItemCard.vue'

export default Vue.extend({
    name: 'App',

    components: {
        GlowAnimation,
        NavBar,
        LocaleSelect,
        PageSection,
        HowToUse,
        LoadingDisplay,
        LevelCard,
        ItemCard,
    },

    data: () => ({
        title: process.env.VUE_APP_TITLE,
        address: '',
        isSelectingLocale: false,
        isServerInfoLoading: true,
        serverInfo: undefined as ServerInfo | undefined,
        sections: [
            {
                key: 'levels',
                icon: require('@/assets/icons/music-solid.png'),
            },
            {
                key: 'skins',
                icon: require('@/assets/icons/dot-circle-regular.png'),
            },
            {
                key: 'backgrounds',
                icon: require('@/assets/icons/image-solid.png'),
            },
            {
                key: 'effects',
                icon: require('@/assets/icons/drum-solid.png'),
            },
            {
                key: 'particles',
                icon: require('@/assets/icons/splotch-solid.png'),
            },
            {
                key: 'engines',
                icon: require('@/assets/icons/rocket-solid.png'),
            },
        ] as const,
    }),

    computed: {
        serverInfoUrl(): string | undefined {
            if (this.address) {
                return `${this.address}/sonolus/info?localization=${this.$i18n.locale}`
            }
            return undefined
        },
    },

    watch: {
        '$i18n.locale': {
            handler(value) {
                document.documentElement.lang = value
            },
            immediate: true,
        },
        serverInfoUrl() {
            if (this.serverInfoUrl) {
                this.serverInfo = undefined
                this.isServerInfoLoading = true
                fetch(this.serverInfoUrl)
                    .then((response) => response.json())
                    .then((info) => (this.serverInfo = info))
                    .finally(() => (this.isServerInfoLoading = false))
            }
        },
    },

    methods: {
        copyAddress() {
            const inputAddress = this.$refs.inputAddress as
                | HTMLInputElement
                | undefined
            if (inputAddress) {
                inputAddress.focus()
                inputAddress.select()
                document.execCommand('copy')
            }
        },
        detectLanguage() {
            const language = navigator.language?.toLowerCase()
            if (language) {
                if (language === 'ja' || language.startsWith('ja-'))
                    this.$i18n.locale = 'ja'
                if (language === 'ko' || language.startsWith('ko-'))
                    this.$i18n.locale = 'ko'
                if (language === 'es' || language.startsWith('es-'))
                    this.$i18n.locale = 'es'
                if (
                    language === 'in' ||
                    language === 'id' ||
                    language.startsWith('in-') ||
                    language.startsWith('id-')
                )
                    this.$i18n.locale = 'id'
                if (language === 'zh' || language.startsWith('zh-'))
                    switch (language) {
                        case 'zh-hk':
                        case 'zh-tw':
                            this.$i18n.locale = 'zht'
                            break
                        default:
                            this.$i18n.locale = 'zhs'
                            break
                    }
            }
        },
        initAddress() {
            let address = window.location.origin + window.location.pathname
            while (address.endsWith('/')) {
                address = address.substr(0, address.length - 1)
            }
            this.address = address
        },
    },

    created() {
        this.detectLanguage()
        this.initAddress()
    },
})
</script>

<style>
body {
    animation-name: background;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes background {
    0% {
        background-color: rgba(0, 0, 32, 1);
    }

    25% {
        background-color: rgba(13, 0, 31, 1);
    }

    50% {
        background-color: rgba(0, 0, 32, 1);
    }

    75% {
        background-color: rgba(0, 17, 29, 1);
    }

    100% {
        background-color: rgba(0, 0, 32, 1);
    }
}
</style>
