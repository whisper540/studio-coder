<script setup lang="ts">
import {onMounted, ref} from 'vue';
import type { Ref } from 'vue'
import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import graphData from '@/components/coder/graph_data';
import UserTaskNode from "@/nodes/UserTaskNode";

const container:Ref<HTMLElement|null> = ref(null)
const lf:Ref<LogicFlow|null> = ref(null);

onMounted(()=>{
    lf.value = new LogicFlow({
        container: container.value!,
        grid: true,
    });
    lf.value?.register(UserTaskNode);
    lf.value.render(graphData);
})
</script>

<template>
    <div class="container" ref="container"></div>
</template>

<style scoped>
.container {
    width: 1000px;
    height: 800px;
}
</style>
