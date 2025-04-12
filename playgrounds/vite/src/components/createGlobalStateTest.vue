<template>

</template>

<script setup lang="ts">
import { createGlobalState } from '@vueuse/core'
import { computed, ref } from 'vue';

const useState = createGlobalState(() => {
    const count = ref(0);
    const doubleCount = computed(() => {
        return count.value * 2
    })

    function increment() {
        return count.value++;
    }

    return {
        count, doubleCount, increment
    }
})

const state = useState();
console.log('state :', state);



</script>

<style lang="scss" scoped></style>