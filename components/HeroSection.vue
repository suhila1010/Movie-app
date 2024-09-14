<template>
  <div class="flex relative justify-end h-[78vh]">
    <img src="~/assets/m1.webp" class="w-[70%] h-full object-cover" />
    <div class="w-full absolute top-0 z-10 gred h-full">
      <div class="w-[40%] text-white flex px-32">text</div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
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
</style>
