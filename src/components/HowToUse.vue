<template>
    <div>
        <div class="text-center">
            <button
                class="
                    relative
                    w-40
                    h-6
                    pl-6
                    pr-1
                    text-sm
                    transition-colors
                    duration-200
                    sm:w-60 sm:pl-8 sm:pr-2
                    bg-sonolus-ui-button-normal
                    hover:bg-sonolus-ui-button-highlighted
                    active:bg-sonolus-ui-button-pressed
                    sm:h-8 sm:text-base
                "
                @click="isExpanded = !isExpanded"
            >
                <img
                    class="absolute w-4 h-4 left-1 top-1 sm:left-2 sm:top-2"
                    src="@/assets/icons/question-solid.png"
                    alt="Question Mark"
                />
                <span>{{ $t('server.btnHowToUse') }}</span>
            </button>
        </div>
        <div class="max-w-3xl mx-auto mt-4 overflow-hidden sm:mt-8">
            <transition
                enter-active-class="transition-transform duration-200"
                leave-active-class="transition-transform duration-200"
                enter-class="-translate-y-full"
                enter-to-class="translate-y-0"
                leave-class="translate-y-0"
                leave-to-class="-translate-y-full"
            >
                <div v-if="isExpanded" class="transform">
                    <div class="font-semibold sm:text-xl">
                        {{ $t('server.steps.1.header') }}
                    </div>
                    <div class="mt-2 text-sm sm:mt-4 sm:text-base">
                        <span>{{ $t('server.steps.1.text[0]') }}</span>
                        <a href="https://sonolus.com" target="_blank">
                            <span class="underline">https://sonolus.com</span>
                            <img
                                class="inline-block w-4 h-4 ml-1 align-baseline"
                                src="@/assets/icons/external-link-alt-solid.png"
                                alt="Link"
                            />
                        </a>
                        <span>{{ $t('server.steps.1.text[1]') }}</span>
                    </div>

                    <div class="mt-4 font-semibold sm:text-xl sm:mt-8">
                        {{ $t('server.steps.2.header') }}
                    </div>
                    <div class="mt-2 text-sm sm:mt-4 sm:text-base">
                        <span>{{ $t('server.steps.2.text[0]') }}</span>
                        <div class="max-w-lg mx-auto my-2 sm:my-4">
                            <phone-display>
                                <template v-slot:title>
                                    {{ $t('server.steps.2.displays.1.title') }}
                                </template>

                                <div class="text-xl font-bold">
                                    {{
                                        $t(
                                            'server.steps.2.displays.1.customServers.header'
                                        )
                                    }}
                                </div>
                                <div
                                    class="
                                        relative
                                        flex
                                        items-center
                                        w-24
                                        h-6
                                        p-1
                                        mx-auto
                                        mt-2
                                        bg-sonolus-ui-button-normal
                                    "
                                >
                                    <img
                                        class="w-4 h-4"
                                        src="@/assets/icons/plus-solid.png"
                                        alt="Add"
                                    />
                                    <div class="flex-grow ml-1 text-center">
                                        {{
                                            $t(
                                                'server.steps.2.displays.1.customServers.btnAdd'
                                            )
                                        }}
                                    </div>
                                    <div
                                        class="
                                            absolute
                                            border-4 border-yellow-400
                                            w-[calc(100%+1rem)]
                                            h-[calc(100%+1rem)]
                                            -top-2
                                            -left-2
                                            animate-pulse
                                        "
                                    />
                                </div>

                                <div class="pt-6 text-xl font-bold">
                                    {{
                                        $t(
                                            'server.steps.2.displays.1.collections.header'
                                        )
                                    }}
                                </div>
                                <div
                                    class="
                                        flex
                                        items-center
                                        w-24
                                        h-6
                                        p-1
                                        mx-auto
                                        mt-2
                                        bg-sonolus-ui-button-normal
                                    "
                                >
                                    <img
                                        class="w-4 h-4"
                                        src="@/assets/icons/plus-solid.png"
                                        alt="Add"
                                    />
                                    <div class="flex-grow ml-1 text-center">
                                        {{
                                            $t(
                                                'server.steps.2.displays.1.collections.btnAdd'
                                            )
                                        }}
                                    </div>
                                </div>
                            </phone-display>
                        </div>
                    </div>
                    <div class="mt-2 text-sm sm:mt-4 sm:text-base">
                        <span>{{ $t('server.steps.2.text[1]') }}</span>
                        <div class="max-w-lg mx-auto my-2 sm:my-4">
                            <phone-display>
                                <template v-slot:title>
                                    {{ $t('server.steps.2.displays.2.title') }}
                                </template>

                                <div class="text-base font-bold">
                                    {{
                                        $t('server.steps.2.displays.2.fldName')
                                    }}
                                </div>
                                <div
                                    class="
                                        flex
                                        items-center
                                        h-6
                                        p-1
                                        bg-sonolus-ui-button-normal
                                    "
                                >
                                    <img
                                        class="w-4 h-4"
                                        src="@/assets/icons/server-solid.png"
                                        alt="Name"
                                    />
                                    <div class="flex-grow ml-1 text-center">
                                        {{ title }}
                                    </div>
                                    <img
                                        class="w-4 h-4 ml-1"
                                        src="@/assets/icons/times-solid.png"
                                        alt="Clear"
                                    />
                                </div>

                                <div class="mt-2 text-base font-bold">
                                    {{
                                        $t(
                                            'server.steps.2.displays.2.fldAddress'
                                        )
                                    }}
                                </div>
                                <div
                                    class="
                                        relative
                                        flex
                                        items-center
                                        h-6
                                        p-1
                                        bg-sonolus-ui-button-normal
                                    "
                                >
                                    <img
                                        class="w-4 h-4"
                                        src="@/assets/icons/link-solid.png"
                                        alt="Address"
                                    />
                                    <div
                                        class="
                                            flex-grow
                                            ml-1
                                            text-center
                                            truncate
                                        "
                                    >
                                        {{ address }}
                                    </div>
                                    <img
                                        class="w-4 h-4 ml-1"
                                        src="@/assets/icons/times-solid.png"
                                        alt="Clear"
                                    />
                                    <div
                                        class="
                                            absolute
                                            border-4 border-yellow-400
                                            w-[calc(100%+1rem)]
                                            h-[calc(100%+1rem)]
                                            -top-2
                                            -left-2
                                            animate-pulse
                                        "
                                    />
                                </div>

                                <div
                                    class="
                                        flex
                                        items-center
                                        w-24
                                        h-6
                                        p-1
                                        mt-6
                                        ml-auto
                                        bg-sonolus-ui-button-normal
                                    "
                                >
                                    <img
                                        class="w-4 h-4"
                                        src="@/assets/icons/check-solid.png"
                                        alt="Confirm"
                                    />
                                    <div class="flex-grow ml-1 text-center">
                                        {{
                                            $t(
                                                'server.steps.2.displays.2.btnConfirm'
                                            )
                                        }}
                                    </div>
                                </div>
                            </phone-display>
                        </div>
                    </div>

                    <div class="mt-4 font-semibold sm:text-xl sm:mt-8">
                        {{ $t('server.steps.3.header') }}
                    </div>
                    <div class="mt-2 text-sm sm:mt-4 sm:text-base">
                        <span>{{ $t('server.steps.3.text[0]') }}</span>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PhoneDisplay from './PhoneDisplay.vue'

export default Vue.extend({
    name: 'HowToUse',

    components: {
        PhoneDisplay,
    },

    props: {
        title: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    },

    data: () => ({
        isExpanded: false,
    }),
})
</script>
