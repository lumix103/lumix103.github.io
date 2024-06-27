<script setup lang="ts">
defineProps<{
  company: string;
  from: string;
  to: string;
  title: string;
  desc: string;
  keywords?: string[];
}>();
</script>

<template>
  <div class="space-y-1">
    <div class="flex flex-row items-center space-x-4">
      <h3 class="text-lg font-bold">{{ company }}</h3>
      <p class="text-xs font-thin">{{ from }} - {{ to }}</p>
    </div>
    <h4 class="text-sm text-gray-400">{{ title }}</h4>
    <p class="font-mono text-gray-300">{{ desc }}</p>
    <ul class="flex flex-row flex-wrap">
      <li
        v-for="keyword in keywords"
        :key="keyword"
        class="mt-2 mr-2 rounded-full bg-sky-500 px-2 py-1 font-medium text-slate-950"
      >
        {{ keyword }}
      </li>
    </ul>
  </div>
</template>
