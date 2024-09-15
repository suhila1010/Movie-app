<template>
  <div class="">
    <div
      class="border-4 border-[#1F2021] w-[240px] h-[376px] hover:scale-105 duration-300"
    >
      <img
        :src="'https://image.tmdb.org/t/p/original/' + info?.poster_path"
        alt=""
        class="w-full h-full cursor-pointer"
      />
    </div>
    <div class="mt-5">
      <h1>{{ info?.title || info?.name }}</h1>
    </div>
    <div class="flex items-center gap-3">
      <rating :value="info.vote_average" class="w-[90px] my-3" />
      <div class="opacity-60">
        {{ formatVote(info.vote_average) }}
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["info"]);
</script>
