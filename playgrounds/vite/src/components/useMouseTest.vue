<script setup lang="ts">
import { useMouse, debounceFilter, useParentElement } from '@vueuse/core'

const { x, y } = useMouse({
  type: (event) => [event.pageX + 1000, event.pageY + 1000], touch: true, resetOnTouchEnds: true, scroll: true, eventFilter: debounceFilter(100)
})
// @ts-expect-error
function a(): void
function a(c: number): void
function a(d: string, e: boolean): void


function a(...args: Parameters<typeof a>) {
  console.log('args :', args);
}

a()
a('1', true)

const parentEl = useParentElement()
console.log('parentEl :', parentEl);

</script>

<template>
  <div>{{ x }}, {{ y }}</div>
</template>
