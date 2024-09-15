<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value?: number;
  }>(),
  {
    value: 0,
  }
);

const style = computed(() => ({
  "clip-path": `inset(0 ${(10 - props.value) * 10}% 0 0)`,
}));
</script>

<template>
  <div class="relative w-full aspect-[12/2] filter hue-rotate-[320deg]">
    <!-- Base image -->
    <img
      src="/stars.webp"
      class="absolute inset-0 w-full h-full object-cover"
      aria-hidden="true"
    />
    <!-- Filled stars image with dynamic clip-path -->
    <img
      src="/stars-filled.webp"
      class="absolute inset-0 w-full h-full object-cover"
      :style="style"
      aria-hidden="true"
    />
  </div>
</template>
