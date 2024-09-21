<template>
  <div class="bg-[#111111] text-[#fff] overflow-hidden w-full">
    <heroSection :item="popularMovies[0]" />
    <div class="w-full">
      <div class="w-full px-5 flex justify-between items-center py-10">
        <h1 class="text-3xl">Popular Movies</h1>
        <NuxtLink
          :to="'category/movie'"
          class="text-lg opacity-50 cursor-pointer hover:text-[#00AD99]"
        >
          Explore more
        </NuxtLink>
      </div>
      <div class="w-full px-5">
        <TransitionGroup
          tag="div"
          name="card-fade"
          class="flex gap-3 max-w-full overflow-x-auto"
        >
          <card
            v-for="movie in popularMovies"
            :key="movie.id"
            :info="movie"
            class=""
          />
        </TransitionGroup>
      </div>
    </div>
    <div class="w-full">
      <div class="w-full px-5 flex justify-between items-center py-10">
        <h1 class="text-3xl">Popular TV Shows</h1>
        <NuxtLink
          :to="'category/tv'"
          class="text-lg opacity-50 cursor-pointer hover:text-[#00AD99]"
        >
          Explore more
        </NuxtLink>
      </div>
      <div class="w-full px-5">
        <TransitionGroup
          tag="div"
          name="card-fade"
          class="flex gap-3 max-w-full overflow-x-auto"
        >
          <card
            v-for="movie in popularTV"
            :key="movie.id"
            :info="movie"
            class=""
          />
        </TransitionGroup>
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
  popularTV.value = await fetchPopularMovies(
    "/tv/popular?language=en-US&page=1"
  );
  console.log(popularTV);
});
</script>
