<template>
  <div class="flex relative justify-end h-[78vh]">
    <img
      :src="'https://image.tmdb.org/t/p/original/' + item?.backdrop_path"
      class="w-[70%] h-full object-cover"
    />
    <div class="w-full absolute top-0 z-10 gred h-full py-36">
      <Transition  appear name="hero">
        <div class="w-[70%] text-white px-32" v-if="item">
          <h1 class="text-5xl mt-28 font-normal">{{ item?.original_title }}</h1>
          <div class="flex items-center gap-3 my-3">
            <rating :value="item?.vote_average" class="!w-[80px] my-3" />
            <div class="opacity-60">
              {{ formatVote(item?.vote_average) }}
            </div>
            <span class="opacity-60">.</span>
            <div class="opacity-60">
              {{
                $t("{numberOfReviews} Reviews", {
                  numberOfReviews: formatVote(item?.vote_count),
                })
              }}
            </div>
            <span class="opacity-60">.</span>
            <div v-if="props.item?.release_date" class="opacity-60">
              {{ item.release_date?.slice(0, 4) }}
            </div>
            <span v-if="props.item?.runtime" class="opacity-60">·</span>
            <div v-if="props.item?.runtime" class="opacity-60">
              {{ formatTime(props.item?.runtime) }}
            </div>
          </div>
          <p class="opacity-80">
            {{ item?.overview }}
          </p>
          <div class="mt-5">
            <button
              class="flex items-center gap-3 hover:bg-[#69696988] px-6 py-3"
            >
              <font-awesome-icon
                :icon="['fa-solid', 'fa-play']"
                class="opacity-50 text-lg"
              />
              Watch Trailer
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["item"]);

</script>

<style>
.gred {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 30%,
    transparent 100%
  );
  width: 100%;
}
.hero-enter-active,
.hero-leave-active {
  transition: transform .75s cubic-bezier(.4, .25, .3, 1), opacity .3s cubic-bezier(.4, .25, .3, 1);
}

.hero-enter-from,
.hero-leave-to {
  opacity: 0;
  transform: translate3d(0, 2rem, 0);
}

.hero-enter-to,
.hero-leave-from {
  opacity: 1;
  transform: translateZ(0);
}

</style>
