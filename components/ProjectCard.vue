<script setup lang="ts">
defineProps<{
  project: string;
  from: string;
  to: string;
  title: string;
  desc: string;
  redirect?: string,
  keywords?: string[];
}>();
</script>

<template>
  <div class="space-y-1">
    <div class="flex flex-row items-center space-x-4">
        <a :href="redirect" class="group flex flex-row space-x-1 items-center text-manilla-200 hover:text-blossom-200">
            <h3 class="text-lg font-bold underline">{{ project }}</h3>
            <Icon size="1rem" name="uil:arrow-up-right" class="transition ease-in-out group-hover:-translate-y-1"/>
        </a>
      <p class="text-xs font-thin">{{ from }} - {{ to }}</p>
    </div>
    <h4 class="text-sm text-silver-300">{{ title }}</h4>
    <p class="font-mono text-silver-200">{{ desc }}</p>
    <ul class="flex flex-row flex-wrap">
      <li
        v-for="keyword in keywords"
        :key="keyword"
        class="mt-2 mr-2 rounded-full bg-blossom-300 px-2 py-1 font-medium text-blossom-950"
      >
        <p>{{ keyword }}</p>
      </li>
    </ul>
  </div>
</template>
