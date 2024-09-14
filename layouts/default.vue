<template>
  <div class="overflow-hidden">
    <ul
      class="basis-[5%] bg-black h-screen text-[#fff] flex flex-col justify-evenly items-center fixed px-5"
    >
      <li>
        <IconsHome class="w-9 h-9" />
      </li>
      <li>
        <IconsMovie class="w-8 h-8" />
      </li>
      <li>
        <IconsTV class="w-8 h-8" />
      </li>
      <li>
        <IconsSearch class="w-8 h-8" />
      </li>
    </ul>
    <div class="bg-[#111111] basis-[95%] text-[#fff] relative left-[5%]">
      <slot />
      <Footer />
    </div>
  </div>
</template>
