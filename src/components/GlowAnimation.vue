<template>
    <div class="fixed top-0 left-0 w-full h-full z-[-10]">
        <template v-for="y in yCount">
            <template v-for="x in xCount">
                <div
                    :key="`${x}-${y}`"
                    class="
                        absolute
                        transform
                        -translate-x-1/2 -translate-y-1/2
                        bg-sonolus-glow
                    "
                    :style="{
                        left: `calc(50% + ${(x - (xCount + 1) / 2) * size}px)`,
                        top: `calc(50% + ${(y - (yCount + 1) / 2) * size}px)`,
                        width: `${size}px`,
                        height: `${size}px`,
                        opacity: 0.25 * values[x - 1][y - 1],
                        '--tw-scale-x': 0.75 + 0.25 * values[x - 1][y - 1],
                        '--tw-scale-y': 0.75 + 0.25 * values[x - 1][y - 1],
                    }"
                />
            </template>
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'GlowAnimation',

    data: () => ({
        size: 0,
        xCount: 0,
        yCount: 0,

        animations: [] as {
            x: number
            y: number
            startTime: number
            speed: number
            to: number
        }[],

        time: 0,
        lastUpdateTime: Number.NEGATIVE_INFINITY,
    }),

    computed: {
        values() {
            const values: number[][] = []
            for (let x = 0; x < this.xCount; x++) {
                values.push([])
                for (let y = 0; y < this.yCount; y++) {
                    values[x][y] = 0
                }
            }

            this.animations.forEach(({ x, y, startTime, speed, to }) => {
                values[x][y] = Math.max(
                    values[x][y],
                    this.time >= startTime + speed
                        ? ((startTime - this.time) / speed + 2) * to
                        : ((this.time - startTime) / speed) * to
                )
            })

            return values
        },
    },

    methods: {
        updateSize() {
            const width = window.innerWidth
            const height = window.innerHeight

            this.size = Math.min(width, height) / 8
            this.xCount = Math.floor(Math.ceil(width / this.size) / 2) * 2 + 1
            this.yCount = Math.floor(Math.ceil(height / this.size) / 2) * 2 + 1

            this.animations = []
        },
        updateFrame() {
            this.time = Date.now() / 1000

            const updateTime = Math.floor(this.time * 10)
            if (this.lastUpdateTime !== updateTime) {
                this.lastUpdateTime = updateTime
                this.animations.push({
                    x: Math.floor(Math.random() * this.xCount),
                    y: Math.floor(Math.random() * this.yCount),
                    startTime: this.time,
                    speed: Math.random() * 2 + 1,
                    to: Math.random(),
                })
            }

            for (let i = this.animations.length - 1; i >= 0; i--) {
                const animation = this.animations[i]
                if (this.time >= animation.startTime + 2 * animation.speed) {
                    this.animations.splice(i, 1)
                }
            }

            requestAnimationFrame(this.updateFrame)
        },
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.updateSize)
    },

    created() {
        this.updateSize()
        this.updateFrame()
        window.addEventListener('resize', this.updateSize)
    },
})
</script>
