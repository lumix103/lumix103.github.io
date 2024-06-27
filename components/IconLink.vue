<script setup lang="ts">
    const props = defineProps<{
        size: string,
        name: string,
        redirect?: string,
        defaultColor?: string,
        hoverColor?: string
        }>();
    const color = ref(props.defaultColor || "white");
</script>

<template>
    <a :href="redirect">
        <Icon @mouseenter="color = hoverColor || 'white'" 
              @mouseleave="color = defaultColor || 'white'"
              mode="svg" :size="size" :name="name" :color="color"/>
    </a>
</template>