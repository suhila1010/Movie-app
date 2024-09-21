<template>
  <div class="bg-[#111111] text-[#fff] overflow-hidden w-full">
    <div class="w-full">
      <div class="w-full px-5 flex justify-between items-center py-10">
        <h1 class="text-3xl">
          Popular {{ route.params.name == 'tv' ? 'TV' : 'Movies' }}
        </h1>
      </div>
      <div class="w-full px-5">
        <!-- TransitionGroup for animating card appearance -->
        <TransitionGroup
          tag="div"
          name="card-fade"
          class="flex gap-3 max-w-full overflow-x-auto flex-wrap"
        >
          <card
            v-for="movie in popularMovies"
            :key="movie.id"
            :info="movie"
            class="transition-card"
          />
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>
<script setup>
const popularMovies = ref([]);
const {fetchPopularMovies} = useTmdb();
const route = useRoute()

console.log()

onMounted(async () => {
  
  popularMovies.value = await fetchPopularMovies(`/${route.params.name}/popular?language=en-US&page=1`);
});
</script>
<style>
/* Define the animation */
.card-fade-enter-active {
  transition: all 0.5s ease;
}

.card-fade-leave-active {
  transition: all 0.5s ease;
}

.card-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.card-fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.card-fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.card-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
