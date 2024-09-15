<template>
  <div class="bg-[#111111] text-[#fff] overflow-hidden w-full">
    <heroSection />
    <div class="w-full">
      <div class="w-full px-5 flex justify-between items-center py-10">
        <h1 class="text-3xl">Popular Movies</h1>
        <p class="text-lg opacity-50 cursor-pointer hover:text-[#00AD99]">
          Explore more
        </p>
      </div>
      <div class="w-full px-5">
        <div class="flex gap-3 max-w-full overflow-x-auto">
          <card
            v-for="movie in popularMovies"
            :key="movie.id"
            :info="movie"
            class=""
          />
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="w-full px-5 flex justify-between items-center py-10">
        <h1 class="text-3xl">Popular TV Shows</h1>
        <p class="text-lg opacity-50 cursor-pointer hover:text-[#00AD99]">
          Explore more
        </p>
      </div>
      <div class="w-full px-5">
        <div class="flex gap-3 max-w-full overflow-x-auto">
          <card
            v-for="movie in popularTV"
            :key="movie.id"
            :info="movie"
            class=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const popularMovies = ref([]);
const popularTV = ref([]);
const {fetchPopularMovies} = useTmdb();

onMounted(async () => {
  popularMovies.value = await fetchPopularMovies("/movie/popular");
  popularTV.value = await fetchPopularMovies("/tv/popular?language=en-US&page=1");
  console.log(popularTV);
});
</script>
