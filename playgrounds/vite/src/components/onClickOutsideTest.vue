<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref, useTemplateRef } from 'vue'
import Child from './child.vue';

const target = ref();

onClickOutside(target, event => console.log(event), { controls: true },
)
</script>

<template>
    <Child ref="target" />
    <div>
        Hello world121
    </div>
    <div>Outside element</div>
</template>