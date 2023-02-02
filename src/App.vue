<template>
    <div class="red">{{ count }}</div>
    <button @click="add">add 1</button>
</template>

<!-- <script setup>
import { ref } from 'vue';
const count = ref(6);
function add() {
    count.value++;
}
</script> -->

<script>
import { ref } from 'vue';
export default {
    setup() {
        const count = ref(6);
        function add() {
            count.value++;
        }
        return { count, add };
    },
};
</script>

<style scoped>
.red {
    color: red;
}
</style>
